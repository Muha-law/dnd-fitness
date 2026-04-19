import Nav from "./components/Nav";
import Footer from "./components/Footer";

const whatsappUrl =
  "https://wa.me/447534498360?text=" +
  encodeURIComponent(
    "Hi, my name is ___. I'm interested in learning more about DND Fitness coaching."
  );

const calendlyUrl = "https://calendly.com/info-dndfitness/30min";

export default function About() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Nav />

      {/* HERO with background image */}
      {/* HERO — black left, photo right, gradient blend */}
<section className="relative min-h-[80vh] md:min-h-screen bg-on-surface overflow-hidden pt-32 pb-20">
  {/* Photo on the right */}
  <div className="absolute top-0 right-0 bottom-0 w-full h-[50vh] md:h-full md:w-3/5 lg:w-1/2">
    <img
      src="/about.jpg"
      alt="DND Fitness Founder"
      className="w-full h-full object-cover object-top"
    />
    {/* Gradient blend — black fades from left edge into the photo */}
    <div className="absolute inset-0 bg-gradient-to-r from-on-surface via-on-surface/10 to-transparent" />
  </div>

  {/* Text on the left */}
  <div className="relative z-10 max-w-[1400px] mx-auto h-full px-4 md:px-8 flex items-center min-h-[calc(100vh-12rem)]">
    <div className="max-w-xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1.5 h-1.5 bg-accent" />
        <span className="font-mono text-label-md uppercase text-on-primary/70">
          About — DND Fitness
        </span>
      </div>
      <h1 className="text-4xl md:text-display-lg font-light text-on-primary leading-tight">
        Built on one
        <br />
        <span className="font-semibold">simple principle.</span>
      </h1>
      <p className="text-body-md md:text-base text-on-primary/70 mt-8 max-w-md leading-relaxed">
        Your body is your most valuable asset — and it deserves to be treated like one.
      </p>
    </div>
  </div>
</section>
      {/* INTRO */}
      <section className="px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-10 md:mb-14">
            <div className="w-1.5 h-1.5 bg-accent" />
            <span className="font-mono text-label-md uppercase text-on-surface/60">
              01 — Our Philosophy
            </span>
          </div>

          <p className="text-2xl md:text-3xl font-light text-on-surface leading-snug mb-12">
            Your body is your most valuable asset —
            <span className="font-semibold"> it deserves to be treated like one.</span>
          </p>

          <div className="space-y-8 text-on-surface/80 text-body-md md:text-base leading-relaxed">
            <p>
              We understand the reality of modern life. Busy schedules, demanding
              careers, and constant responsibilities often push health and fitness
              to the bottom of the list. Over time, this leads to inconsistency,
              frustration, and a lack of real progress.
            </p>

            <p className="text-on-surface font-semibold text-lg">
              DND exists to change that.
            </p>

            <p>
              We specialise in helping busy professionals take back control of
              their health, build a strong and lean physique, and create a
              lifestyle that supports long-term performance.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH — dark callout */}
      <section className="px-4 md:px-8 pb-20 md:pb-32">
        <div className="max-w-[900px] mx-auto bg-on-surface text-on-primary p-8 md:p-16 relative">
          <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-accent" />
          <span className="font-mono text-label-md uppercase text-on-primary/50 mb-6 block">
            02 — Our Approach
          </span>
          <p className="text-2xl md:text-3xl font-light leading-snug mb-8">
            Not quick fixes. Not extreme methods.
            <br />
            <span className="font-semibold">A complete system.</span>
          </p>
          <div className="space-y-6 text-on-primary/80 text-body-md md:text-base leading-relaxed">
            <p>
              Our approach is not based on quick fixes or extreme methods.
              Instead, we focus on structure, consistency, and a system that
              works with your lifestyle — not against it.
            </p>
            <p>
              Through personalised training, tailored nutrition, and ongoing
              accountability, we provide a complete coaching experience designed
              to deliver real, sustainable results.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-4 md:px-8 py-20 md:py-32 bg-surface-low">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-10 md:mb-14">
            <div className="w-1.5 h-1.5 bg-accent" />
            <span className="font-mono text-label-md uppercase text-on-surface/60">
              03 — More Than Training
            </span>
          </div>

          <p className="text-2xl md:text-3xl font-light text-on-surface leading-snug mb-8">
            At DND Fitness, it's not just about how you look.
          </p>
          <p className="text-body-md md:text-lg text-on-surface/80 leading-relaxed mb-12">
            It's about how you feel, how you perform, and how you show up in
            every area of your life.
          </p>

          <p className="text-2xl md:text-3xl font-light text-on-surface leading-snug pt-8 border-t border-on-surface/10">
            This is more than personal training.
            <br />
            <span className="font-semibold">A system for long-term health, strength, and confidence.</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto bg-on-surface p-8 md:p-20 relative overflow-hidden">
          <div className="absolute top-6 md:top-8 right-6 md:right-8 w-1.5 h-1.5 bg-accent" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 md:items-end relative z-10">
            <div className="md:col-span-7">
              <span className="font-mono text-label-md uppercase text-on-primary/50 mb-4 md:mb-6 block">
                Health is Wealth
              </span>
              <h2 className="text-4xl md:text-display-lg font-light text-on-primary leading-tight">
                Ready to <span className="font-semibold text-accent">begin?</span>
              </h2>
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}