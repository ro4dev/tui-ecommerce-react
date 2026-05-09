import React from 'react'
import 'tui-components-react/src/index.css'
import {
  SidebarNav,
  Breadcrumb,
  Alert,
  CardStats,
  Table,
  Tabs,
  StatusBadge,
  SearchInput,
  ProgressBar,
  Pagination,
  HorizontalDivider,
  Panel,
  CounterBadge,
  EmptyState,
  colors, font,
} from 'tui-components-react'

const sidebarGroups = [
  {
    header: 'Tienda',
    items: [
      { label: 'Catálogo', active: true },
      { label: 'Ofertas' },
    ],
  },
  {
    header: 'Cuenta',
    items: [
      { label: 'Perfil' },
      { label: 'Órdenes' },
    ],
  },
]

const breadcrumbItems = [
  { label: 'Inicio' },
  { label: 'Catálogo', active: true },
]

const tabItems = [
  { id: 'all', label: 'Todos', content: <p>Mostrando todos los productos</p> },
  { id: 'modules', label: 'Módulos', content: <p>Módulos y placas de desarrollo</p> },
  { id: 'kits', label: 'Kits', content: <p>Kits y bundles</p> },
  { id: 'sensors', label: 'Sensores', content: <p>Sensores y módulos de medición</p> },
  { id: 'displays', label: 'Displays', content: <p>Pantallas y displays</p> },
]

const tableColumns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Producto' },
  { key: 'price', label: 'Precio', numeric: true },
  { key: 'stock', label: 'Stock' },
]

const products = [
  { id: '001', name: 'ESP32 Dev Board', price: '$12.50', stock: <StatusBadge state="active" label="En stock" /> },
  { id: '002', name: 'Raspberry Pi 5', price: '$80.00', stock: <StatusBadge state="warning" label="Bajo stock" /> },
  { id: '003', name: 'DHT22 Sensor', price: '$4.20', stock: <StatusBadge state="error" label="Agotado" /> },
  { id: '004', name: 'OLED 128x64', price: '$9.90', stock: <StatusBadge state="active" label="En stock" /> },
]

function App() {
  const [page, setPage] = React.useState(1)

  return (
    <div style={{ fontFamily: font, background: colors.canvas, color: colors.body, minHeight: '100vh' }}>
      <div style={{ display: 'flex' }}>
        <SidebarNav groups={sidebarGroups} />

        <main style={{ flex: 1, padding: '24px 32px', maxWidth: '960px' }}>
          <Breadcrumb items={breadcrumbItems} />

          <h1 style={{ fontSize: '24px', color: colors.ink, margin: '16px 0' }}>
            Catálogo de Productos
          </h1>

          <Alert type="info" title="Envío gratis">
            En compras mayores a $50 el envío es gratis.
          </Alert>

          <div style={{ margin: '16px 0' }}>
            <CardStats cells={[
              { number: '2.4K', label: 'Productos' },
              { number: '15K', label: 'Clientes' },
              { number: '99%', label: 'Satisfacción' },
            ]} />
          </div>

          <SearchInput placeholder="Buscar productos..." />

          <div style={{ margin: '16px 0' }}>
            <Tabs tabs={tabItems} />
          </div>

          <Panel header="Resultados">
            <Table columns={tableColumns} rows={products} />
          </Panel>

          <div style={{ margin: '16px 0', display: 'flex', justifyContent: 'center' }}>
            <Pagination current={page} total={12} onChange={setPage} />
          </div>

          <HorizontalDivider />

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '16px 0' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Carrito <CounterBadge count={3} />
            </span>
            <div style={{ flex: 1 }}>
              <ProgressBar value={35} />
            </div>
            <span>$35.60</span>
          </div>

          <HorizontalDivider />

          <Footer />
        </main>
      </div>
    </div>
  )
}

function Footer() {
  const links = ['GitHub', 'Docs', 'Soporte', 'Privacidad', 'Términos']
  return (
    <footer style={{ padding: '16px 0', display: 'flex', gap: '16px', justifyContent: 'center', fontSize: '14px', color: colors.stone }}>
      {links.map((link) => (
        <span key={link} style={{ cursor: 'pointer' }}>{link}</span>
      ))}
    </footer>
  )
}

export default App
