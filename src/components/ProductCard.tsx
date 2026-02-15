import { WHATSAPP_NUMBER } from "@/data/collections";
import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  fabric: string;
  description: string;
  image: string;
  theme: string;
}

const ProductCard = ({ name, fabric, description, image, theme }: ProductCardProps) => {
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the "${name}" design from Srav Colors.`
  );

  return (
    <div className="group bg-card rounded overflow-hidden hover-lift border border-border">
      <div className="aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-body tracking-widest uppercase text-accent mb-1">{theme}</p>
        <h3 className="font-display text-lg mb-1">{name}</h3>
        <p className="text-xs font-body text-muted-foreground mb-2">{fabric}</p>
        <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">{description}</p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-body tracking-widest uppercase rounded hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
        >
          <MessageCircle size={14} />
          Enquire Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
