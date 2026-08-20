/**
 * Fixed, full-viewport striped backdrop (sage green / cream vertical stripes).
 * Sits behind everything at -z-10. Sections that want a "white panel" look
 * render an opaque surface on top of this; sections that want the stripes
 * visible simply stay transparent.
 */
export default function StripedBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10"
      style={{
        backgroundColor: 'var(--color-brand-cream)',
        backgroundImage:
          'repeating-linear-gradient(90deg, var(--color-brand-sage-100) 0px, var(--color-brand-sage-100) 48px, var(--color-brand-cream) 48px, var(--color-brand-cream) 96px)',
      }}
    />
  )
}
