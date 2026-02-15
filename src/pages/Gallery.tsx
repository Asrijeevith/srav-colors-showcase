import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const images = [
  { src: product1, alt: "Peacock Paradise Saree", category: "Women" },
  { src: product2, alt: "Floral Dream Kurti", category: "Women" },
  { src: product3, alt: "Mythological Marvel Dupatta", category: "Women" },
  { src: product4, alt: "Royal Peacock Shirt", category: "Men" },
  { src: product5, alt: "Heritage Kurta", category: "Men" },
  { src: product6, alt: "Blossom Frock", category: "Girls" },
];

const Gallery = () => {
  return (
    <main className="pt-20 md:pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">Portfolio</p>
            <h1 className="font-display text-3xl md:text-4xl mb-4">Our Gallery</h1>
            <div className="divider-gold mt-4" />
            <p className="font-body text-sm text-muted-foreground mt-6 max-w-lg mx-auto">
              A curated collection of our hand-painted masterpieces. Each piece tells a unique story through color and artistry.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <div
                key={i}
                className="group relative break-inside-avoid overflow-hidden rounded border border-border hover-lift"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-500 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs font-body tracking-widest uppercase text-primary-foreground/70">{img.category}</p>
                    <p className="font-display text-lg text-primary-foreground">{img.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
