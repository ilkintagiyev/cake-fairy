import React, { useState, useEffect, useMemo } from 'react';
import { FiHeart, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { useNavigate, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { cart, favs } = useSelector((state: RootState) => state.shop);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menyu açılanda scroll-u bağlamaq
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const navLinks = useMemo(() => [
    { label: "Kateqoriyalar", href: "/category" },
    { label: 'Bizimlə əlaqə', href: '/contact' },
    { label: 'Haqqımızda', href: '/about' },
    { label: 'FAQ', href: '/faq' }
  ], []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          isScrolled || isOpen ? 'bg-white shadow-md py-3' : 'bg-white py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            
            {/* 1. Logo - Sol tərəf */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl md:text-2xl font-serif font-black tracking-tighter text-slate-900">
                Cake<span className="text-rose-600">Fairy</span>
              </Link>
            </div>

            {/* 2. Desktop Naviqasiya - Mərkəz (Yalnız böyük ekranlarda) */}
            <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-[13px] 2xl:text-sm font-bold text-slate-700 hover:text-rose-600 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* 3. Düymələr - Sağ tərəf */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button 
                onClick={() => navigate("/favourites")}
                className="p-2 text-slate-700 hover:text-rose-600 relative transition-transform hover:scale-110"
              >
                <FiHeart size={22} />
                {favs.length > 0 && (
                  <span className="absolute top-1 right-1 bg-rose-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {favs.length}
                  </span>
                )}
              </button>

              <button 
                onClick={() => navigate("/cart")}
                className="p-2 text-slate-700 hover:text-rose-600 relative transition-transform hover:scale-110"
              >
                <FiShoppingCart size={22} />
                {cart.length > 0 && (
                  <span className="absolute top-1 right-1 bg-slate-900 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {cart.length}
                  </span>
                )}
              </button>

              {/* Hamburger Menu - Planşet və Mobildə görünür */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden ml-2 p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobil Menyu Overlay */}
      <div 
        className={`fixed inset-0 z-[90] bg-white transform transition-transform duration-500 ease-in-out xl:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[18px] font-serif font-bold text-slate-900 border-b border-slate-50 pb-4"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-8">
            <button 
              onClick={() => { navigate("/category"); setIsOpen(false); }}
              className="w-full py-4 bg-rose-600 text-white rounded-xl font-bold shadow-lg shadow-rose-200"
            >
              İndi Sifariş Et
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;