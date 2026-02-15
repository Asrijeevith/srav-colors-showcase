import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="pt-20 md:pt-24">
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">Our Story</p>
            <h1 className="font-display text-3xl md:text-4xl mb-4">About Srav Colors</h1>
            <div className="divider-gold mt-4" />
          </div>

          <div className="space-y-8">
            <p className="font-serif text-xl md:text-2xl text-center italic text-muted-foreground leading-relaxed">
              "Hi, I'm Sravanthi, founder of Srav Colors. I create hand-painted custom clothing for women, men, and kids — each piece a reflection of art, tradition, and individuality."
            </p>

            <div className="divider-gold" />

            <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
              <p>
                What started as a passion for painting on fabric has grown into a brand that celebrates the beauty of handmade art. At Srav Colors, every brushstroke is intentional, every design tells a story, and every piece is made with love.
              </p>
              <p>
                From vibrant peacock motifs on silk sarees to delicate floral patterns on cotton kurtis, our designs blend traditional Indian artistry with contemporary fashion sensibilities. We believe that true luxury lies in uniqueness — and each hand-painted creation is one of a kind.
              </p>
              <p>
                We work with premium fabrics — silk, cotton, linen, chiffon, georgette, and chanderi — ensuring that the canvas for our art is as exquisite as the painting itself. Whether it's for a wedding, a festival, or everyday elegance, Srav Colors has something special for everyone.
              </p>
              <p>
                We don't just sell clothing. We create wearable art that connects you to the timeless traditions of Indian textile heritage, reimagined for the modern world.
              </p>
            </div>

            <div className="text-center pt-8">
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground text-xs font-body tracking-[0.3em] uppercase rounded hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
