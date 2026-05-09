## Overview

This document extends the OpenCode design system to cover the full vocabulary of in-product UI components — tables, cards, alerts, dialogs, and more. Every component below uses the same Berkeley Mono typography, cream canvas, 4px radius on interactive elements, and ASCII bracket markers that define the brand. No component introduces new colors, new fonts, or drop shadows. The constraint is the identity.

**Key Characteristics:**
- Every component inherits Berkeley Mono at `{typography.body-md}` (16px / 400) as the default text role
- No component uses `{rounded.none}` (0px) on interactive elements; interactive always means `{rounded.sm}` (4px)
- No component uses drop shadows, gradients, or atmospheric backgrounds
- ASCII bracket markers (`[+]`, `[-]`, `[x]`, `→`) replace SVG icons wherever a glyph is needed
- Dark surface (`{colors.surface-dark}`) is reserved for dialogs, code blocks, and the hero mockup — never for card surfaces on marketing pages

---

## Tables

### `table-default`
- Background `{colors.canvas}`, border `1px solid {colors.hairline}`, no outer border-radius.
- Header row: background `{colors.surface-soft}`, text `{typography.body-strong}` `{colors.ink}`, padding `8px 12px`, bottom border `1px solid {colors.hairline-strong}`.
- Body rows: alternating tints — even rows `{colors.canvas}`, odd rows `{colors.surface-soft}`, text `{typography.body-md}` `{colors.body}`, padding `8px 12px`.
- Bottom border on each row: `1px solid {colors.hairline}`.
- Column alignment: left by default; numeric columns right-aligned.

### `table-compact`
- Same as `table-default` but row padding `4px 12px`, header `{typography.body-tight}`.
- Used in dense data views (file lists, process tables, log viewers).

### `table-interactive`
- Extends `table-default` with row hover: background `{colors.surface-card}`.
- Selectable rows: leftmost column contains `[ ]` (unchecked) / `[x]` (checked) ASCII checkbox.
- Selected row background: `{colors.surface-card}` with left `2px solid {colors.ink}` border accent.

### `table-bordered`
- Adds vertical `1px solid {colors.hairline}` between every column.
- Used when column alignment needs visual separation.

---

## Cards

### `card-flat`
- Background `{colors.canvas}`, `1px solid {colors.hairline}` border, `{rounded.sm}` (4px).
- Internal padding `{spacing.lg}` (16px).
- No shadow, no elevation — the hairline border is the only container signal.
- Used for feature blocks, benefit summaries, and section-level containers.

### `card-header`
- Same as `card-flat` with an internal header row: bottom `1px solid {colors.hairline}`, padding `8px 16px` for the header zone.
- Header text: `{typography.body-strong}` `{colors.ink}`.
- Body zone: padding `16px` (independent of header padding).

### `card-dark`
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, `{rounded.sm}` (4px).
- Padding `{spacing.lg}` (16px).
- Used for TUI mockup panels, terminal-style content blocks, and elevated in-product surfaces.
- Never used on marketing pages — belongs to the in-product TUI only.

### `card-stats`
- Three-column stat card row.
- Each cell: `{typography.display-xl}` (38px / 700) for the number, `{typography.caption-md}` `{colors.mute}` for the label.
- Cells separated by `1px solid {colors.hairline}` vertical rules.
- Background `{colors.canvas}`, outer border `1px solid {colors.hairline}`, `{rounded.sm}`.
- Padding `{spacing.xl}` (24px) per cell.

---

## Alerts & Callouts

### `alert-info`
- Background `{colors.surface-soft}`, left border `3px solid {colors.accent}`, `{rounded.sm}`.
- Icon: `[i]` ASCII marker in `{colors.accent}`.
- Title: `{typography.body-strong}` `{colors.ink}`.
- Body: `{typography.body-md}` `{colors.body}`.
- Padding `12px 16px`.

