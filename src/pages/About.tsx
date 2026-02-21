import { useApp } from '../context/AppContext';
import {
  BookOpen,
  Shield,
  Users,
  Target,
  Monitor,
  BarChart3,
  GraduationCap,
  CheckCircle,
} from 'lucide-react';

export function About() {
  const { isUrdu, t } = useApp();

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 geo-pattern" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 fade-in">
            {t('About Us', 'ہمارے بارے میں')}
          </h1>
          <p className="text-white/70 text-lg fade-in-d1 max-w-2xl mx-auto">
            {t(
              'Learn about Payam-e-Seerat Trust and our commitment to Islamic education and community welfare.',
              'پیام سیرت ٹرسٹ اور اسلامی تعلیم و فلاح عامہ کے لیے ہمارے عزم کے بارے میں جانیں۔'
            )}
          </p>
        </div>
      </section>

      {/* Trust Overview */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                {t('Trust Overview', 'ٹرسٹ کا تعارف')}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {t(
                    'Payam-e-Seerat Trust is a registered Religious Educational & Welfare Trust based in Golconda, Hyderabad. Established with the vision of promoting Islamic education and moral development, the Trust operates through eight organized departments serving thousands of students across the region.',
                    'پیام سیرت ٹرسٹ ایک رجسٹرڈ مذہبی تعلیمی و فلاحی ٹرسٹ ہے جو گولکنڈہ، حیدرآباد میں قائم ہے۔ اسلامی تعلیم اور اخلاقی ترقی کے فروغ کے وژن کے ساتھ قائم کیا گیا، یہ ٹرسٹ آٹھ منظم شعبوں کے ذریعے پورے خطے میں ہزاروں طلبہ کی خدمت کرتا ہے۔'
                  )}
                </p>
                <p>
                  {t(
                    'Through our network of maktabs, madrasas, and educational programs, we provide foundational Islamic education including Quran learning, Seerat studies, Fiqh, and moral guidance to children and young adults.',
                    'ہمارے مکاتب، مدارس اور تعلیمی پروگراموں کے نیٹ ورک کے ذریعے، ہم بچوں اور نوجوانوں کو قرآنی تعلیم، سیرت کے مطالعات، فقہ اور اخلاقی رہنمائی سمیت بنیادی اسلامی تعلیم فراہم کرتے ہیں۔'
                  )}
                </p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 bg-cream-dark rounded-lg px-4 py-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-primary" />
                <span>{t('Registered Trust — Reg. No. 6/2026', 'رجسٹرڈ ٹرسٹ — رجسٹریشن نمبر 6/2026')}</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-cream-dark">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-gold">☪</span>
                </div>
                <h3 className="font-urdu text-2xl text-primary font-bold">پیام سیرت ٹرسٹ</h3>
                <p className="text-gray-500 text-sm mt-1">Golconda, Hyderabad</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '150+', label: t('Maktabs', 'مکاتب') },
                  { val: '200+', label: t('Teachers', 'اساتذہ') },
                  { val: '5000+', label: t('Students', 'طلبہ') },
                  { val: '8', label: t('Departments', 'شعبے') },
                ].map((s, i) => (
                  <div key={i} className="bg-cream rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-primary">{s.val}</div>
                    <div className="text-sm text-gray-600">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-primary mb-3">
              {t('Why This Trust Exists', 'یہ ٹرسٹ کیوں قائم ہوا')}
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: BookOpen,
                en: 'Islamic Education for Children',
                ur: 'بچوں کے لیے اسلامی تعلیم',
                descEn: 'Providing accessible Islamic education to every child regardless of their background.',
                descUr: 'ہر بچے کو اس کے پس منظر سے قطع نظر قابل رسائی اسلامی تعلیم فراہم کرنا۔',
              },
              {
                icon: Users,
                en: 'Organized Teaching Structure',
                ur: 'منظم تدریسی ڈھانچہ',
                descEn: 'A systematic approach to teaching with trained teachers and structured curriculum.',
                descUr: 'تربیت یافتہ اساتذہ اور منظم نصاب کے ساتھ تدریس کا ایک منظم طریقہ۔',
              },
              {
                icon: Shield,
                en: 'Moral Upbringing Programs',
                ur: 'اخلاقی تربیت کے پروگرام',
                descEn: 'Building character and Islamic values in the younger generation.',
                descUr: 'نوجوان نسل میں کردار سازی اور اسلامی اقدار کا فروغ۔',
              },
              {
                icon: Target,
                en: 'Taleem Pro Coordination',
                ur: 'تعلیم پرو کوآرڈینیشن',
                descEn: 'Digital educational coordination through Taleem Pro software system.',
                descUr: 'تعلیم پرو سافٹ ویئر سسٹم کے ذریعے ڈیجیٹل تعلیمی ہم آہنگی۔',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-cream border border-cream-dark">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">
                    {isUrdu ? item.ur : item.en}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {isUrdu ? item.descUr : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Taleem Pro / Digital Administration */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 geo-pattern" />
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    {t('Digital Administration', 'ڈیجیٹل انتظامیہ')}
                  </h2>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {t(
                      'Payam-e-Seerat Trust utilizes the Taleem Pro software system for comprehensive digital management of all educational and administrative operations.',
                      'پیام سیرت ٹرسٹ تمام تعلیمی اور انتظامی کاموں کی جامع ڈیجیٹل انتظام کے لیے تعلیم پرو سافٹ ویئر سسٹم استعمال کرتا ہے۔'
                    )}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Monitor, en: 'Taleem Pro Software', ur: 'تعلیم پرو سافٹ ویئر' },
                    { icon: Users, en: 'Student Tracking', ur: 'طلبہ کی نگرانی' },
                    { icon: BarChart3, en: 'Account Management', ur: 'حسابات کا انتظام' },
                    { icon: GraduationCap, en: 'Academic Progress', ur: 'تعلیمی ترقی' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                      <item.icon size={28} className="text-gold mx-auto mb-2" />
                      <p className="text-sm font-medium">{isUrdu ? item.ur : item.en}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
