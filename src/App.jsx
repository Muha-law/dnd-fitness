import { useState, useEffect } from "react";

const whatsappUrl =
  "https://wa.me/447534498360?text=" +
  encodeURIComponent(
    "Hi, my name is ___. I'm interested in learning more about DND Fitness coaching."
  );

const mailtoUrl =
  "mailto:info.dndfitness@gmail.com?subject=" +
  encodeURIComponent("Inquiry from DND Fitness website") +
  "&body="+
  encodeURIComponent("Hi DND Team,\n\nI'd like to learn more about your coaching programs.\n\nThanks,");

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navTextColor = scrolled ? "text-on-surface" : "text-on-primary";
  const navBg = scrolled ? "bg-surface/90" : "bg-on-surface/40";
  const logoFilter = scrolled ? "" : "brightness-0 invert";

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <nav className={"fixed top-0 left-0 right-0 z-50 backdrop-blur-[20px] transition-colors duration-300 " + navBg}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="DND Fitness"
              className={"h-10 w-auto transition-all duration-300 " + logoFilter}
            />
            <span className={"font-semibold tracking-tight transition-colors hidden sm:inline " + navTextColor}>
              DND FITNESS
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#home" className={"text-body-md hover:text-accent transition-colors " + navTextColor}>Home</a>
            <a href="#about" className={"text-body-md hover:text-accent transition-colors " + navTextColor}>About</a>
            <a href="#benefits" className={"text-body-md hover:text-accent transition-colors " + navTextColor}>Benefits</a>
            <a href="#contact" className={"text-body-md hover:text-accent transition-colors " + navTextColor}>Contact</a>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={"px-6 py-2.5 text-body-md transition-colors " + (scrolled ? "bg-on-surface text-on-primary hover:bg-accent" : "bg-on-primary text-on-surface hover:bg-accent hover:text-on-primary")}
            >
              Book a call
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={"md:hidden flex flex-col gap-1.5 " + navTextColor}
            aria-label="Menu"
          >
            <span className={"w-6 h-0.5 bg-current transition-transform " + (menuOpen ? "rotate-45 translate-y-2" : "")} />
            <span className={"w-6 h-0.5 bg-current transition-opacity " + (menuOpen ? "opacity-0" : "")} />
            <span className={"w-6 h-0.5 bg-current transition-transform " + (menuOpen ? "-rotate-45 -translate-y-2" : "")} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-surface border-t border-on-surface/10 px-4 py-6 space-y-4">
            <a href="#home" onClick={() => setMenuOpen(false)} className="block text-body-md text-on-surface">Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="block text-body-md text-on-surface">About</a>
            <a href="#benefits" onClick={() => setMenuOpen(false)} className="block text-body-md text-on-surface">Benefits</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-body-md text-on-surface">Contact</a>
            
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

      <section id="home" className="relative min-h-screen flex items-center px-4 md:px-8 pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.PNG')" }}
        />
        <div className="absolute inset-0 bg-on-surface/60" />

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <div className="w-1.5 h-1.5 bg-accent" />
            <span className="font-mono text-label-md uppercase text-on-primary/70">
              DND Fitness — Health is Wealth
            </span>
          </div>

          <div className="w-full md:max-w-[65%]">
            <h1 className="text-4xl md:text-display-lg font-light text-on-primary mb-6 md:mb-8 leading-tight">
              Your body is your
              <br />
              <span className="font-semibold">most valuable</span> asset.
            </h1>
            <p className="text-body-md text-on-primary/80 mb-8 md:mb-12 max-w-md">
              It should be treated like one. DND helps you take back control of
              your body and performance — no shortcuts, just a complete system.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center px-6 py-4 bg-on-primary text-on-surface text-body-md font-medium hover:bg-accent hover:text-on-primary transition-colors"
              >
                Start my journey
              </a>
              <a href="#about" className="text-body-md text-on-primary font-medium">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-10 md:mb-14">
            <div className="w-1.5 h-1.5 bg-accent" />
            <span className="font-mono text-label-md uppercase text-on-surface/60">
              01 — Why DND
            </span>
          </div>

          <div className="space-y-8 text-on-surface">
            <p className="text-2xl md:text-3xl font-light leading-snug">
              Your body is your most valuable asset —
              <span className="font-semibold"> it should be treated like one.</span>
            </p>

            <p className="text-body-md md:text-base text-on-surface/80 leading-relaxed">
              You already understand that health is wealth. But a demanding schedule
              and the constant pursuit of balance often push your fitness to the
              side. Over time, this leads to neglect — and without your health,
              everything else becomes harder to sustain.
            </p>

            <p className="text-body-md md:text-base text-on-surface font-medium">
              And that's where DND comes in.
            </p>

            <p className="text-body-md md:text-base text-on-surface/80 leading-relaxed">
              With a tailored DND coaching system, we help you take back control of
              your body and performance.
            </p>

            <div className="bg-on-surface text-on-primary p-8 md:p-12 my-4 relative">
              <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-accent" />
              <span className="font-mono text-label-md uppercase text-on-primary/50 mb-6 block">
                Our Approach
              </span>
              <p className="text-xl md:text-2xl font-light mb-8 leading-snug">
                With our approach,
                <br />
                <span className="font-semibold">you will:</span>
              </p>
              <ul className="space-y-4">
                {[
                  "Achieve your physique goals efficiently and sustainably",
                  "Understand how your body works and how to train it properly",
                  "Track your progress and optimise recovery (sleep, stress, performance)",
                  "Build long-term health, energy, and longevity",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-body-md md:text-base text-on-primary/80">
                    <span className="text-accent font-mono mt-1">0{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-body-md md:text-base text-on-surface/80 leading-relaxed pt-4 border-t border-on-surface/10">
              This isn't just training — it's a complete system designed to elevate
              how you <span className="font-semibold text-on-surface">look, feel, and perform.</span>
            </p>
          </div>
        </div>
      </section>

      <section id="benefits" className="px-4 md:px-8 py-20 md:py-32 bg-surface-low">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-10 md:mb-14">
            <div className="w-1.5 h-1.5 bg-accent" />
            <span className="font-mono text-label-md uppercase text-on-surface/60">
              02 — Membership
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-light text-on-surface mb-12 md:mb-16 leading-snug">
            What you get as a
            <br />
            <span className="font-semibold">DND Fitness member.</span>
          </h2>

          <ul className="space-y-0">
            {[
              "One free taster session",
              "Access to DND fitness club",
              "1-on-1 personal training sessions",
              "Fully customised workout plans",
              "Personalised nutrition guidance",
              "Regular check-ins and progress tracking",
              "Ongoing support (email & messaging)",
              "Habit and routine coaching",
              "Flexible scheduling to fit your lifestyle",
              "Lifestyle and performance coaching",
              "Recovery optimisation (sleep, stress, energy)",
              "Supplement guidance",
              "Accountability to keep you consistent",
            ].map((benefit, i) => (
              <li
                key={i}
                className="flex items-center gap-6 py-5 border-b border-on-surface/10 group"
              >
                <span className="font-mono text-label-md text-on-surface/40 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-body-md md:text-base text-on-surface flex-1">
                  {benefit}
                </span>
                <span className="w-1.5 h-1.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto bg-on-surface p-8 md:p-20 relative overflow-hidden">
          <div className="absolute top-6 md:top-8 right-6 md:right-8 w-1.5 h-1.5 bg-accent" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 md:items-end relative z-10">
            <div className="md:col-span-8">
              <span className="font-mono text-label-md uppercase text-on-primary/50 mb-4 md:mb-6 block">
                Health is Wealth
              </span>
              <h2 className="text-4xl md:text-display-lg font-light text-on-primary leading-tight">
                Start my <span className="font-semibold text-accent">journey</span>
                <br />now.
              </h2>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-4 bg-on-primary text-on-surface text-body-md font-medium hover:bg-accent hover:text-on-primary transition-colors"
              >
                Book a call
              </a>
              <a
                href={mailtoUrl}
                className="block text-center w-full py-4 border border-on-primary/20 text-on-primary text-body-md hover:bg-on-primary hover:text-on-surface transition-colors"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}