### `alert-warning`
- Background `{colors.surface-soft}`, left border `3px solid {colors.warning}`, `{rounded.sm}`.
- Icon: `[!]` ASCII marker in `{colors.warning}`.
- Title: `{typography.body-strong}` `{colors.ink}`.
- Body: `{typography.body-md}` `{colors.body}`.
- Padding `12px 16px`.

### `alert-danger`
- Background `{colors.surface-soft}`, left border `3px solid {colors.danger}`, `{rounded.sm}`.
- Icon: `[x]` ASCII marker in `{colors.danger}`.
- Title: `{typography.body-strong}` `{colors.ink}`.
- Body: `{typography.body-md}` `{colors.body}`.
- Padding `12px 16px`.

### `alert-success`
- Background `{colors.surface-soft}`, left border `3px solid {colors.success}`, `{rounded.sm}`.
- Icon: `[✓]` ASCII marker in `{colors.success}`.
- Title: `{typography.body-strong}` `{colors.ink}`.
- Body: `{typography.body-md}` `{colors.body}`.
- Padding `12px 16px`.

### `alert-inline`
- No background, no border-radius. Text-only with leading ASCII marker.
- Format: `[!] {typography.body-md}` `{colors.warning}` inline with body prose.
- Used for in-paragraph cautions where a full alert block would break flow.

---

## Modals & Dialogs

### `dialog-default`
- Overlay: `{colors.ink-deep}` at 60% opacity, full viewport.
- Panel: background `{colors.canvas}`, `{rounded.sm}` (4px), max-width `480px`, centered.
- Panel border: `1px solid {colors.hairline-strong}`.
- Header zone: padding `16px 20px`, bottom `1px solid {colors.hairline}`, `{typography.body-strong}` `{colors.ink}`.
- Body zone: padding `20px`, `{typography.body-md}` `{colors.body}`.
- Footer zone (actions): padding `12px 20px`, top `1px solid {colors.hairline}`, right-aligned action buttons.
- Close: `[×]` ASCII marker in `{colors.mute}`, top-right of header zone, tappable target `36px`.

### `dialog-dark`
- Panel background `{colors.surface-dark}`, text `{colors.on-dark}`, all other rules same as `dialog-default`.
- Used for terminal confirmation prompts and destructive actions.

### `dialog-confirm`
- Variant of `dialog-default` with action pair: `{component.button-primary}` (confirm) + `{component.button-secondary}` (cancel).
- Confirm button uses `{colors.danger}` background only for destructive actions; otherwise uses `{colors.primary}`.

---

## Tabs

### `tab-strip`
- Horizontal row, background transparent, bottom `2px solid {colors.hairline-strong}`.
- Each tab: `{typography.button-md}`, padding `8px 16px`, text `{colors.mute}`.
- Active tab: text `{colors.ink}`, bottom `2px solid {colors.ink}` underline that overlaps the strip rule.
- Gap between tabs: `{spacing.md}` (12px).

### `tab-pills`
- Each tab rendered as a `{rounded.sm}` pill: background `{colors.surface-soft}`, text `{colors.mute}`, padding `4px 12px`.
- Active pill: background `{colors.ink}`, text `{colors.on-dark}`.
- Gap between pills: `{spacing.xs}` (4px).
- Used for filter groups and compact tab sets.

---

## Accordions

### `accordion-default`
- Each item: background `{colors.canvas}`, bottom `1px solid {colors.hairline}`.
- Header row: padding `12px 16px`, `{typography.body-strong}` `{colors.ink}`.
- Toggle marker: `+` (collapsed) / `−` (expanded) in `{colors.mute}`, placed before the header text.
- Body zone (expanded): padding `0 16px 12px`, `{typography.body-md}` `{colors.body}`.
- No animation; expand/collapse is instant.

### `accordion-nested`
- Extends `accordion-default` with indented child rows at `16px` left padding.
- Child toggle markers use `→` (collapsed) / `↓` (expanded).
- Used for FAQ sections with sub-questions.

