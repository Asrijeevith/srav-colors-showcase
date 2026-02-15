import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import { genderCategories, sampleProducts } from "@/data/collections";
import ProductCard from "@/components/ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const productImages: Record<string, string> = {
  "1": product1,
  "2": product2,
  "3": product3,
  "4": product4,
};

const Index = () => {
  const featuredProducts = sampleProducts.slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 text-center px-6 animate-fade-up">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary-foreground/70 mb-4">
            Hand-Painted Fashion
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 leading-tight">
            Wear Art.
            <br />
            <span className="italic text-gold-light">Express You.</span>
          </h1>
          <p className="font-serif text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-md mx-auto">
            Each piece is a unique canvas, painted with love and passion
          </p>
          <Link
            to="/shop"
            className="inline-block px-10 py-4 border border-primary-foreground/40 text-primary-foreground text-xs font-body tracking-[0.3em] uppercase hover:bg-primary-foreground hover:text-primary transition-all duration-500"
          >
            View Collections
          </Link>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">Collections</p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">Shop by Category</h2>
            <div className="divider-gold mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {genderCategories.map((cat, i) => (
              <Link
                key={cat.slug}
                to={cat.slug === "custom" ? "/contact" : `/shop/${cat.slug}`}
                className="group text-center p-6 md:p-8 bg-card rounded border border-border hover-lift"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="text-4xl mb-4 block transition-transform duration-300 group-hover:scale-110">
                  {cat.icon}
                </span>
                <h3 className="font-display text-base mb-1">{cat.name}</h3>
                <p className="text-xs font-body text-muted-foreground leading-relaxed hidden md:block">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Designs */}
      <section className="section-padding bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">Curated</p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">Featured Designs</h2>
            <div className="divider-gold mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                fabric={product.fabric}
                description={product.description}
                image={productImages[product.id] || product1}
                theme={product.theme}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground text-xs font-body tracking-[0.3em] uppercase rounded hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              View All Designs
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">Our Story</p>
          <h2 className="font-display text-3xl md:text-4xl mb-8">The Art Behind Every Thread</h2>
          <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 italic">
            "Every piece I create is a conversation between color and fabric. I believe fashion should be as unique as the person wearing it."
          </p>
          <p className="font-body text-sm text-muted-foreground mb-8">— Sravanthi, Founder</p>
          <Link
            to="/about"
            className="inline-block px-8 py-3 border border-border text-foreground text-xs font-body tracking-[0.3em] uppercase rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Read Our Story
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
