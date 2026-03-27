import React, { useState, useMemo } from 'react';
import type { Product } from '../../../types/products';
import ProductCard from '../../../shared/ProductCard';

const PRODUCTS: Product[] = [
    { id: 8, name: "Tiramisu Modern", currentPrice: 12, image: "https://i.pinimg.com/1200x/06/f0/c0/06f0c04bccd7e09dab657e56226c0b23.jpg" },
    { id: 5, name: "Red Velvet Klasik", currentPrice: 13, oldPrice: 20, discount: 17, image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=600" },
    { id: 4, name: "Antep Fıstıqlı Xüsusi", currentPrice: 14, image: "https://i.pinimg.com/1200x/f3/53/49/f35349d26e5f84ea23bee8c39d1d6136.jpg" },
    { id: 1, name: "Belçika Şokoladlı Tort", currentPrice: 15, oldPrice: 20, discount: 18, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600" },
    { id: 3, name: "Tropik Manqo Delis", currentPrice: 15, oldPrice: 20, discount: 16, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=600" },
    { id: 6, name: "Karamelli Makaron Tort", currentPrice: 16, image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=600" },
    { id: 2, name: "Çiyələkli Cheesecake", currentPrice: 12, image: "https://i.pinimg.com/736x/e2/4d/c5/e24dc51e06e61bfde1b38fcf25ea5a95.jpg" },
    { id: 7, name: "Limonlu Merengue", currentPrice: 31, oldPrice: 40, discount: 12, image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=600" },
];

const RecommendProduction: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const currentData = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return PRODUCTS.slice(start, start + itemsPerPage);
    }, [currentPage]);

    const totalPages = Math.ceil(PRODUCTS.length / itemsPerPage);

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
             
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-serif font-black text-slate-900">Şirin Seçimlərimiz</h2>
                        <p className="text-slate-500 max-w-md text-sm uppercase tracking-widest font-semibold">Tövsiyyə olunan məhsullar</p>
                    </div>

                    <div className="flex items-center gap-2">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`h-1.5 transition-all duration-300 rounded-full ${currentPage === i + 1 ? 'w-10 bg-rose-600' : 'w-4 bg-slate-300 hover:bg-slate-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentData.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecommendProduction;