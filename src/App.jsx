import React, { useState, useCallback } from 'react'
import 'tui-components-react/src/index.css'
import {
  Alert,
  CardStats,
  Table,
  StatusBadge,
  LabelBadge,
  SearchInput,
  ProgressBar,
  CounterBadge,
  EmptyState,
  HorizontalDivider,
  Dialog,
  ToastContainer, toast,
  colors, font, spacing, radius,
} from 'tui-components-react'

const PRODUCTS = [
  { id: 'ESP01', name: 'ESP32-WROOM-32 Dev Board', price: 12.50, category: 'modules', stock: 45, stockStatus: 'active' },
  { id: 'ESP02', name: 'ESP32-C3 SuperMini', price: 5.90, category: 'modules', stock: 120, stockStatus: 'active' },
  { id: 'ESP03', name: 'ESP32-S3 DevKitC-1', price: 18.00, category: 'modules', stock: 8, stockStatus: 'warning' },
  { id: 'RPI01', name: 'Raspberry Pi 5 — 8GB', price: 80.00, category: 'kits', stock: 3, stockStatus: 'warning' },
  { id: 'RPI02', name: 'Raspberry Pi Pico W', price: 6.50, category: 'kits', stock: 60, stockStatus: 'active' },
  { id: 'KIT01', name: 'Kit IoT ESP32 + Sensores', price: 34.90, category: 'kits', stock: 0, stockStatus: 'error' },
  { id: 'SEN01', name: 'DHT22 Temp/Humidity', price: 4.20, category: 'sensors', stock: 200, stockStatus: 'active' },
  { id: 'SEN02', name: 'HC-SR04 Ultrasonic', price: 2.80, category: 'sensors', stock: 150, stockStatus: 'active' },
  { id: 'SEN03', name: 'BMP280 Barometric', price: 3.50, category: 'sensors', stock: 0, stockStatus: 'error' },
  { id: 'DIS01', name: 'OLED 128x64 I2C', price: 9.90, category: 'displays', stock: 35, stockStatus: 'active' },
  { id: 'DIS02', name: 'TFT 2.8" Touch SPI', price: 14.50, category: 'displays', stock: 12, stockStatus: 'active' },
  { id: 'DIS03', name: 'E-Ink 7.5" Waveshare', price: 42.00, category: 'displays', stock: 2, stockStatus: 'warning' },
]

const CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'modules', label: 'Módulos' },
  { id: 'kits', label: 'Kits' },
  { id: 'sensors', label: 'Sensores' },
  { id: 'displays', label: 'Displays' },
]

const FREE_SHIPPING_MIN = 50

function stockBadge(status, qty) {
  const map = {
    active: { state: 'active', label: `${qty} en stock` },
    warning: { state: 'warning', label: `Solo ${qty}` },
    error: { state: 'error', label: 'Agotado' },
  }
  const s = map[status]
  return <StatusBadge state={s.state} label={s.label} />
}