---

## Tooltips

### `tooltip-default`
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, `{typography.caption-md}` (14px), `{rounded.sm}` (4px).
- Padding `4px 8px`, max-width `240px`.
- Positioned below the trigger element with `4px` gap.
- No arrow; the rectangle itself is the tooltip.
- Appears on focus and hover; dismisses on pointer leave or escape key.

---

## Badges & Status Indicators

### `badge-status`
- Pill shape `{rounded.full}` (9999px), padding `2px 8px`, `{typography.caption-md}`.
- Dot variant: `●` (filled circle) + label text, gap `4px`.
- States:
  - **active** — background `{colors.success}`, text `{colors.on-dark}`
  - **warning** — background `{colors.warning}`, text `{colors.ink}`
  - **error** — background `{colors.danger}`, text `{colors.on-dark}`
  - **idle** — background `{colors.surface-card}`, text `{colors.mute}`

### `badge-label`
- Background `{colors.surface-card}`, text `{typography.caption-md}` `{colors.mute}`, `{rounded.sm}` (4px), padding `2px 8px`.
- Used for version tags, category labels, and metadata pills.

### `badge-counter`
- Background `{colors.danger}`, text `{colors.on-dark}`, `{typography.caption-md}`, `{rounded.full}`, minimum width `20px`, height `20px`, centered text.
- Used for notification counts and error tallies.

---

## Progress & Loading

### `progress-bar`
- Track: background `{colors.surface-card}`, height `4px`, `{rounded.sm}`, full-width.
- Fill: background `{colors.accent}`, height `4px`, `{rounded.sm}`, width is dynamic.
- Used for file uploads, build progress, and task completion.

### `progress-spinner`
- ASCII spinner: `⟳` rotating glyph in `{colors.mute}`, `16px` size.
- Paired with `{typography.body-md}` `{colors.mute}` label (e.g., `⟳ Building...`).
- Used for indeterminate loads.

### `progress-steps`
- Horizontal step indicator with ASCII markers.
- Each step: `[1]` → `[2]` → `[3]` connected by `──` hairline rules.
- Completed steps: `[x]` in `{colors.success}`, rule in `{colors.success}`.
- Current step: `[2]` in `{colors.ink}`.
- Future steps: `[3]` in `{colors.mute}`, rule in `{colors.hairline}`.
- Labels beneath each marker in `{typography.caption-md}` `{colors.mute}`.

---

## Breadcrumbs

### `breadcrumb-default`
- Horizontal row, `{typography.caption-md}`.
- Separator: `/` in `{colors.stone}`.
- Visited items: `{colors.stone}`, no underline.
- Current item: `{colors.ink}`, no underline.
- Example: `home / docs / agents / configuration`

---

## Code Blocks

### `code-block`
- Background `{colors.surface-dark}`, text `{colors.on-dark}`, `{rounded.sm}` (4px).
- Padding `16px`, font family Berkeley Mono (already monospaced), `{typography.body-md}`.
- Top bar: `1px solid {colors.hairline-strong}`, with filename in `{typography.caption-md}` `{colors.ash}` and a copy button `[⎘]` at the right.
- Line numbers: `{colors.ash}`, right-aligned in a `32px` gutter, separated from code by `1px solid {colors.hairline}`.

### `code-inline`
- Background `{colors.surface-card}`, text `{colors.ink}`, `{rounded.sm}` (4px), padding `2px 6px`.
- Used for inline code references within body prose.

---

## Avatars & User Pills

### `avatar-circle`
- Background `{colors.surface-card}`, text `{colors.ink}`, `{rounded.full}` (9999px).
- Size `32px` (default), `24px` (compact).
- If image: circular crop via `border-radius: 9999px`.
- If initials: `{typography.body-strong}` centered, uppercase, single letter.

