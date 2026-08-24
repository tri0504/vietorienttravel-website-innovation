// Reusable heading block for page and content sections.
export function SectionHeader({ eyebrow, title, description }) {
  return (
    <header className="section-header">
      {/* Optional fields allow the same heading pattern to serve different sections. */}
      {eyebrow && <p className="section-header__eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
