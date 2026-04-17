import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const whatsappUrl =
  "https://wa.me/447534498360?text=" +
  encodeURIComponent(
    "Hi, my name is ___. I'm interested in learning more about DND Fitness coaching."
  );

const calendlyUrl = "https://calendly.com/info-dndfitness/30min";

const mailtoUrl =
  "mailto:info.dndfitness@gmail.com?subject=" +
  encodeURIComponent("Inquiry from DND Fitness website") +
  "&body=" +
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
      <Nav />
      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center px-4 md:px-8 pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.png')" }}
        />
        <div className="absolute inset-0 bg-on-surface/" />

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <div className="w-1.5 h-1.5 bg-accent" />
            <span className="font-mono text-label-md uppercase text-on-primary">
              DND Fitness — Health is Wealth
            </span>
          </div>

          <div className="w-full md:max-w-[65%]">
            <h1 className="text-4xl md:text-display-lg font-light text-on-primary mb-6 md:mb-8 leading-tight drop-shadow-lg">
              Your body is your
              <br />
              <span className="font-semibold">most valuable</span> asset.
            </h1>
            <p className="text-body-md text-on-primary mb-8 md:mb-12 max-w-md drop-shadow-lg">
              It should be treated like one. DND helps you take back control of
              your body and performance — no shortcuts, just a complete system.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <a
                href="#contact"
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

      {/* ABOUT */}
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

            <p className="text-body-md md:text-base text-on-surface font-semibold">
              And that's where DND comes in.
            </p>

            <p className="text-body-md md:text-base text-on-surface/80 leading-relaxed">
              With a tailored DND coaching system, we help you take back control of
              your body and performance.
            </p>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="relative px-4 md:px-8 py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/approach.png')" }}
        />
        <div className="absolute inset-0 bg-on-surface/45" />

        <div className="max-w-[900px] mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-10 md:mb-14">
            <div className="w-1.5 h-1.5 bg-accent" />
            <span className="font-mono text-label-md uppercase text-on-primary/70">
              Our Approach
            </span>
          </div>

          <p className="text-3xl md:text-5xl font-light text-on-primary mb-12 leading-snug">
            With our approach,
            <br />
            <span className="font-semibold">you will:</span>
          </p>

          <ul className="space-y-6 mb-12">
            {[
              "Achieve your physique goals efficiently and sustainably",
              "Understand how your body works and how to train it properly",
              "Track your progress and optimise recovery (sleep, stress, performance)",
              "Build long-term health, energy, and longevity",
            ].map((item, i) => (
              <li key={i} className="flex gap-6 text-base md:text-lg text-on-primary">
                <span className="text-accent font-mono mt-1">0{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-lg md:text-xl text-on-primary/90 leading-relaxed pt-8 border-t border-on-primary/20">
            This isn't just training — it's a complete system designed to elevate
            how you <span className="font-semibold text-on-primary">look, feel, and perform.</span>
          </p>
        </div>
      </section>

      {/* BENEFITS */}
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

      {/* CTA */}
      <section id="contact" className="px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto bg-on-surface p-8 md:p-20 relative overflow-hidden">
          <div className="absolute top-6 md:top-8 right-6 md:right-8 w-1.5 h-1.5 bg-accent" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 md:items-end relative z-10">
            <div className="md:col-span-7">
              <span className="font-mono text-label-md uppercase text-on-primary/50 mb-4 md:mb-6 block">
                Health is Wealth
              </span>
              <h2 className="text-4xl md:text-display-lg font-light text-on-primary leading-tight">
                Start my <span className="font-semibold text-accent">journey</span>
                <br />now.
              </h2>
              <p className="text-body-md text-on-primary/70 mt-6 max-w-sm">
                Reach out on WhatsApp for a quick chat, or book a free 30-minute
                discovery call directly.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-4 bg-on-primary text-on-surface text-body-md font-medium hover:bg-accent hover:text-on-primary transition-colors"
              >
                Message on WhatsApp
              </a>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-4 bg-accent text-on-primary text-body-md font-medium hover:bg-on-primary hover:text-on-surface transition-colors"
              >
                Book a discovery call
              </a>
              <a
                href={mailtoUrl}
                className="block text-center w-full py-4 border border-on-primary/20 text-on-primary text-body-md hover:bg-on-primary hover:text-on-surface transition-colors"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}