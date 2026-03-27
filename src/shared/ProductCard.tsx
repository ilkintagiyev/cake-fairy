import React from 'react';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import type { Product } from '../types/products';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, toggleFav } from '../store/product';
import type { RootState } from '../store/store';
import toast from 'react-hot-toast';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch = useDispatch();

  const isFav = useSelector((state: RootState) => 
    state.shop.favs.some(f => f.id === product.id)
  );

  const handleCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Kartın özünə kliklənməsinin qarşısını alır
    dispatch(addToCart(product));
    toast.success(`${product.name} səbətə əlavə edildi!`, {
      icon: '🍰',
      style: { borderRadius: '12px', background: '#333', color: '#fff' }
    });
  };

  const handleFav = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleFav(product));
    toast(isFav ? "Favoritlərdən silindi" : "Favoritlərə əlavə edildi", {
      icon: isFav ? '💔' : '❤️'
    });
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
      
      {/* Endirim Badge-i */}
      {product.discount && (
        <span className="absolute top-3 left-3 z-20 bg-rose-600 text-white text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg">
          -{product.discount}%
        </span>
      )}

      {/* Şəkil Konteyneri */}
      <div className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-slate-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Desktop Hover Düymələri (lg+ ekranlarda) */}
        <div className="hidden lg:flex absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-3 backdrop-blur-[2px]">
          <button 
            onClick={handleFav} 
            className={`p-3 rounded-full transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-xl ${
              isFav ? 'bg-rose-600 text-white' : 'bg-white text-slate-900 hover:bg-rose-600 hover:text-white'
            }`}
          >
            <FiHeart size={20} fill={isFav ? "currentColor" : "none"} />
          </button>
          
          <button 
            onClick={handleCart} 
            className="p-3 bg-white rounded-full text-slate-900 hover:bg-rose-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-xl"
          >
            <FiShoppingCart size={20} />
          </button>
        </div>

        {/* Mobil üçün Sürətli Sevimli Düyməsi (Şəklin üstündə sağda) */}
        <button 
          onClick={handleFav}
          className="lg:hidden absolute top-3 right-3 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-md text-slate-900"
        >
          <FiHeart size={18} className={isFav ? "fill-rose-600 text-rose-600" : ""} />
        </button>
      </div>

      {/* Məlumat hissəsi */}
      <div className="p-3 md:p-5 flex flex-col flex-grow justify-between">
        <div className="space-y-1">
          <h3 className="font-serif text-sm md:text-lg font-bold text-slate-800 line-clamp-1 md:line-clamp-2 leading-snug">
            {product.name}
          </h3>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-base md:text-xl font-black text-rose-600">
              {product.currentPrice} AZN
            </span>
            {product.oldPrice && (
              <span className="text-[10px] md:text-sm text-slate-400 line-through">
                {product.oldPrice} AZN
              </span>
            )}
          </div>
        </div>

        {/* Mobildə Səbətə At düyməsi (Həmişə görünən) */}
        <button 
          onClick={handleCart}
          className="lg:hidden mt-3 w-full py-2 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          <FiShoppingCart size={14} /> Səbətə at
        </button>
      </div>
    </div>
  );
};

export default ProductCard;