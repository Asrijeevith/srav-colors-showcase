import { fabricTypes, colorOptions, designThemes, occasions } from "@/data/collections";

interface FilterPanelProps {
  filters: {
    fabric: string;
    color: string;
    theme: string;
    occasion: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onClear: () => void;
}

const FilterSection = ({
  title,
  options,
  selected,
  onSelect,
}: {
  title: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) => (
  <div className="mb-6">
    <h4 className="font-display text-sm mb-3">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(selected === option ? "" : option)}
          className={`px-3 py-1.5 text-xs font-body tracking-wide rounded border transition-colors duration-200 ${
            selected === option
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background text-muted-foreground border-border hover:border-accent"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

const FilterPanel = ({ filters, onFilterChange, onClear }: FilterPanelProps) => {
  const hasFilters = Object.values(filters).some((v) => v !== "");

  return (
    <div className="bg-card p-6 rounded border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-lg">Filters</h3>
        {hasFilters && (
          <button
            onClick={onClear}
            className="text-xs font-body text-accent hover:text-foreground transition-colors"
          >
            Clear All
          </button>
        )}
      </div>
      <FilterSection title="Fabric Type" options={fabricTypes} selected={filters.fabric} onSelect={(v) => onFilterChange("fabric", v)} />
      <FilterSection title="Color" options={colorOptions} selected={filters.color} onSelect={(v) => onFilterChange("color", v)} />
      <FilterSection title="Design Theme" options={designThemes} selected={filters.theme} onSelect={(v) => onFilterChange("theme", v)} />
      <FilterSection title="Occasion" options={occasions} selected={filters.occasion} onSelect={(v) => onFilterChange("occasion", v)} />
    </div>
  );
};

export default FilterPanel;
