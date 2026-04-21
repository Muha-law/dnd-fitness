export default function Popup({ badge, title, subtitle, body, ctaLabel, ctaHref, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-on-surface/70 backdrop-blur-sm">
      <div className="relative bg-on-surface text-on-primary max-w-md w-full p-8 md:p-10 border border-accent">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-primary/60 hover:text-on-primary transition-colors"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        {/* Badge */}
        <div className="inline-flex items-center gap-3 mb-6 bg-accent px-3 py-1.5">
          <div className="w-1.5 h-1.5 bg-on-primary animate-pulse" />
          <span className="font-mono text-label-sm uppercase text-on-primary tracking-widest">
            {badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-light leading-snug mb-3">
          {title}
        </h3>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-on-primary/60 font-mono text-label-md uppercase tracking-widest mb-6">
            {subtitle}
          </p>
        )}

        {/* Body */}
        <p className="text-body-md text-on-primary/80 leading-relaxed mb-8">
          {body}
        </p>

        {/* CTA */}
        <a
          href={ctaHref}
          onClick={onClose}
          className="block text-center w-full py-4 bg-accent text-on-primary text-body-md font-medium hover:bg-on-primary hover:text-on-surface transition-colors"
        >
          {ctaLabel}
        </a>

        {/* Decorative accent dot */}
        <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-accent" />
      </div>
    </div>
  );
}