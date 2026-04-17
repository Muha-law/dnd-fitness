export default function Footer() {
  return (
    <footer className="px-4 md:px-8 py-8 md:py-12 border-t border-on-surface/10">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <span className="font-mono text-label-md uppercase text-on-surface/50">
          DND Fitness © 2026
        </span>
        <span className="font-mono text-label-md uppercase text-on-surface/50">
          Health is Wealth
        </span>
      </div>
    </footer>
  );
}