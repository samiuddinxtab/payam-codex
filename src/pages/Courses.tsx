import { useApp } from '../context/AppContext';
import {
  GraduationCap,
  Clock,
  BookOpen,
  CheckCircle,
  Users,
  Award,
  Target,
} from 'lucide-react';

const courseSubjects = [
  { en: 'Islamic History (Tareekh)', ur: 'تاریخ اسلام' },
  { en: 'Aqeedah (Islamic Beliefs)', ur: 'عقیدہ' },
  { en: 'Seerat-un-Nabi ﷺ', ur: 'سیرت النبی ﷺ' },
  { en: 'Basic Fiqh (Islamic Jurisprudence)', ur: 'بنیادی فقہ' },
  { en: 'Namaz & Worship Practices', ur: 'نماز اور عبادات' },
  { en: 'Islamic Manners & Ethics (Adab)', ur: 'اسلامی آداب و اخلاق' },
  { en: 'Contemporary Islamic Issues', ur: 'عصری اسلامی مسائل' },
];

const trainingTopics = [
  { en: 'Teaching Methodology', ur: 'تدریسی طریقہ کار', icon: BookOpen },
  { en: 'Classroom Discipline', ur: 'کلاس روم کا نظم و ضبط', icon: Target },
  { en: 'Moral Leadership', ur: 'اخلاقی قیادت', icon: Award },
  { en: 'Student Engagement', ur: 'طلبہ کی شمولیت', icon: Users },
];

export function Courses() {
  const { isUrdu, setPage, t } = useApp();

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 geo-pattern" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 fade-in">
            {t('Courses', 'کورسز')}
          </h1>
          <p className="text-white/70 text-lg fade-in-d1 max-w-2xl mx-auto">
            {t(
              'Structured Islamic education courses and teacher training programs for comprehensive learning.',
              'جامع تعلیم کے لیے منظم اسلامی تعلیمی کورسز اور اساتذہ کی تربیت کے پروگرام۔'
            )}
          </p>
        </div>
      </section>

      {/* 40 Days Islamic Course */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-md border border-cream-dark overflow-hidden">
            {/* Course Header */}
            <div className="bg-gradient-to-r from-primary to-primary-light p-8 md:p-10 text-white">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-20 h-20 bg-white/15 rounded-2xl flex items-center justify-center shrink-0">
                  <GraduationCap size={40} className="text-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h2 className="text-3xl font-bold">
                      {t('40 Days Islamic Course', '40 روزہ اسلامی کورس')}
                    </h2>
                    <span className="bg-gold text-primary-dark text-xs font-bold px-3 py-1 rounded-full">
                      {t('FLAGSHIP', 'نمایاں')}
                    </span>
                  </div>
                  <p className="text-white/80">
                    {t(
                      'A comprehensive 40-day intensive Islamic education program covering all core subjects.',
                      'ایک جامع 40 روزہ اسلامی تعلیمی پروگرام جو تمام بنیادی مضامین کا احاطہ کرتا ہے۔'
                    )}
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-white/70">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {t('40 Days', '40 دن')}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} />
                      {t('7 Subjects', '7 مضامین')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Subjects */}
            <div className="p-8 md:p-10">
              <h3 className="text-xl font-bold text-primary mb-6">
                {t('Course Subjects', 'کورس کے مضامین')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {courseSubjects.map((subject, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl bg-cream border border-cream-dark"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <CheckCircle size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        {isUrdu ? subject.ur : subject.en}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  {t(
                    'Interested in joining the course or sponsoring a student?',
                    'کورس میں شامل ہونے یا کسی طالب علم کی کفالت کرنے میں دلچسپی ہے؟'
                  )}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setPage('contact')}
                    className="bg-primary hover:bg-primary-light text-white font-bold px-6 py-3 rounded-lg transition-colors"
                  >
                    {t('Contact Us', 'ہم سے رابطہ کریں')}
                  </button>
                  <button
                    onClick={() => setPage('support')}
                    className="bg-gold hover:bg-gold-light text-primary-dark font-bold px-6 py-3 rounded-lg transition-colors"
                  >
                    {t('Sponsor a Student', 'طالب علم کی کفالت کریں')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Training */}
      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-primary mb-3">
              {t('Teacher Training Program', 'اساتذہ کی تربیت کا پروگرام')}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {t(
                'Comprehensive training programs to equip teachers with modern teaching methodologies while preserving Islamic educational values.',
                'اساتذہ کو جدید تدریسی طریقہ کار سے لیس کرنے کے لیے جامع تربیتی پروگرام جبکہ اسلامی تعلیمی اقدار کو محفوظ رکھنا۔'
              )}
            </p>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingTopics.map((topic, i) => {
              const Icon = topic.icon;
              return (
                <div
                  key={i}
                  className="bg-cream rounded-xl p-6 text-center border border-cream-dark card-hover"
                >
                  <div className="w-14 h-14 bg-gold/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-gold-dark" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">
                    {isUrdu ? topic.ur : topic.en}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-cream rounded-xl p-6 md:p-8 border border-cream-dark max-w-2xl mx-auto">
            <h3 className="font-bold text-primary mb-4 text-lg text-center">
              {t('Training Includes', 'تربیت میں شامل ہے')}
            </h3>
            <div className="space-y-3">
              {[
                { en: 'Modern teaching method training adapted for Islamic education', ur: 'اسلامی تعلیم کے لیے جدید تدریسی طریقہ کار کی تربیت' },
                { en: 'Classroom discipline and student management education', ur: 'کلاس روم کے نظم و ضبط اور طلبہ کے انتظام کی تعلیم' },
                { en: 'Moral and spiritual leadership development', ur: 'اخلاقی اور روحانی قیادت کی ترقی' },
                { en: 'Use of Taleem Pro digital management tools', ur: 'تعلیم پرو ڈیجیٹل انتظامی ٹولز کا استعمال' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {isUrdu ? item.ur : item.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
