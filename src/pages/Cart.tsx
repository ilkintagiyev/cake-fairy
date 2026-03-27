import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiPlus, FiMinus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../store/product';
import type { RootState } from '../store/store';
import Main from '../layout/Main';

const Cart: React.FC = () => {
  const { cart } = useSelector((state: RootState) => state.shop);
  const dispatch = useDispatch();

  const subtotal = useMemo(() => 
    cart.reduce((acc, item) => acc + (item.currentPrice * (item.quantity || 1)), 0), 
  [cart]);

  if (cart.length === 0) {
    return (
     <Main>
         <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <FiShoppingBag size={60} className="text-slate-200" />
        <h2 className="text-2xl font-serif font-bold text-slate-800">Səbətiniz boşdur</h2>
        <a href="/" className="text-rose-600 font-bold hover:underline">Alış-verişə davam et</a>
      </div>
     </Main>
    );
  }

  return (
  <Main>
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-3xl font-serif font-black text-slate-900 border-b pb-6">Səbətim ({cart.length})</h1>
        {cart.map((item:any) => (
          <div key={item.id} className="flex items-center gap-6 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <img src={item.image} className="w-24 h-24 rounded-xl object-cover" alt={item.name} />
            
            <div className="flex-grow">
              <h3 className="font-bold text-slate-800">{item.name}</h3>
              <p className="text-rose-600 font-black">{item.currentPrice} AZN</p>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-lg">
              <button onClick={() => dispatch(decrementQuantity(item.id))} className="p-1 hover:text-rose-600"><FiMinus /></button>
              <span className="w-8 text-center font-bold text-sm">{item.quantity || 1}</span>
              <button onClick={() => dispatch(incrementQuantity(item.id))} className="p-1 hover:text-rose-600"><FiPlus /></button>
            </div>

            <button onClick={() => dispatch(removeFromCart(item.id))} className="text-slate-300 hover:text-rose-600 transition-colors">
              <FiTrash2 size={20} />
            </button>
          </div>
        ))}
      </div>

      <div className="lg:col-span-1">
        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] sticky top-32 space-y-6">
          <h2 className="text-xl font-bold border-b border-slate-700 pb-4">Sifarişin xülasəsi</h2>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Məhsul məbləği</span>
              <span>{subtotal} AZN</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Çatdırılma</span>
              <span className="text-emerald-400 font-bold text-xs uppercase">Pulsuz</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t border-slate-700 pt-4">
              <span>Cəmi</span>
              <span className="text-rose-500">{subtotal} AZN</span>
            </div>
          </div>
          <button className="w-full py-4 bg-rose-600 rounded-full font-bold hover:bg-rose-700 transition-all shadow-xl shadow-rose-900/20 active:scale-95">
            Ödənişə keç
          </button>
        </div>
      </div>
    </div>
  </Main>
  );
};

export default Cart;