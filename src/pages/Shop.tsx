import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['all', ...Array.from(new Set(products.map(p => p.category)))];
    return cats;
  }, []);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = selectedCategory === 'all' 
      ? products 
      : products.filter(p => p.category === selectedCategory);

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Shop <span className="text-gold">Exclusive</span>
          </h1>
          <p className="text-xl leading-relaxed opacity-90 animate-fade-in">
            Discover our complete collection of premium Ghanaian streetwear
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-background border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`capitalize ${
                    selectedCategory === category 
                      ? "bg-gold hover:bg-gold/90 text-gold-foreground" 
                      : "hover:bg-gold/10 hover:text-gold"
                  }`}
                >
                  {category === 'all' ? 'All Products' : category}
                </Button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="price-low">Price (Low to High)</SelectItem>
                  <SelectItem value="price-high">Price (High to Low)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4">
            <Badge variant="secondary" className="text-sm">
              {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'product' : 'products'}
              {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            </Badge>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredAndSortedProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground">
                No products found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or browse all products
              </p>
              <Button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSortBy('name');
                }}
                className="bg-gold hover:bg-gold/90 text-gold-foreground font-heading font-semibold"
              >
                VIEW ALL PRODUCTS
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Be the first to know about new arrivals and exclusive drops
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-8"
          >
            SUBSCRIBE TO NEWSLETTER
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Shop;