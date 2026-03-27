import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiTwitter,  FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import toast from 'react-hot-toast';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const [email,setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("")
    toast.success("Abunə olundunuz!");
  };

  const navLinks = [
    { name: 'Bütün Tortlar', path: '/' },
    { name: 'Seçilmişlər', path: '/favourites' },
    { name: 'Səbətim', path: '/cart' },
    { name: 'Haqqımızda', path: '/about' },
    { name: 'FAQ', path: '/faq' }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">


          <div className="space-y-8">
            <Link to="/" className="text-3xl font-serif font-black text-white tracking-tighter group">
              Cake<span className="text-rose-600 group-hover:text-rose-500 transition-colors">Fairy</span>
            </Link>
            <p className="text-sm leading-relaxed font-medium italic">
              2015-ci ildən bəri hər bir tortu bir sənət əsəri kimi işləyirik.
            </p>
            <div className="flex gap-4">
              {[FiInstagram, FiFacebook, FiTwitter].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-slate-900 rounded-2xl text-white hover:bg-rose-600 transition-all transform hover:-translate-y-1">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg relative inline-block">
              Keçidlər
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-rose-600 rounded-full" />
            </h4>
            <ul className="space-y-4 text-sm font-semibold">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-rose-500 transition-all flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-rose-600 group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg relative inline-block">
              Əlaqə
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-rose-600 rounded-full" />
            </h4>
            <ul className="space-y-5 text-sm font-medium">
              <li className="flex items-start gap-4 group">
                <div className="p-2 bg-slate-900 rounded-lg text-rose-500">
                  <FiMapPin size={18} />
                </div>
                <span>Bakı, Nizami küç. 42</span>
              </li>
              <Link to="/contact" className="flex items-center gap-4 group cursor-pointer hover:text-rose-500 transition-colors">
                <div className="p-2 bg-slate-900 rounded-lg text-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  <FiPhone size={18} />
                </div>
                <span>Bizə yazın</span>
              </Link>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 text-lg relative inline-block">
              Bülleten
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-rose-600 rounded-full" />
            </h4>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
              value = {email}
              onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="E-poçt"
                className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 px-6 text-sm text-white focus:ring-2 focus:ring-rose-600 outline-none"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-rose-600 hover:bg-rose-700 text-white px-5 rounded-xl transition-all">
                <FiSend size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold tracking-widest text-slate-600 uppercase">
            © {currentYear} Cake Studio.
          </p>
          <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
            <Link to="/about" className="hover:text-rose-500 transition-colors">Məxfilik</Link>
            <Link to="/faq" className="hover:text-rose-500 transition-colors">Şərtlər</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;