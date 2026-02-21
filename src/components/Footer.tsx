import { useApp, type Page } from '../context/AppContext';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';

const quickLinks: { key: Page; en: string; ur: string }[] = [
  { key: 'about', en: 'About Us', ur: 'ہمارے بارے میں' },
  { key: 'departments', en: 'Departments', ur: 'شعبہ جات' },
  { key: 'courses', en: 'Courses', ur: 'کورسز' },
  { key: 'publications', en: 'Publications', ur: 'نشرواشاعت' },
  { key: 'support', en: 'Donate', ur: 'عطیہ دیں' },
  { key: 'contact', en: 'Contact Us', ur: 'ہم سے رابطہ کریں' },
];

export function Footer() {
  const { isUrdu, setPage, t } = useApp();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-[1100px] mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Trust Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-primary-dark font-bold text-lg">
                ☪
              </div>
              <h3 className="text-gold font-bold text-xl">
                {isUrdu ? (
                  <span className="font-urdu">پیام سیرت ٹرسٹ</span>
                ) : (
                  'Payam-e-Seerat Trust'
                )}
              </h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-3">
              {t(
                'Religious Educational & Welfare Trust dedicated to promoting Islamic education, Quran learning, and community welfare in Golconda, Hyderabad.',
                'مذہبی تعلیمی و فلاحی ٹرسٹ جو اسلامی تعلیم، قرآنی تعلیم اور فلاح عامہ کے فروغ کے لیے وقف ہے۔ گولکنڈہ، حیدرآباد۔'
              )}
            </p>
            <p className="text-white/40 text-xs">
              Reg. No. 6/2026
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-bold text-lg mb-5">
              {t('Quick Links', 'فوری روابط')}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => setPage(item.key)}
                    className="text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {isUrdu ? item.ur : item.en}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold font-bold text-lg mb-5">
              {t('Contact', 'رابطہ')}
            </h3>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                <span>Ali Ahmed Colony, Near Ali Ahmed Masjid, Golconda, Hyderabad</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:payameseerat@gmail.com" className="hover:text-gold transition-colors">
                  payameseerat@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-gold shrink-0" />
                <span>9550025666 / 9550028666</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe size={16} className="text-gold shrink-0" />
                <a href="https://payameseerat.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  payameseerat.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Payam-e-Seerat Trust | پیام سیرت ٹرسٹ —{' '}
          {t('All rights reserved.', 'جملہ حقوق محفوظ ہیں۔')}
        </div>
      </div>
    </footer>
  );
}
