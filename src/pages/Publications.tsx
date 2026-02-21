import { useApp } from '../context/AppContext';
import {
  BookOpen,
  Printer,
  BookCopy,
  FileText,
  ArrowRight,
} from 'lucide-react';

export function Publications() {
  const { isUrdu, setPage, t } = useApp();

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 geo-pattern" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 fade-in">
            {t('Publications', 'نشرواشاعت')}
          </h1>
          <p className="text-white/70 text-lg fade-in-d1 max-w-2xl mx-auto">
            {t(
              'Islamic literature, Quran distribution, and educational materials serving the community.',
              'اسلامی ادب، قرآن کی تقسیم اور معاشرے کی خدمت کرنے والا تعلیمی مواد۔'
            )}
          </p>
        </div>
      </section>

      {/* Quran Distribution */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <BookOpen size={26} className="text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                  {t('Quran Distribution', 'قرآن کی تقسیم')}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t(
                  'Our publications department manages the printing and distribution of the Holy Quran across the community. We ensure that every student and household has access to a quality copy of the Quran for learning and recitation.',
                  'ہمارا شعبہ نشرواشاعت معاشرے میں قرآن پاک کی طباعت اور تقسیم کا انتظام کرتا ہے۔ ہم اس بات کو یقینی بناتے ہیں کہ ہر طالب علم اور گھرانے کو تعلیم اور تلاوت کے لیے قرآن کی معیاری نسخے تک رسائی حاصل ہو۔'
                )}
              </p>
              <div className="space-y-3">
                {[
                  { en: 'High-quality Quran printing with clear typography', ur: 'واضح خطاطی کے ساتھ اعلیٰ معیار کی قرآن کی طباعت' },
                  { en: 'Free distribution to maktab students', ur: 'مکتب کے طلبہ کو مفت تقسیم' },
                  { en: 'Community-wide Quran access programs', ur: 'معاشرے میں قرآن تک رسائی کے پروگرام' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <p className="text-gray-600">{isUrdu ? item.ur : item.en}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-cream-dark text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen size={48} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {t('Sponsor Quran Printing', 'قرآن کی طباعت کی کفالت')}
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                {t(
                  'Your contribution helps print and distribute Quran copies to students and families in need.',
                  'آپ کا عطیہ ضرورت مند طلبہ اور خاندانوں کو قرآن کی کاپیاں چھاپنے اور تقسیم کرنے میں مدد کرتا ہے۔'
                )}
              </p>
              <button
                onClick={() => setPage('support')}
                className="bg-primary hover:bg-primary-light text-white font-bold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                {t('Support Printing', 'طباعت کی مدد کریں')}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Materials */}
      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-primary mb-3">
              {t('Educational Materials', 'تعلیمی مواد')}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {t(
                'Comprehensive educational resources developed for students, teachers, and the community.',
                'طلبہ، اساتذہ اور معاشرے کے لیے تیار کیے گئے جامع تعلیمی وسائل۔'
              )}
            </p>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mt-4" />
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: BookCopy,
                en: 'Islamic Textbooks',
                ur: 'اسلامی درسی کتب',
                descEn: 'Carefully curated textbooks covering Islamic studies, Quran, Hadith, and Fiqh for different age groups and learning levels.',
                descUr: 'مختلف عمر کے گروپوں اور تعلیمی سطحوں کے لیے اسلامی مطالعات، قرآن، حدیث اور فقہ پر مشتمل احتیاط سے مرتب کی گئی درسی کتب۔',
              },
              {
                icon: FileText,
                en: 'Student Guides',
                ur: 'طلبہ کے رہنما',
                descEn: 'Student workbooks, activity guides, and reference materials supporting the structured curriculum in our maktabs.',
                descUr: 'ہمارے مکاتب میں منظم نصاب کی مدد کرنے والی طلبہ کی ورک بکس، سرگرمی کے رہنما اور حوالہ جاتی مواد۔',
              },
              {
                icon: Printer,
                en: 'Teaching Manuals',
                ur: 'تدریسی کتابچے',
                descEn: 'Comprehensive teaching manuals for instructors with lesson plans, methodology guides, and assessment tools.',
                descUr: 'انسٹرکٹرز کے لیے سبق کے منصوبے، طریقہ کار کے رہنما اور تشخیصی ٹولز کے ساتھ جامع تدریسی کتابچے۔',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-cream rounded-xl p-7 border border-cream-dark card-hover"
                >
                  <div className="w-14 h-14 bg-gold/15 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={28} className="text-gold-dark" />
                  </div>
                  <h3 className="font-bold text-primary text-lg mb-3">
                    {isUrdu ? item.ur : item.en}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {isUrdu ? item.descUr : item.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-[1100px] mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 geo-pattern" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t('Help Us Spread Knowledge', 'علم پھیلانے میں ہماری مدد کریں')}
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-6">
                {t(
                  'Your support helps us print and distribute Islamic books, Quran copies, and educational materials to thousands of students.',
                  'آپ کی مدد سے ہم ہزاروں طلبہ کو اسلامی کتب، قرآن کی نسخے اور تعلیمی مواد چھاپ کر تقسیم کر سکتے ہیں۔'
                )}
              </p>
              <button
                onClick={() => setPage('support')}
                className="bg-gold hover:bg-gold-light text-primary-dark font-bold px-8 py-4 rounded-xl text-lg transition-colors inline-flex items-center gap-2"
              >
                {t('Support Publications', 'اشاعت کی مدد کریں')}
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
