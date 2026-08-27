---
name: Direct Growth Digital
colors:
  surface: '#f3fcef'
  surface-dim: '#d3ddd0'
  surface-bright: '#f3fcef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf6e9'
  surface-container: '#e7f1e4'
  surface-container-high: '#e2ebde'
  surface-container-highest: '#dce5d8'
  on-surface: '#151e16'
  on-surface-variant: '#3c4a3d'
  inverse-surface: '#2a332a'
  inverse-on-surface: '#eaf3e6'
  outline: '#6c7b6b'
  outline-variant: '#bbcbb9'
  surface-tint: '#006d2f'
  primary: '#006d2f'
  on-primary: '#ffffff'
  primary-container: '#25d366'
  on-primary-container: '#005523'
  inverse-primary: '#3de273'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#585f6c'
  on-tertiary: '#ffffff'
  tertiary-container: '#b1b8c7'
  on-tertiary-container: '#424956'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#66ff8e'
  primary-fixed-dim: '#3de273'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005322'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#dce2f3'
  tertiary-fixed-dim: '#c0c7d6'
  on-tertiary-fixed: '#151c27'
  on-tertiary-fixed-variant: '#404754'
  background: '#f3fcef'
  on-background: '#151e16'
  surface-variant: '#dce5d8'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  container_max_width: 1120px
  columns: '12'
  gutter: 24px
  margin: 20px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 80px
---

## Brand & Style
The design system is engineered for a high-performance SME digital agency, focusing on "proof-first" credibility and immediate conversion. The aesthetic is **Corporate / Modern** with a lean toward **Minimalism**, stripping away decorative fluff to prioritize case studies, metrics, and direct communication channels. 

The emotional response is one of professional reliability and localized expertise. By utilizing high-contrast typography and a signature action color, the UI guides users toward high-value interactions without the friction of traditional agency sites. Visuals must prioritize real-world local context—actual team photos, local client logos, and physical office environments—over generic stock photography.

## Colors
The palette is dominated by a high-utility "WhatsApp Green" to leverage immediate brand recognition for the Malaysian market's preferred communication tool. 

- **Primary:** Used exclusively for conversion actions (CTAs, WhatsApp triggers, success states).
- **Secondary (Black):** Used for primary text and grounding structural elements to ensure authority.
- **Muted Gray:** Reserved for secondary metadata and auxiliary information to maintain a clean hierarchy.
- **Background:** A soft off-white to reduce eye strain while maintaining a crisp, professional backdrop for proof-based content cards.

All color pairings must meet **WCAG AA** standards, specifically ensuring that green-on-black or white-on-green combinations maintain high legibility.

## Typography
This design system utilizes a dual-sans-serif approach. **Inter** provides a robust, systematic foundation for headlines, with tight tracking to create a "dense" and authoritative feel. **Geist** is used for body copy and labels to introduce a precise, technical edge that aligns with digital agency services.

- **Headlines:** Must always use the -0.02em tracking at larger scales to maintain the "proof-first" impact.
- **Body:** Set to a generous 1.6 line-height to ensure readability during long-form case studies or service descriptions.
- **Mobile Scaling:** H1 elements must drop from 48px to 32px on mobile devices to prevent excessive line-breaking.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop, centered within a 1120px container to ensure maximum readability on large monitors. 

- **Grid:** 12-column structure for desktop. 4-column for mobile.
- **Spacing Scale:** Built on a 4px base unit. Use `xl (48px)` for vertical section padding and `xxl (80px)` for major thematic shifts.
- **Mobile-First:** Prioritize vertical stacking. On mobile, margins reduce to 20px to maximize screen real estate for content.
- **Rules:** No auto-play carousels. Use horizontal scrolling with visible "overflow" hints for proof/testimonial sections on mobile.

## Elevation & Depth
The system uses **Ambient Shadows** to create a subtle sense of hierarchy without clutter. 

- **Level 1 (Cards):** Uses a very soft, diffused shadow (`0 4px 24px rgba(0,0,0,0.06)`) to lift case studies and service blocks off the background.
- **Level 2 (Interactive):** On hover, shadows should tighten slightly and shift downward to simulate the element being pressed toward the surface.
- **Borders:** Use 1px solid borders in a very light gray (#E5E7EB) for input fields and non-elevated containers to maintain structure without weight.

## Shapes
The shape language is professional and approachable. 

- **Cards & Containers:** Set at 12px (`rounded-lg`) to provide a modern, friendly feel to data-heavy proof sections.
- **Buttons & Inputs:** Set at 8px to maintain a slightly sharper, more "action-oriented" look compared to the larger containers.
- **Icons:** Use Lucide outline icons exclusively. Stroke width should be 2px to match the weight of Geist typography.

## Components
- **Buttons:** 
  - *Primary:* WhatsApp Green background, white text, 8px radius. 
  - *Secondary:* Black background, white text. 
  - *States:* Hover state for Primary must use #1DA851.
- **Sticky WhatsApp CTA:** A bottom-fixed mobile bar (or bottom-right floating on desktop). Must feature the WhatsApp icon, the text "Chat with an Expert," and a small green "Online" pulse indicator.
- **Proof Cards:** 12px radius, Level 1 shadow. Must include a slot for a client logo (top left), a metric in bold (e.g., +200% ROI), and a short testimonial.
- **Input Fields:** 8px radius, 1px border. Focus state uses a 2px Primary Green ring with 0.2 opacity.
- **Navigation:** Clean, text-based links. On mobile, use a simple "hamburger" that opens a full-screen list with a prominent green CTA at the bottom.