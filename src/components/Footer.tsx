import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Mail, Phone } from "lucide-react";
import { WHATSAPP_NUMBER, INSTAGRAM_HANDLE, EMAIL, PHONE } from "@/data/collections";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl mb-4">
              Srav <span className="text-gold-light">Colors</span>
            </h3>
            <p className="font-body text-sm opacity-70 leading-relaxed">
              Hand-painted fashion for those who wear art. Each piece is a unique creation, painted with love and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Explore</h4>
            <nav className="flex flex-col gap-2">
              {["Shop", "Gallery", "About", "Care Guide", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-lg mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-body opacity-70 hover:opacity-100 transition-opacity"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-body opacity-70 hover:opacity-100 transition-opacity"
              >
                <Instagram size={16} /> @{INSTAGRAM_HANDLE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm font-body opacity-70 hover:opacity-100 transition-opacity"
              >
                <Mail size={16} /> {EMAIL}
              </a>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm font-body opacity-70 hover:opacity-100 transition-opacity"
              >
                <Phone size={16} /> {PHONE}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="font-serif text-sm italic opacity-60">Made with love & color</p>
          <p className="font-body text-xs opacity-40 mt-2">© {new Date().getFullYear()} Srav Colors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
