export default function MiniPopup({ badge, title, body, ctaLabel, ctaHref, onClose }) {
  return (
    <div className="fixed bottom-6 right-6 z-[90] max-w-sm animate-slide-up">
      <div className="relative bg-on-surface text-on-primary border p-6 shadow-ambient" style={{ borderColor: "#004ced" }}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-on-primary/60 hover:text-on-primary transition-colors"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 animate-pulse" style={{ backgroundColor: "#004ced" }} />
            <span className="font-mono text-label-sm uppercase tracking-widest" style={{ color: "#004ced" }}>
            {badge}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-lg font-semibold mb-2 pr-6">{title}</h4>

        {/* Body */}
        <p className="text-body-md text-on-primary/75 leading-relaxed mb-4">{body}</p>

        {/* CTA */}
        <a
            href={ctaHref}
            onClick={onClose}
            style={{ color: "#004ced" }}
            className="inline-block font-mono text-label-md uppercase tracking-widest hover:text-on-primary transition-colors"
            >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}