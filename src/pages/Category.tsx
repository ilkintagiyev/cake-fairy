import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../shared/ProductCard';
import Main from '../layout/Main';

export const CATEGORIES = ['Hamısı', 'Tortlar', 'Şirniyyatlar', 'Dondurmalar', 'İçkilər'];

export const products = [
  { 
    id: 1, 
    name: "Belçika Şokoladlı Tort", 
    currentPrice: 12, 
    oldPrice: 20, 
    discount: 18, 
    category: "Tortlar",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600" 
  },
  { 
    id: 2, 
    name: "Çiyələkli Cheesecake", 
    currentPrice: 11, 
    category: "Şirniyyatlar",
    image: "https://i.pinimg.com/736x/e2/4d/c5/e24dc51e06e61bfde1b38fcf25ea5a95.jpg" 
  },
  { 
    id: 3, 
    name: "Tropik Manqo Delis", 
    currentPrice: 8, 
    oldPrice: 20, 
    discount: 16, 
    category: "İçkilər", // Məsələn, soyuq desert içkisi kimi
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=600" 
  },
  { 
    id: 4, 
    name: "Antep Fıstıqlı Xüsusi", 
    currentPrice: 15, 
    category: "Tortlar",
    image: "https://i.pinimg.com/736x/79/8e/20/798e20f3ba0d8cc0364f64cb17322325.jpg" 
  },
  { 
    id: 5, 
    name: "Red Velvet Klasik", 
    currentPrice: 9, 
    oldPrice: 20, 
    discount: 17, 
    category: "Tortlar",
    image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=600" 
  },
  { 
    id: 6, 
    name: "Karamelli Makaron Tort", 
    currentPrice: 13, 
    category: "Şirniyyatlar",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=600" 
  },
  { 
    id: 7, 
    name: "Limonlu Merengue", 
    currentPrice: 11, 
    oldPrice: 40, 
    discount: 12, 
    category: "Dondurmalar", // Və ya fərqli kateqoriya
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=600" 
  },
  { 
    id: 8, 
    name: "Tiramisu Modern", 
    currentPrice: 12, 
    category: "Şirniyyatlar",
    image: "https://i.pinimg.com/1200x/06/f0/c0/06f0c04bccd7e09dab657e56226c0b23.jpg" 
  },
];

const CategoryPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // URL-dən kateqoriyanı oxu, yoxdursa 'Hamısı' set et
  const activeCategory = (searchParams.get('category') as any) || 'Hamısı';

  // Kateqoriya dəyişəndə URL-i yenilə
  const handleCategoryChange = (category: any) => {
    if (category === 'Hamısı') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  // Senior Performance: Məhsulları yalnız kateqoriya dəyişəndə yenidən hesabla
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Hamısı') return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
   <Main>
     <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-serif font-black text-slate-900">Məhsullarımız</h1>
          <p className="text-slate-500 italic">Hər kateqoriyada bir sehr gizlənib</p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`cursor-pointer px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 relative overflow-hidden ${
                activeCategory === cat 
                ? 'text-red shadow-lg shadow-rose-200' 
                : 'bg-white text-slate-600 hover:bg-rose-50'
              }`}
            >
              {/* Active Background Animation */}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activePill"
                  className="absolute inset-0 bg-rose-600 -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid with Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product:any) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-xl font-serif">Bu kateqoriyada hələ ki, məhsul yoxdur...</p>
          </div>
        )}
      </div>
    </div>
   </Main>
  );
};

export default CategoryPage;