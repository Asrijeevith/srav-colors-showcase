import { Droplets, Wind, Sun, Shirt, ShieldCheck, Sparkles } from "lucide-react";

interface CareItemProps {
  icon: React.ReactNode;
  text: string;
}

const CareItem = ({ icon, text }: CareItemProps) => (
  <div className="flex items-start gap-4 py-3">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-accent">
      {icon}
    </div>
    <p className="font-body text-sm text-muted-foreground leading-relaxed pt-1">{text}</p>
  </div>
);

const CareGuide = () => {
  return (
    <main className="pt-20 md:pt-24">
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-3">Preserve the Art</p>
            <h1 className="font-display text-3xl md:text-4xl mb-4">Care Guide</h1>
            <div className="divider-gold mt-4" />
            <p className="font-body text-sm text-muted-foreground mt-6 max-w-lg mx-auto">
              Your hand-painted piece is a work of art. Follow these care instructions to keep it looking beautiful for years to come.
            </p>
          </div>

          <div className="space-y-12">
            {/* Washing */}
            <div className="bg-card p-8 rounded border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Droplets className="text-accent" size={24} />
                <h2 className="font-display text-xl">Washing Instructions</h2>
              </div>
              <div className="divide-y divide-border">
                <CareItem icon={<Sparkles size={16} />} text="First wash: Dry clean recommended for best results" />
                <CareItem icon={<Droplets size={16} />} text="Hand wash separately in cold water only" />
                <CareItem icon={<ShieldCheck size={16} />} text="Do not soak for long periods — brief, gentle wash" />
                <CareItem icon={<ShieldCheck size={16} />} text="Do not scrub on the painted area" />
                <CareItem icon={<Droplets size={16} />} text="Use mild detergent only — no harsh chemicals" />
                <CareItem icon={<ShieldCheck size={16} />} text="Do not bleach under any circumstances" />
                <CareItem icon={<Sun size={16} />} text="Always dry in shade — avoid direct sunlight" />
              </div>
            </div>

            {/* Ironing */}
            <div className="bg-card p-8 rounded border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Wind className="text-accent" size={24} />
                <h2 className="font-display text-xl">Ironing Instructions</h2>
              </div>
              <div className="divide-y divide-border">
                <CareItem icon={<Shirt size={16} />} text="Always iron inside out to protect the artwork" />
                <CareItem icon={<Wind size={16} />} text="Use low heat setting only" />
                <CareItem icon={<ShieldCheck size={16} />} text="Never iron directly on the painted surface" />
              </div>
            </div>

            {/* Usage Tips */}
            <div className="bg-card p-8 rounded border border-border">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-accent" size={24} />
                <h2 className="font-display text-xl">Usage Tips</h2>
              </div>
              <div className="divide-y divide-border">
                <CareItem icon={<ShieldCheck size={16} />} text="Handle with care — the painting is delicate" />
                <CareItem icon={<Shirt size={16} />} text="Store in a cotton cloth or muslin bag" />
                <CareItem icon={<ShieldCheck size={16} />} text="Avoid contact with harsh chemicals, perfumes, or deo sprays directly on the painted area" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareGuide;
