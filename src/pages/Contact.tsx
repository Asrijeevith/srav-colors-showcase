import { useState } from "react";
import { MessageCircle, Instagram, Phone, Mail, Send } from "lucide-react";
import { WHATSAPP_NUMBER, INSTAGRAM_HANDLE, EMAIL, PHONE } from "@/data/collections";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Hi, I'm ${form.name}. ${form.message} (Email: ${form.email})`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, "_blank");
    setSubmitted(true);
  };

  return (
    <main className="pt-20 md:pt-24">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">Reach Out</p>
            <h1 className="font-display text-3xl md:text-4xl mb-4">Contact Us</h1>
            <div className="divider-gold mt-4" />
            <p className="font-body text-sm text-muted-foreground mt-6 max-w-lg mx-auto">
              Have a question or want to place a custom order? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact methods */}
            <div className="space-y-6">
              <h2 className="font-display text-xl mb-6">Get in Touch</h2>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded border border-border hover-lift group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-card transition-colors">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="font-display text-sm">WhatsApp</p>
                  <p className="font-body text-xs text-muted-foreground">Chat with us instantly</p>
                </div>
              </a>

              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded border border-border hover-lift group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-card transition-colors">
                  <Instagram size={20} />
                </div>
                <div>
                  <p className="font-display text-sm">Instagram</p>
                  <p className="font-body text-xs text-muted-foreground">@{INSTAGRAM_HANDLE}</p>
                </div>
              </a>

              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex items-center gap-4 p-4 bg-card rounded border border-border hover-lift group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-card transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-display text-sm">Phone</p>
                  <p className="font-body text-xs text-muted-foreground">{PHONE}</p>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 p-4 bg-card rounded border border-border hover-lift group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-card transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-display text-sm">Email</p>
                  <p className="font-body text-xs text-muted-foreground">{EMAIL}</p>
                </div>
              </a>
            </div>

            {/* Contact form */}
            <div className="bg-card p-8 rounded border border-border">
              <h2 className="font-display text-xl mb-6">Send a Message</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <p className="font-display text-xl mb-2">Thank you!</p>
                  <p className="font-body text-sm text-muted-foreground">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      className="w-full px-4 py-3 bg-background border border-border rounded text-sm font-body focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      className="w-full px-4 py-3 bg-background border border-border rounded text-sm font-body focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                      className="w-full px-4 py-3 bg-background border border-border rounded text-sm font-body resize-none focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-body tracking-[0.3em] uppercase rounded hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                  >
                    <Send size={14} />
                    Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
