import { useApp } from '../context/AppContext';
import {
  Heart,
  Users,
  BookOpen,
  Printer,
  Monitor,
  Phone,
  QrCode,
  CheckCircle,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

const sponsorshipOptions = [
  {
    icon: Users,
    en: 'Sponsor a Teacher',
    ur: 'استاد کی کفالت',
    monthly: '₹6,000',
    yearly: '₹72,000',
    descEn: 'Support a teacher\'s monthly salary to keep maktab education running.',
    descUr: 'مکتب کی تعلیم جاری رکھنے کے لیے استاد کی ماہانہ تنخواہ کی مدد کریں۔',
    highlight: true,
  },
  {
    icon: BookOpen,
    en: 'Sponsor a Student',
    ur: 'طالب علم کی کفالت',
    monthly: '₹500',
    yearly: '₹6,000',
    descEn: 'Cover a student\'s monthly educational fees and learning materials.',
    descUr: 'طالب علم کی ماہانہ تعلیمی فیس اور تعلیمی مواد کا خرچ ادا کریں۔',
    highlight: false,
  },
  {
    icon: Printer,
    en: 'Book Printing (Tier 1)',
    ur: 'کتب کی طباعت (درجہ 1)',
    monthly: '₹1,000',
    yearly: '₹12,000',
    descEn: 'Sponsor printing of Islamic textbooks and student guides.',
    descUr: 'اسلامی درسی کتب اور طلبہ کے رہنما چھاپنے کی کفالت کریں۔',
    highlight: false,
  },
  {
    icon: Printer,
    en: 'Book Printing (Tier 2)',
    ur: 'کتب کی طباعت (درجہ 2)',
    monthly: '₹5,000',
    yearly: '₹60,000',
    descEn: 'Sponsor large-scale Quran printing and distribution programs.',
    descUr: 'بڑے پیمانے پر قرآن کی طباعت اور تقسیم کے پروگراموں کی کفالت کریں۔',
    highlight: false,
  },
  {
    icon: Monitor,
    en: 'Administrative Support',
    ur: 'انتظامی مدد',
    monthly: 'Variable',
    yearly: 'Variable',
    descEn: 'Support Taleem Pro software operations, office costs, and management.',
    descUr: 'تعلیم پرو سافٹ ویئر آپریشنز، دفتری اخراجات اور انتظام کی مدد کریں۔',
    highlight: false,
  },
];

const contactNumbers = [
  { number: '9550025666', type: 'Phone' },
  { number: '9550028666', type: 'Phone' },
  { number: '+91 95334 82794', type: 'WhatsApp' },
  { number: '+91 88011 33877', type: 'Phone' },
  { number: '+91 99088 44575', type: 'Phone' },
];

export function Support() {
  const { isUrdu, setPage, t } = useApp();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 geo-pattern" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-4 text-center">
          <Heart size={48} className="text-gold mx-auto mb-5 fade-in" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in">
            {t('Support Islamic Education Today', 'آج اسلامی تعلیم کی مدد کریں')}
          </h1>
          <p className="text-white/70 text-lg fade-in-d1 max-w-2xl mx-auto">
            {t(
              'Your generous contribution helps us educate thousands of children, support teachers, and spread Islamic knowledge across the community.',
              'آپ کا فیاضانہ عطیہ ہمیں ہزاروں بچوں کو تعلیم دینے، اساتذہ کی مدد کرنے اور معاشرے میں اسلامی علم پھیلانے میں مدد کرتا ہے۔'
            )}
          </p>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-14">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-md border border-cream-dark p-8 md:p-10 max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-2">
              {t('Quick Donate', 'فوری عطیہ')}
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              {t('Scan QR code to donate instantly', 'فوری عطیہ کے لیے QR کوڈ اسکین کریں')}
            </p>
            {/* QR Code Placeholder */}
            <div className="w-52 h-52 mx-auto bg-cream rounded-xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center mb-6">
              <QrCode size={64} className="text-primary/40 mb-2" />
              <p className="text-xs text-gray-400 font-medium">
                {t('QR Code', 'QR کوڈ')}
              </p>
            </div>
            <p className="text-sm text-gray-500">
              {t(
                'Contact us for bank transfer details or other payment methods.',
                'بینک ٹرانسفر کی تفصیلات یا ادائیگی کے دیگر طریقوں کے لیے ہم سے رابطہ کریں۔'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-primary mb-3">
              {t('Sponsorship Options', 'کفالت کے اختیارات')}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {t(
                'Choose a sponsorship tier that suits you. Every contribution makes a difference.',
                'اپنی سہولت کے مطابق کفالت کا درجہ منتخب کریں۔ ہر عطیہ فرق ڈالتا ہے۔'
              )}
            </p>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorshipOptions.map((option, i) => {
              const Icon = option.icon;
              return (
                <div
                  key={i}
                  className={`rounded-2xl p-6 border card-hover relative ${
                    option.highlight
                      ? 'bg-primary text-white border-primary shadow-lg'
                      : 'bg-cream border-cream-dark'
                  }`}
                >
                  {option.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gold text-primary-dark text-xs font-bold px-3 py-1 rounded-full">
                        {t('MOST IMPACTFUL', 'سب سے اہم')}
                      </span>
                    </div>
                  )}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    option.highlight ? 'bg-white/15' : 'bg-primary/10'
                  }`}>
                    <Icon size={28} className={option.highlight ? 'text-gold' : 'text-primary'} />
                  </div>
                  <h3 className={`font-bold text-xl mb-2 ${option.highlight ? '' : 'text-primary'}`}>
                    {isUrdu ? option.ur : option.en}
                  </h3>
                  <p className={`text-sm mb-5 leading-relaxed ${option.highlight ? 'text-white/70' : 'text-gray-600'}`}>
                    {isUrdu ? option.descUr : option.descEn}
                  </p>
                  <div className={`rounded-xl p-4 ${option.highlight ? 'bg-white/10' : 'bg-white'}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-sm ${option.highlight ? 'text-white/60' : 'text-gray-500'}`}>
                        {t('Monthly', 'ماہانہ')}
                      </span>
                      <span className={`font-bold text-lg ${option.highlight ? 'text-gold' : 'text-primary'}`}>
                        {option.monthly}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${option.highlight ? 'text-white/60' : 'text-gray-500'}`}>
                        {t('Yearly', 'سالانہ')}
                      </span>
                      <span className={`font-bold text-lg ${option.highlight ? 'text-gold' : 'text-primary'}`}>
                        {option.yearly}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="bg-cream rounded-2xl p-8 md:p-10 border border-cream-dark">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              {t('Your Impact', 'آپ کا اثر')}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { en: 'Educate children in Quran and Islamic studies', ur: 'بچوں کو قرآن اور اسلامی مطالعات کی تعلیم دیں' },
                { en: 'Support 200+ teachers across 150+ maktabs', ur: '150+ مکاتب میں 200+ اساتذہ کی مدد کریں' },
                { en: 'Print and distribute Islamic books', ur: 'اسلامی کتب چھاپیں اور تقسیم کریں' },
                { en: 'Fund teacher training programs', ur: 'اساتذہ کی تربیت کے پروگراموں کی مالی مدد کریں' },
                { en: 'Maintain digital management systems', ur: 'ڈیجیٹل انتظامی نظام کو برقرار رکھیں' },
                { en: 'Support community welfare initiatives', ur: 'فلاح عامہ کے اقدامات کی مدد کریں' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3">
                  <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-gray-700 text-sm font-medium">
                    {isUrdu ? item.ur : item.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Donation */}
      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-3">
              {t('Contact for Donation', 'عطیہ کے لیے رابطہ')}
            </h2>
            <p className="text-gray-600">
              {t(
                'Reach out to us via phone or WhatsApp to make your contribution.',
                'اپنا عطیہ دینے کے لیے فون یا واٹس ایپ کے ذریعے ہم سے رابطہ کریں۔'
              )}
            </p>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {contactNumbers.map((contact, i) => (
              <a
                key={i}
                href={contact.type === 'WhatsApp' ? `https://wa.me/${contact.number.replace(/[^0-9]/g, '')}` : `tel:${contact.number.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-3 p-4 bg-cream rounded-xl border border-cream-dark card-hover"
              >
                {contact.type === 'WhatsApp' ? (
                  <MessageCircle size={20} className="text-primary shrink-0" />
                ) : (
                  <Phone size={20} className="text-primary shrink-0" />
                )}
                <div>
                  <p className="font-bold text-primary text-sm">{contact.number}</p>
                  <p className="text-xs text-gray-500">{contact.type}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setPage('contact')}
              className="text-primary hover:text-primary-light font-medium inline-flex items-center gap-2 transition-colors"
            >
              {t('Visit Contact Page', 'رابطہ صفحہ دیکھیں')}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