function App() {
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  const addToCart = useCallback((product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        toast('info', `${product.name} x${existing.qty + 1}`)
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      toast('success', `${product.name} agregado al carrito`)
      return [...prev, { ...product, qty: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((id) => {
    setCart(prev => prev.filter(item => item.id !== id))
    toast('warning', 'Producto eliminado del carrito')
  }, [])

  const updateQty = useCallback((id, delta) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      ).filter(item => item.qty > 0)
    )
  }, [])

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)
  const shippingProgress = Math.min(100, (cartTotal / FREE_SHIPPING_MIN) * 100)

  const filteredProducts = PRODUCTS.filter(p => {
    if (category !== 'all' && p.category !== category) return false
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  const cartColumns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Producto' },
    { key: 'price', label: 'Precio', numeric: true },
    { key: 'qty', label: 'Cant.' },
    { key: 'subtotal', label: 'Subtotal', numeric: true },
  ]

  const cartRows = cart.map(item => ({
    ...item,
    subtotal: `$${(item.price * item.qty).toFixed(2)}`,
    price: `$${item.price.toFixed(2)}`,
  }))

  const productColumns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Producto' },
    { key: 'price', label: 'Precio', numeric: true },
    { key: 'stock', label: 'Stock' },
  ]

  const productRows = filteredProducts.map(product => ({
    ...product,
    stock: stockBadge(product.stockStatus, product.stock),
    price: `$${product.price.toFixed(2)}`,
  }))

  return (
    <div style={{ fontFamily: font, background: colors.canvas, color: colors.body, minHeight: '100vh' }}>
      <ToastContainer />

      <Dialog
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        title="Confirmar pedido"
        footer={
          <>
            <button
              style={{
                fontFamily: font, fontSize: '14px', padding: '8px 16px', borderRadius: radius.sm,
                cursor: 'pointer', border: `1px solid ${colors.hairlineStrong}`,
                background: 'transparent', color: colors.body,
              }}
              onClick={() => setCheckoutOpen(false)}
            >Cancelar</button>
            <button
              style={{
                fontFamily: font, fontSize: '14px', padding: '8px 16px', borderRadius: radius.sm,
                cursor: 'pointer', border: 'none', background: colors.ink, color: colors.onDark,
              }}
              onClick={() => {
                setCheckoutOpen(false)
                setCart([])
                toast('success', 'Pedido confirmado. ¡Gracias por comprar!')
              }}
            >Confirmar</button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {cart.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
              <span>{item.name} <span style={{ color: colors.mute }}>x{item.qty}</span></span>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          <HorizontalDivider />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: colors.ink }}>
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
        </div>
      </Dialog>

      {/* Header */}
      <Header cartCount={cartCount} cartTotal={cartTotal} />

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <Sidebar category={category} onCategory={setCategory} />

        {/* Main */}
        <main style={{ flex: 1, padding: '24px 32px', maxWidth: '960px' }}>

          <Breadcrumb category={category} />

          <h1 style={{ fontSize: '24px', color: colors.ink, margin: '16px 0' }}>
            {category === 'all' ? 'Catálogo de Productos' : CATEGORIES.find(c => c.id === category)?.label}
          </h1>

          {cartTotal > 0 && cartTotal < FREE_SHIPPING_MIN && (
            <Alert type="info" title="Envío gratis">
              Te faltan ${(FREE_SHIPPING_MIN - cartTotal).toFixed(2)} para envío gratis.
            </Alert>
          )}
          {cartTotal >= FREE_SHIPPING_MIN && (
            <Alert type="success" title="Envío gratis">Tenés envío gratis en este pedido.</Alert>
          )}

          {cartTotal === 0 && (
            <Alert type="info" title="Envío gratis">En compras mayores a ${FREE_SHIPPING_MIN} el envío es gratis.</Alert>
          )}

          <div style={{ margin: '16px 0' }}>
            <CardStats cells={[
              { number: '2.4K', label: 'Productos' },
              { number: '15K', label: 'Clientes' },
              { number: '99%', label: 'Satisfacción' },
            ]} />
          </div>

          <SearchInput placeholder="Buscar productos..." onSearch={setSearch} />

          <div style={{ margin: '16px 0' }}>
            <CategoryTabs categories={CATEGORIES} active={category} onChange={setCategory} />
          </div>

          {productRows.length === 0 ? (
            <EmptyState
              title="Sin resultados"
              description={`No encontramos "${search}" en ${category === 'all' ? 'el catálogo' : 'esta categoría'}.`}
            />
          ) : (
            <>
              <Table columns={productColumns} rows={productRows} bordered />
              <div style={{ marginTop: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                {filteredProducts.map(p => (
                  <button
                    key={p.id}
                    style={{
                      fontFamily: font, fontSize: '12px', padding: '4px 10px', borderRadius: radius.sm,
                      cursor: p.stockStatus === 'error' ? 'not-allowed' : 'pointer',
                      border: `1px solid ${colors.hairline}`,
                      background: p.stockStatus === 'error' ? colors.surfaceCard : colors.canvas,
                      color: p.stockStatus === 'error' ? colors.mute : colors.body,
                      opacity: p.stockStatus === 'error' ? 0.5 : 1,
                    }}
                    disabled={p.stockStatus === 'error'}
                    onClick={() => addToCart(p)}
                  >
                    [+]{' '}{p.name}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Cart section */}
          {cart.length > 0 && (
            <div style={{ marginTop: '32px' }}>
              <HorizontalDivider />
              <h2 style={{ fontSize: '18px', color: colors.ink, margin: '16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Carrito <CounterBadge count={cartCount} />
              </h2>

              <Table columns={cartColumns} rows={cartRows} bordered />

              <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cart.map(item => (
                  <div key={item.id} style={{
                    display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 8px',
                    border: `1px solid ${colors.hairline}`, borderRadius: radius.sm, fontSize: '13px',
                    background: colors.surfaceSoft,
                  }}>
                    <span>{item.name}</span>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: colors.mute, fontFamily: font, fontSize: '13px', padding: '0 2px' }}
                      onClick={() => updateQty(item.id, -1)}>[-]</button>
                    <span style={{ color: colors.ink }}>{item.qty}</span>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: colors.mute, fontFamily: font, fontSize: '13px', padding: '0 2px' }}
                      onClick={() => updateQty(item.id, 1)}>[+]</button>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: colors.danger, fontFamily: font, fontSize: '13px', padding: '0 2px 0 6px' }}
                      onClick={() => removeFromCart(item.id)}>[×]</button>
                  </div>
                ))}
              </div>

              <div style={{ margin: '16px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
                  <span>Progreso envío gratis (${FREE_SHIPPING_MIN})</span>
                  <span style={{ color: colors.ink }}>{shippingProgress >= 100 ? '¡Logrado!' : `$${cartTotal.toFixed(2)}`}</span>
                </div>
                <ProgressBar value={shippingProgress} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '18px', fontWeight: 700, color: colors.ink }}>
                  Total: ${cartTotal.toFixed(2)}
                </span>
                <button
                  style={{
                    fontFamily: font, fontSize: '14px', padding: '10px 24px', borderRadius: radius.sm,
                    cursor: 'pointer', border: 'none', background: colors.ink, color: colors.onDark,
                    fontWeight: 600,
                  }}
                  onClick={() => setCheckoutOpen(true)}
                >[→] Proceder al pago</button>
              </div>
            </div>
          )}

          <HorizontalDivider />
          <Footer />
        </main>
      </div>
    </div>
  )
}

function Header({ cartCount, cartTotal }) {
  return (
    <header style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '12px 32px', borderBottom: `1px solid ${colors.hairlineStrong}`,
      background: colors.surfaceSoft,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing.lg }}>
        <span style={{ fontSize: '16px', fontWeight: 700, color: colors.ink, letterSpacing: '1px' }}>
          HARDWARE TUI
        </span>
        <span style={{ color: colors.mute, fontSize: '12px' }}>
          Componentes para desarrolladores
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
          <CounterBadge count={cartCount} />
          <span style={{ color: colors.body }}>${cartTotal.toFixed(2)}</span>
        </span>
      </div>
    </header>
  )
}

