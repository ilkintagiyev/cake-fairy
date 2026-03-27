import { useState } from "react";
import type { Product } from "../types/products";


interface Toast {
  id: number;
  message: string;
  type: 'success' | 'info';
}

const [toasts, setToasts] = useState<Toast[]>([]);

const showToast = (message: string, type: 'success' | 'info' = 'success') => {
  const id = Date.now();
  setToasts(prev => [...prev, { id, message, type }]);
  setTimeout(() => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, 3000);
};


export const addToStorage = (key: 'cart' | 'fav', product: Product) => {
  const existing = JSON.parse(localStorage.getItem(key) || '[]');
  const isExist = existing.find((item: Product) => item.id === product.id);
  
  if (!isExist) {
    const updated = [...existing, product];
    localStorage.setItem(key, JSON.stringify(updated));
    showToast(`${product.name} ${key === 'cart' ? 'səbətə' : 'seçilmişlərə'} əlavə edildi!`);
  } else {
    showToast(`${product.name} artıq əlavə olunub`, 'info');
  }

return <>{toasts}</>

};