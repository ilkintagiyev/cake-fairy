import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFav, addToCart } from '../store/product';
import { FiTrash2, FiShoppingCart, FiHeart } from 'react-icons/fi';
import toast from 'react-hot-toast';
import type { Product } from '../types/products';
import type { RootState } from '../store/store';
import Main from '../layout/Main';

const Favorites: React.FC = () => {
  const { favs } = useSelector((state: RootState) => state.shop);
  const dispatch = useDispatch();

  const handleMoveToCart = (product: any) => {
    dispatch(addToCart(product));
    toast.success("Səbətə əlavə edildi!");
  };

  if (favs.length === 0) {
    return (
      <Main>
        <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center text-rose-500">
          <FiHeart size={40} />
        </div>
        <h2 className="text-2xl font-serif font-bold text-slate-800">Seçilmiş məhsulunuz yoxdur</h2>
        <p className="text-slate-500 text-sm">Bəyəndiyiniz tortları bura əlavə edə bilərsiniz.</p>
        <a href="/" className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-rose-600 transition-all">
          Mağazaya qayıt
        </a>
      </div>
      </Main>
    );
  }

  return (
   <Main>
     <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-serif font-black text-slate-900 mb-12">Seçilmişlərim</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favs.map((product:Product) => (
          <div key={product.id} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-32 h-32 rounded-xl overflow-hidden shrink-0">
              <img src={product.image} className="w-full h-full object-cover" alt={product.name} />
            </div>
            
            <div className="flex flex-col justify-between flex-grow py-1">
              <div>
                <h3 className="font-bold text-slate-800 line-clamp-1">{product.name}</h3>
                <p className="text-rose-600 font-black">{product.currentPrice} AZN</p>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => handleMoveToCart(product)}
                  className="flex-grow py-2 bg-slate-900 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-rose-600 transition-colors"
                >
                  <FiShoppingCart size={14} /> Səbətə at
                </button>
                <button 
                  onClick={() => dispatch(toggleFav(product))}
                  className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:text-rose-600 hover:border-rose-100 transition-all"
                  title="Sil"
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   </Main>
  );
};

export default Favorites;