### `user-pill`
- Horizontal row: `{component.avatar-circle}` (24px) + name `{typography.body-md}` `{colors.ink}` + role `{typography.caption-md}` `{colors.mute}`.
- Padding `4px 0`, gap `8px` between avatar and text.
- Used in testimonial rows, team lists, and session participant lists.

---

## Empty States

### `empty-default`
- Centered block, padding `{spacing.xxl}` (32px).
- Icon: ASCII marker `[∅]` in `{colors.stone}`, `24px`.
- Title: `{typography.body-strong}` `{colors.ink}`, centered.
- Description: `{typography.body-md}` `{colors.mute}`, centered, max-width `320px`.
- Optional CTA: `{component.button-primary}` below the description.

---

## Toggle & Switch

### `toggle-ascii`
- ASCII-style toggle: `[ ]` (off) / `[x]` (on), `{typography.body-md}`.
- On state: `[x]` rendered in `{colors.ink}`.
- Off state: `[ ]` rendered in `{colors.mute}`.
- Followed by label text at `8px` gap.
- Tappable target `36px` minimum.

### `toggle-switch`
- Pill track: width `40px`, height `20px`, `{rounded.full}`.
- Off: background `{colors.surface-card}`, knob `{colors.mute}`.
- On: background `{colors.ink}`, knob `{colors.on-dark}`.
- Knob: `16px` diameter circle, `2px` padding from track edge.

---

### `toggle-switch`
- Pill track: width `40px`, height `20px`, `{rounded.full}`.
- Off: background `{colors.surface-card}`, knob `{colors.mute}`.
- On: background `{colors.ink}`, knob `{colors.on-dark}`.
- Knob: `16px` diameter circle, `2px` padding from track edge.

---

## Navigation

### `sidebar-nav`
- Background `{colors.canvas}`, right border `1px solid {colors.hairline}`, width `240px`.
- Each item: padding `8px 16px`, `{typography.body-md}` `{colors.body}`.
- Active item: background `{colors.surface-soft}`, text `{typography.body-strong}` `{colors.ink}`, left `2px solid {colors.ink}` border.
- Group headers: `{typography.body-tight}` `{colors.stone}`, uppercase, padding `12px 16px 4px`.
- Nested items: `16px` left indent, ASCII prefix `→ `.

### `pagination`
- Horizontal row, gap `{spacing.xs}` (4px).
- Each page: `{typography.body-md}`, padding `4px 8px`, `{rounded.sm}`.
- Default: text `{colors.body}`, background transparent.
- Active: text `{colors.ink}`, background `{colors.surface-soft}`.
- Prev/Next: `[←]` / `[→]` ASCII markers in `{colors.mute}`.
- Ellipsis: `···` in `{colors.stone}` for skipped ranges.

### `dropdown-menu`
- Panel: background `{colors.canvas}`, `1px solid {colors.hairline-strong}` border, `{rounded.sm}` (4px), min-width `200px`, max-width `320px`.
- Each item: padding `8px 12px`, `{typography.body-md}` `{colors.body}`.
- Hover item: background `{colors.surface-soft}`, text `{colors.ink}`.
- Divider: `1px solid {colors.hairline}` between groups.
- Keyboard shortcut hint: right-aligned `{component.kbd}` in `{colors.stone}`.

### `context-menu`
- Same as `dropdown-menu` but with destructive item variant: text `{colors.danger}`, hover background `rgba(255,59,48,0.08)`.
- Triggered by right-click; positioned at cursor with `4px` offset.

---

## Forms

### `select`
- Closed: same as `{component.text-input}`, with `[▾]` ASCII indicator at right in `{colors.mute}`.
- Open panel: same as `{component.dropdown-menu}`, with `[•]` prefix on selected option in `{colors.ink}`.
- Max visible options: 8; beyond that, `{component.search-input}` appears at top of panel.

