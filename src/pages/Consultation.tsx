import React from 'react';
import { FiCalendar, FiClock, FiMessageCircle, FiCheckCircle } from 'react-icons/fi';
import toast from 'react-hot-toast';
import Main from '../layout/Main';

const Consultation: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Müraciətiniz qəbul edildi! Konditerimiz sizinlə əlaqə saxlayacaq.", {
      duration: 5000,
      icon: '👨‍🍳',
    });
  };

  return (
   <Main>
     <div className="pt-24 bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519340333755-507213437f8e?q=80&w=1600" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Cake Consultation" 
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-4">Özəl Dizayn Konsultasiyası</h1>
          <p className="text-rose-200 text-lg max-w-2xl mx-auto">
            Xəyallarınızdakı tortu peşəkar konditerlərimizlə birlikdə dizayn edin.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Information Side */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-slate-900">Proses Necə İşləyir?</h2>
              <p className="text-slate-500">Sizin üçün ən mükəmməl dadı və görünüşü tapmaq üçün 3 sadə addım:</p>
            </div>

            <div className="space-y-8">
              {[
                { 
                  icon: <FiCalendar />, 
                  title: "Görüş Təyini", 
                  desc: "Formu doldurun və sizin üçün uyğun vaxtı seçin." 
                },
                { 
                  icon: <FiMessageCircle />, 
                  title: "Dizayn Müzakirəsi", 
                  desc: "Rəng, tərkib və forma haqqında detalları müzakirə edirik." 
                },
                { 
                  icon: <FiCheckCircle />, 
                  title: "Dad Testi", 
                  desc: "Seçdiyiniz tərkiblərin dadına baxaraq son qərarı verirsiniz." 
                }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 shrink-0 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 text-2xl group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
              <p className="text-slate-700 italic font-medium">
                "Hər bir özəl sifariş bizim üçün yeni bir hekayədir. Sizin hekayənizi tort üzərində canlandırmaq üçün səbirsizlənirik."
              </p>
              <p className="text-rose-600 font-bold mt-4">— Cake Studio Yaradıcı Heyəti</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-50">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Müraciət Formu</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Tam Adınız</label>
                <input type="text" required className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-rose-500 outline-none transition-all" placeholder="Elvin Məmmədov" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Telefon</label>
                  <input type="tel" required className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-rose-500 outline-none transition-all" placeholder="+994" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Tədbir Tarixi</label>
                  <input type="date" required className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-rose-500 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">Tədbirin Növü</label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-rose-500 outline-none transition-all appearance-none">
                  <option>Toy</option>
                  <option>Ad Günü</option>
                  <option>Nişan / Xınayaxtı</option>
                  <option>Korporativ Tədbir</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">İstəkləriniz (Könüllü)</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-rose-500 outline-none transition-all resize-none" placeholder="Tortun tərkibi, rəngi və ya xüsusi qeydlər..."></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-rose-600 transition-all shadow-xl active:scale-95">
                Görüş Təyin Et
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
   </Main>
  );
};

export default Consultation;