function Sidebar({ category, onCategory }) {
  const links = [
    { id: 'all', label: 'Catálogo' },
    { id: 'ofertas', label: 'Ofertas' },
    { id: 'cuenta', label: 'Cuenta' },
    { id: 'ordenes', label: 'Órdenes' },
  ]
  return (
    <nav style={{
      width: '200px', borderRight: `1px solid ${colors.hairline}`,
      padding: spacing.md, background: colors.canvas, minHeight: 'calc(100vh - 53px)',
    }}>
      {links.map(link => (
        <div
          key={link.id}
          style={{
            padding: '8px 16px', fontSize: '14px', cursor: 'pointer', borderRadius: radius.sm,
            color: link.id === 'ofertas' ? colors.warning : (category === link.id ? colors.ink : colors.body),
            background: category === link.id ? colors.surfaceSoft : 'transparent',
            fontWeight: category === link.id ? 700 : 400,
            marginBottom: '2px',
          }}
          onClick={() => {
            if (link.id === 'ofertas' || link.id === 'cuenta' || link.id === 'ordenes') {
              toast('info', `${link.label} — próximamente`)
            } else {
              onCategory(link.id)
            }
          }}
        >{link.id === 'ofertas' ? '[!] ' : ''}{link.label}</div>
      ))}
      <HorizontalDivider />
      <div style={{ fontSize: '12px', color: colors.stone, padding: '12px 16px 4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
        Categorías
      </div>
      {CATEGORIES.map(cat => (
        <div
          key={cat.id}
          style={{
            padding: '6px 16px 6px 24px', fontSize: '13px', cursor: 'pointer', borderRadius: radius.sm,
            color: category === cat.id ? colors.ink : colors.mute,
            background: category === cat.id ? colors.surfaceSoft : 'transparent',
          }}
          onClick={() => onCategory(cat.id)}
        >{category === cat.id ? '→ ' : '  '}{cat.label}</div>
      ))}
    </nav>
  )
}

function Breadcrumb({ category }) {
  const items = [
    { label: 'Inicio' },
    { label: category === 'all' ? 'Catálogo' : CATEGORIES.find(c => c.id === category)?.label || 'Catálogo', active: true },
  ]
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: spacing.sm, fontSize: '14px' }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: spacing.sm }}>
          {i > 0 && <span style={{ color: colors.stone }}>/</span>}
          <span style={{ color: item.active ? colors.ink : colors.stone, textDecoration: 'none', fontSize: '14px' }}>
            {item.label}
          </span>
        </span>
      ))}
    </div>
  )
}

function CategoryTabs({ categories, active, onChange }) {
  return (
    <div style={{ display: 'flex', gap: spacing.xs, flexWrap: 'wrap' }}>
      {categories.map(cat => (
        <div
          key={cat.id}
          style={{
            padding: '4px 12px', cursor: 'pointer', fontSize: '14px', fontFamily: font,
            background: cat.id === active ? colors.ink : colors.surfaceSoft,
            color: cat.id === active ? colors.canvas : colors.mute,
            borderRadius: radius.sm, border: 'none',
          }}
          onClick={() => onChange(cat.id)}
        >{cat.label}</div>
      ))}
    </div>
  )
}

function Footer() {
  const links = ['GitHub', 'Docs', 'Soporte', 'Privacidad', 'Términos']
  return (
    <footer style={{ padding: '16px 0', display: 'flex', gap: '16px', justifyContent: 'center', fontSize: '14px', color: colors.stone }}>
      {links.map(link => (
        <span key={link} style={{ cursor: 'pointer' }}>{link}</span>
      ))}
    </footer>
  )
}

export default App
