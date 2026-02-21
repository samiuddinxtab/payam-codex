import { useState } from 'react';
import { useApp, type Page } from '../context/AppContext';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

const navItems: { key: Page; en: string; ur: string }[] = [
  { key: 'home', en: 'Home', ur: 'ہوم' },
  { key: 'about', en: 'About', ur: 'تعارف' },
  { key: 'departments', en: 'Departments', ur: 'شعبہ جات' },
  { key: 'courses', en: 'Courses', ur: 'کورسز' },
  { key: 'publications', en: 'Publications', ur: 'نشرواشاعت' },
  { key: 'support', en: 'Support', ur: 'تعاون' },
  { key: 'contact', en: 'Contact', ur: 'رابطہ' },
];

export function Header() {
  const { lang, setLang, isUrdu, page, setPage, t } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      {/* Top utility bar */}
      <div className="border-b border-white/15">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm text-white/80">
            <div className="flex items-center gap-4">
              <a
                href="tel:9550025666"
                className="flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <Phone size={14} />
                <span className="hidden sm:inline">9550025666</span>
              </a>
              <a
                href="https://wa.me/919533482794"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <MessageCircle size={14} />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
            <button
              onClick={() => setLang(lang === 'ur' ? 'en' : 'ur')}
              className="bg-white/10 hover:bg-white/20 px-4 py-1 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
            >
              {isUrdu ? (
                <>English</>
              ) : (
                <span className="font-urdu">اردو</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <button
            onClick={() => setPage('home')}
            className="flex items-center gap-3 text-white group"
          >
            <div className="w-11 h-11 bg-gold rounded-full flex items-center justify-center text-primary-dark font-bold text-xl shadow-md group-hover:shadow-lg transition-shadow">
              ☪
            </div>
            <div className="text-start">
              <div className="font-bold text-lg leading-tight tracking-tight">
                {isUrdu ? (
                  <span className="font-urdu">پیام سیرت ٹرسٹ</span>
                ) : (
                  'Payam-e-Seerat'
                )}
              </div>
              <div className="text-[11px] text-white/60 leading-tight">
                {t('Religious Educational Trust', 'مذہبی تعلیمی و فلاحی ٹرسٹ')}
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setPage(item.key)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors text-white ${
                  page === item.key
                    ? 'bg-white/20 text-gold'
                    : 'hover:bg-white/10'
                }`}
              >
                {isUrdu ? item.ur : item.en}
              </button>
            ))}
          </nav>

          {/* Right side: Donate + Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage('support')}
              className="bg-gold hover:bg-gold-light text-primary-dark font-bold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-md hover:shadow-lg"
            >
              {t('Donate', 'عطیہ دیں')}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2.5 hover:bg-white/10 rounded-lg text-white transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-primary-dark border-t border-white/10 fade-in">
          <div className="max-w-[1100px] mx-auto px-4 py-3">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setPage(item.key);
                  setMenuOpen(false);
                }}
                className={`block w-full text-start px-4 py-3.5 rounded-lg text-sm font-medium transition-colors text-white ${
                  page === item.key
                    ? 'bg-white/10 text-gold'
                    : 'hover:bg-white/5'
                }`}
              >
                {isUrdu ? item.ur : item.en}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
