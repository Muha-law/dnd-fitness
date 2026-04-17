import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const whatsappUrl =
  "https://wa.me/447534498360?text=" +
  encodeURIComponent(
    "Hi, my name is ___. I'm interested in learning more about DND Fitness coaching."
  );

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On non-home pages, always use dark text since there's no dark hero
  const navTextColor = scrolled || !isHome ? "text-on-surface" : "text-on-primary";
  const navBg = scrolled || !isHome ? "bg-surface/90" : "bg-on-surface/40";
  const logoFilter = scrolled || !isHome ? "" : "brightness-0 invert";

  return (
    <nav className={"fixed top-0 left-0 right-0 z-50 backdrop-blur-[20px] transition-colors duration-300 " + navBg}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 md:py-6 flex items-center">
        <div className="hidden md:flex items-center gap-10 flex-1">
          <Link to="/" className={"text-body-md hover:text-accent transition-colors " + navTextColor}>Home</Link>
          <Link to="/about" className={"text-body-md hover:text-accent transition-colors " + navTextColor}>About</Link>
          <Link to="/#benefits" className={"text-body-md hover:text-accent transition-colors " + navTextColor}>Benefits</Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={"md:hidden flex flex-col gap-1.5 flex-1 " + navTextColor}
          aria-label="Menu"
        >
          <span className={"w-6 h-0.5 bg-current transition-transform " + (menuOpen ? "rotate-45 translate-y-2" : "")} />
          <span className={"w-6 h-0.5 bg-current transition-opacity " + (menuOpen ? "opacity-0" : "")} />
          <span className={"w-6 h-0.5 bg-current transition-transform " + (menuOpen ? "-rotate-45 -translate-y-2" : "")} />
        </button>

        <div className="flex justify-center">
          <Link to="/">
            <img
              src="/logo.png"
              alt="DND Fitness"
              style={{ height: "48px", width: "auto" }}
              className={"transition-all duration-300 " + logoFilter}
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
          <Link to="/#contact" className={"text-body-md hover:text-accent transition-colors " + navTextColor}>Contact</Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={"px-6 py-2.5 text-body-md transition-colors " + ((scrolled || !isHome) ? "bg-on-surface text-on-primary hover:bg-accent" : "bg-on-primary text-on-surface hover:bg-accent hover:text-on-primary")}
          >
            Book a call
          </a>
        </div>

        <div className="md:hidden flex-1" />
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-on-surface/10 px-4 py-6 space-y-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block text-body-md text-on-surface">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block text-body-md text-on-surface">About</Link>
          <Link to="/#benefits" onClick={() => setMenuOpen(false)} className="block text-body-md text-on-surface">Benefits</Link>
          <Link to="/#contact" onClick={() => setMenuOpen(false)} className="block text-body-md text-on-surface">Contact</Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block text-center w-full py-3 bg-on-surface text-on-primary text-body-md"
          >
            Book a call
          </a>
        </div>
      )}
    </nav>
  );
}