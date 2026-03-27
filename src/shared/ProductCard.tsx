import React, { useState, useMemo } from 'react';
import { FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';
import type { Product } from '../types/products';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, toggleFav } from '../store/product';
import type { RootState } from '../store/store';
import toast from 'react-hot-toast';



const ProductCard: React.FC<{ product: Product; onAction?: (key: 'cart' | 'fav', p: Product) => void }> = ({ product,onAction }) => {
 
  const dispatch = useDispatch();


  const isFav = useSelector((state: RootState) => 
    state.shop.favs.some(f => f.id === product.id)
  );

  const handleCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} səbətə əlavə edildi!`, {
      icon: '🍰',
      style: { borderRadius: '12px', background: '#333', color: '#fff' }
    });
  };

  const handleFav = () => {
    dispatch(toggleFav(product));
    toast(isFav ? "Favoritlərdən silindi" : "Favoritlərə əlavə edildi", {
      icon: isFav ? '💔' : '❤️'
    });
  };
 
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
   
      {product.discount && (
        <span className="absolute top-4 left-4 z-10 bg-rose-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
          -{product.discount}%
        </span>
      )}

      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
       
          
          <button 
            onClick={handleFav} 
            className={`cursor-pointer p-3 rounded-full transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-xl ${isFav ? 'bg-rose-600 text-white' : 'bg-white text-slate-900 hover:bg-rose-600 hover:text-white'}`}
          >
            <FiHeart size={20} fill={isFav ? "currentColor" : "none"} />
          </button>
          
          <button 
            onClick={handleCart} 
            className="cursor-pointer p-3 bg-white rounded-full text-slate-900 hover:bg-rose-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150 shadow-xl"
          >
            <FiShoppingCart size={20} />
          </button>
        </div>
      </div>

      <div className="p-5 space-y-2">
        <h3 className="font-serif text-lg font-bold text-slate-800 truncate">{product.name}</h3>
        <div className="flex items-center gap-3 font-sans">
          <span className="text-xl font-black text-rose-600">{product.currentPrice} AZN</span>
          {product.oldPrice && (
            <span className="text-sm text-slate-400 line-through">{product.oldPrice} AZN</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard