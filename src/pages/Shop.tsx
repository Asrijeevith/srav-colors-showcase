import { useState, useMemo } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { categories, sampleProducts } from "@/data/collections";
import ProductCard from "@/components/ProductCard";
import FilterPanel from "@/components/FilterPanel";
import { Filter, X } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const productImages: Record<string, string> = {
  "1": product1, "2": product2, "3": product3,
  "4": product4, "5": product5, "6": product6,
};

const Shop = () => {
  const { categorySlug, subcategorySlug } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ fabric: "", color: "", theme: "", occasion: "" });

  const currentCategory = categories.find((c) => c.slug === categorySlug);

  const filteredProducts = useMemo(() => {
    let products = sampleProducts;

    if (categorySlug) products = products.filter((p) => p.category === categorySlug);
    if (subcategorySlug) products = products.filter((p) => p.subcategory === subcategorySlug);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q) ||
          p.theme.toLowerCase().includes(q) ||
          p.subcategory.toLowerCase().includes(q)
      );
    }
    if (filters.fabric) products = products.filter((p) => p.fabric === filters.fabric);
    if (filters.color) products = products.filter((p) => p.color === filters.color);
    if (filters.theme) products = products.filter((p) => p.theme === filters.theme);
    if (filters.occasion) products = products.filter((p) => p.occasion === filters.occasion);

    return products;
  }, [categorySlug, subcategorySlug, searchQuery, filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const pageTitle = subcategorySlug
    ? currentCategory?.subcategories.find((s) => s.slug === subcategorySlug)?.name
    : currentCategory?.name || "All Collections";

  return (
    <main className="pt-20 md:pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-body text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            {currentCategory && (
              <>
                <span>/</span>
                <Link to={`/shop/${currentCategory.slug}`} className="hover:text-foreground transition-colors">
                  {currentCategory.name}
                </Link>
              </>
            )}
            {subcategorySlug && currentCategory && (
              <>
                <span>/</span>
                <span className="text-foreground">
                  {currentCategory.subcategories.find((s) => s.slug === subcategorySlug)?.name}
                </span>
              </>
            )}
          </nav>

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display text-3xl md:text-4xl">{pageTitle}</h1>
              {searchQuery && (
                <p className="font-body text-sm text-muted-foreground mt-2">
                  Results for "{searchQuery}"
                </p>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 border border-border rounded text-sm font-body"
            >
              {showFilters ? <X size={16} /> : <Filter size={16} />}
              Filters
            </button>
          </div>

          {/* Subcategory pills */}
          {currentCategory && !subcategorySlug && (
            <div className="flex flex-wrap gap-2 mb-8">
              {currentCategory.subcategories.map((sub) => (
                <Link
                  key={sub.slug}
                  to={`/shop/${currentCategory.slug}/${sub.slug}`}
                  className="px-4 py-2 text-xs font-body tracking-widest uppercase border border-border rounded hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}

          <div className="flex gap-8">
            {/* Filter panel */}
            <aside className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-72 flex-shrink-0`}>
              <FilterPanel
                filters={filters}
                onFilterChange={handleFilterChange}
                onClear={() => setFilters({ fabric: "", color: "", theme: "", occasion: "" })}
              />
            </aside>

            {/* Products grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-display text-2xl text-muted-foreground mb-4">No designs found</p>
                  <p className="font-body text-sm text-muted-foreground">Try adjusting your filters or search terms.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
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
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
