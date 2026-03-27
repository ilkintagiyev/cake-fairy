
import React, { useState, useEffect, useMemo } from 'react';
import { FiHeart, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const { cart, favs } = useSelector((state: RootState) => state.shop);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);



  const navLinks = useMemo(() => [
    { label: "Kateqoriyalar", href: "/category" },
    { label: 'Bizimlə əlaqə', href: '/contact' },
    { label: 'Haqqımızda', href: '/about' },
    { label: 'FAQ', href: '/faq' }
  ], []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toFavPage = () => {
    navigate("/favourites")
  }

  const toCartPage = () => {
    navigate("/cart")
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] ${isScrolled
        ? 'bg-white/90 backdrop-blur-lg py-3 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)]'
        : 'bg-transparent py-6'
        }`}
    >

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">


        <a href="/" className="text-2xl font-serif font-black tracking-tighter text-slate-900">
          Cake<span className="text-rose-600">Fairy</span>
        </a>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-slate-700 hover:text-rose-600 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-600 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">

          <button onClick={toFavPage} className="cursor-pointer relative p-2 text-slate-700 hover:text-rose-600 transition-all hover:scale-110 active:scale-90">
            <FiHeart size={22} />
            {favs.length > 0 && <span className="absolute -top-2 -right-2 bg-rose-600 text-white rounded-full px-1 text-[10px]">{favs.length}</span>}
          </button>

          <button onClick={toCartPage} className="cursor-pointer relative p-2 text-slate-700 hover:text-rose-600 transition-all hover:scale-110 active:scale-90">
            <FiShoppingCart size={22} />
            {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-slate-900 text-white rounded-full px-1 text-[10px]">{cart.length}</span>}
          </button>

          <div className="h-6 w-[1px] bg-slate-200 mx-1 hidden sm:block" />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-900 transition-transform active:rotate-90"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>


        </div>
      </div>

      <div className={`fixed inset-0 bg-white z-[-1] lg:hidden transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="h-full flex flex-col items-center justify-center space-y-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-serif font-bold text-slate-900">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;