### `radio-group`
- Each option: `( )` (unselected) / `(•)` (selected) in `{typography.body-md}`, gap `8px` to label.
- Selected: `(•)` in `{colors.ink}`.
- Unselected: `( )` in `{colors.mute}`.
- Vertical stack, gap `{spacing.sm}` (8px) between options.

### `file-upload`
- Drop zone: `1px dashed {colors.hairline-strong}`, `{rounded.sm}`, padding `{spacing.xxl}` (32px), centered text.
- Icon: `[↑]` ASCII marker in `{colors.mute}`, `24px`.
- Label: `{typography.body-md}` `{colors.body}` — "Drop files or click to upload".
- Drag-over: border becomes `2px solid {colors.ink}`, background `{colors.surface-soft}`.
- Uploaded file row: `{component.list-row}` with filename, size in `{colors.mute}`, and `[×]` remove button.

### `search-input`
- Same as `{component.text-input}` with `[⌕]` ASCII icon at left in `{colors.mute}`, `12px` padding.
- Clear button: `[×]` at right in `{colors.mute}`, appears when input has value.
- Results dropdown: same as `{component.dropdown-menu}` with matching text highlighted in `{colors.ink}` and non-matching in `{colors.mute}`.

---

## Feedback & Notifications

### `toast`
- Panel: background `{colors.surface-dark}`, text `{colors.on-dark}`, `{rounded.sm}`, padding `12px 16px`, max-width `360px`.
- Positioned bottom-right of viewport, `16px` from edges.
- Stack: toasts stack vertically with `8px` gap, newest at top.
- Dismiss: `[×]` at top-right in `{colors.ash}`.
- Variants via left `3px` border: `{colors.accent}` (info), `{colors.success}` (success), `{colors.danger}` (error), `{colors.warning}` (warning).
- Auto-dismiss: 5 seconds for info/success, persistent for error/warning.

### `skeleton`
- Background `{colors.surface-card}`, `{rounded.sm}`.
- Animated: `opacity` pulse from `0.4` to `1.0` over `1.2s` infinite cycle.
- Shapes:
  - Text line: height `16px`, width variable.
  - Avatar circle: `32px` diameter, `{rounded.full}`.
  - Thumbnail: `120px × 80px`, `{rounded.sm}`.

### `inline-validation`
- Error: `{component.alert-inline}` with `[!]` in `{colors.danger}`, placed below the field.
- Success: `[✓]` ASCII marker in `{colors.success}`, same position.
- Field in error state: border becomes `1px solid {colors.danger}`.

---

## Layout Primitives

### `divider-horizontal`
- `1px solid {colors.hairline}`, full-width.
- For stronger separation: `1px solid {colors.hairline-strong}`.

### `divider-vertical`
- `1px solid {colors.hairline}`, full-height of parent.
- Used between inline items (nav links, action groups).

### `spacer`
- Vertical spacer tokens: `{spacing.xs}` (4px) · `{spacing.sm}` (8px) · `{spacing.md}` (12px) · `{spacing.lg}` (16px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.section}` (96px).
- Horizontal spacer tokens: same values at half-width.

### `container`
- Max-width `960px` for body content, centered.
- Inner padding: `{spacing.lg}` (16px) mobile, `{spacing.xl}` (24px) desktop.
- Full-bleed variant: no max-width, edge-to-edge (used for hero mockup, footer).

---

## Keyboard & Commands

### `kbd`
- Inline key indicator: background `{colors.surface-card}`, text `{typography.caption-md}` `{colors.mute}`, `1px solid {colors.hairline}` border, `{rounded.sm}` (4px), padding `2px 6px`.
- Font: Berkeley Mono, `12px` (slightly smaller than caption for visual hierarchy).
- Used in pairs: `<kbd>⌘</kbd> + <kbd>K</kbd>`.
- Active state: background `{colors.ink}`, text `{colors.on-dark}`.

### `command-palette`
- Overlay: `{colors.ink-deep}` at 60% opacity, full viewport.
- Panel: background `{colors.canvas}`, `{rounded.sm}`, max-width `560px`, centered at `20vh` from top.
- Search bar: `{component.search-input}`, full-width, bottom `1px solid {colors.hairline}`.
- Results: scrollable list, max-height `400px`, each item `{component.dropdown-menu}` row.
- Selected result: background `{colors.surface-soft}`, left `2px solid {colors.ink}` border.
- Footer hints: `{component.kbd}` labels — `<kbd>↑↓</kbd> navigate · <kbd>↵</kbd> select · <kbd>esc</kbd> close` in `{typography.caption-md}` `{colors.stone}`, top `1px solid {colors.hairline}`.

---

## Data Display

### `list`
- Simple vertical list: each item `{typography.body-md}` `{colors.body}`, padding `4px 0`, bottom `1px solid {colors.hairline}`.
- Bullet list: ASCII `[•]` prefix in `{colors.mute}`, `8px` indent.
- Numbered list: `1.` `2.` `3.` in `{colors.mute}`, `8px` indent.

### `definition-list`
- Term: `{typography.body-strong}` `{colors.ink}`, padding `8px 0 0`.
- Definition: `{typography.body-md}` `{colors.body}`, padding `0 0 8px 16px`.
- Bottom `1px solid {colors.hairline}` between pairs.

### `tag`
- Background `{colors.surface-soft}`, text `{typography.caption-md}` `{colors.mute}`, `{rounded.sm}`, padding `2px 8px`.
- Removable variant: `[×]` suffix in `{colors.stone}`.
- Gap `4px` between tags in a group.

---

## Media & Content

### `image-block`
- Background `{colors.surface-soft}`, `{rounded.sm}`, overflow hidden.
- Caption beneath: `{typography.caption-md}` `{colors.mute}`, padding `8px 0`.
- OpenCode guideline: prefer screenshots and diagrams over photography; ASCII/TUI renders take priority.

### `video-embed`
- Same as `{component.image-block}` with `[▶]` ASCII play overlay centered in `{colors.on-dark}` at 50% opacity.
- Aspect ratio locked to `16:9`.

### `blockquote`
- Left `3px solid {colors.hairline-strong}`, padding `0 0 0 16px`.
- Text: `{typography.body-md}` `{colors.mute}`, italic if the source is a person.
- Attribution: `{typography.caption-md}` `{colors.stone}`, `— Name` below the quote.

---

## Panels & Splitters

### `panel`
- Container: `1px solid {colors.hairline}`, `{rounded.sm}`.
- Header: `{colors.surface-soft}`, padding `8px 16px`, `{typography.body-strong}` `{colors.ink}`, bottom `1px solid {colors.hairline}`.
- Body: padding `{spacing.lg}` (16px).
- Footer (optional): padding `8px 16px`, top `1px solid {colors.hairline}`.

### `split-panel`
- Two panels side-by-side with draggable `│` splitter in `{colors.hairline-strong}`.
- Splitter hover: thickens to `4px` cursor area.
- Default ratio: `50/50`; resizable from `20/80` to `80/20`.
- Used for editor/preview, list/detail, and terminal/output layouts.

### `scroll-area`
- Custom scrollbar: track `{colors.surface-card}`, thumb `{colors.ash}`, width `6px`, `{rounded.sm}`.
- Thumb hover: `{colors.mute}`.
- Auto-hide: thumb fades after `2s` of no scroll activity.

---

## Copy & Clipboard

### `copy-button`
- `[⎘]` ASCII marker in `{colors.mute}`, tappable target `36px`.
- On click: marker changes to `[✓]` in `{colors.success}` for `1.5s`, then reverts.
- Always paired with `{component.code-block}` or `{component.install-snippet}`.

---

## Do's and Don'ts

### Do
- Use ASCII bracket markers (`[+]`, `[-]`, `[x]`, `[i]`, `[!]`, `[∅]`) instead of SVG icons
- Keep all text in Berkeley Mono — never introduce a sans-serif for component labels
- Use `{rounded.sm}` (4px) on every interactive element; `{rounded.none}` (0px) on tables and section containers
- Reference tokens directly (`{colors.ink}`, `{colors.accent}`, `{typography.body-md}`) — do not paraphrase
- Use `{colors.surface-soft}` for alert backgrounds, not `{colors.canvas}` — the tint signals "this is a callout"
- Keep alert left borders at `3px` — thick enough to scan, thin enough to stay quiet
- Use `{component.command-palette}` for any "search + action" interface — it's the OpenCode standard for navigation
- Use `{component.split-panel}` for editor/preview and list/detail layouts — users expect resizable panels in code tools
- Provide `{component.kbd}` hints alongside actions that have keyboard shortcuts — makes the TUI discoverable
- Toast notifications should carry context — the message must explain what happened, not just "Done"

### Don't
- Don't add drop shadows, glows, or elevation effects to any component
- Don't use `{colors.accent}` (Apple Blue) for CTA buttons on marketing surfaces — it belongs to the in-product TUI
- Don't animate accordion expand/collapse — the system is instant, not animated
- Don't introduce new radius values — the vocabulary is `0px`, `4px`, and `9999px` only
- Don't use photographic or illustrative imagery inside cards — the system is text-only
- Don't replace ASCII markers with emoji or icon fonts — `[x]` is the checkbox, not ☑
- Don't stack more than two action buttons in a dialog footer — the system prefers binary choices
- Don't put more than 5 toast notifications on screen — queue extras and show them sequentially
- Don't hide the command palette behind multiple levels of navigation — it should be one shortcut away (`ctrl-p` / `⌘K`)
- Don't use custom checkboxes or radio buttons that look like native OS controls — the ASCII `( )` / `(•)` / `[ ]` / `[x]` vocabulary is deliberate

---

## Responsive Behavior

### Tables
- Desktop: full column layout.
- Tablet (≤ 850px): horizontal scroll with sticky first column.
- Mobile (≤ 640px): card-per-row collapse — each row becomes a `{component.card-flat}` with field label + value stacked vertically.

### Cards
- Desktop: grid layout (2–3 columns).
- Tablet: 2 columns.
- Mobile: single column, full-width.

### Alerts
- All breakpoints: full-width within parent container.
- Mobile: padding reduces from `12px 16px` to `8px 12px`.

### Dialogs
- Desktop: centered panel, max-width `480px`.
- Mobile: slides up from bottom as a sheet, `{rounded.sm}` top corners only, max-height `80vh`.

### Tab strips
- Desktop: horizontal row.
- Mobile: horizontal scroll with no wrapping; each tab remains a single line.

### Progress steps
- Desktop: horizontal row.
- Mobile: vertical stack with `│` (pipe) connector between steps.

### Sidebar nav
- Desktop: fixed `240px` left sidebar.
- Tablet (≤ 850px): collapses to `{component.tab-pills}` horizontal strip at top.
- Mobile (≤ 640px): hidden behind `[☰]` ASCII hamburger; slides in as overlay at `280px` width.

### Command palette
- Desktop: centered `560px` panel at `20vh`.
- Mobile: full-screen overlay with search bar fixed at top.

### Split panels
- Desktop: side-by-side resizable.
- Tablet: side-by-side with fixed `50/50` ratio (no resize handle).
- Mobile: stacks vertically with `{component.tab-strip}` to switch between panels.

### Toast notifications
- Desktop: bottom-right stack.
- Mobile: top-full-width banners that stack downward, auto-dismiss after `3s`.

### Pagination
- Desktop: full page range with prev/next.
- Mobile: prev/next only with current page indicator — `← 3 of 12 →`.

### Dropdown / Context menus
- All breakpoints: panel width adapts to content, max `320px`.
- Mobile: opens as bottom sheet with full-width items.
