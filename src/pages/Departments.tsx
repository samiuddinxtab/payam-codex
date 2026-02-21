import { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  BookOpen,
  Building2,
  GraduationCap,
  Users,
  Megaphone,
  Printer,
  ClipboardCheck,
  Heart,
  ChevronDown,
  ChevronUp,
  type LucideIcon,
} from 'lucide-react';

interface Department {
  icon: LucideIcon;
  ur: string;
  en: string;
  purposeEn: string;
  purposeUr: string;
  activitiesEn: string[];
  activitiesUr: string[];
  impactEn: string;
  impactUr: string;
  supportEn: string;
  supportUr: string;
}

const departments: Department[] = [
  {
    icon: BookOpen,
    ur: 'شعبہ مکاتب',
    en: 'Maktab Department',
    purposeEn: 'Providing basic Quran education and foundational Islamic teaching across an extensive network of maktabs throughout the region.',
    purposeUr: 'پورے خطے میں مکاتب کے وسیع نیٹ ورک کے ذریعے بنیادی قرآنی تعلیم اور اسلامی تعلیم فراہم کرنا۔',
    activitiesEn: ['Basic Quran education', 'Foundational Islamic teaching', 'Student enrollment & tracking', 'Teacher deployment & management'],
    activitiesUr: ['بنیادی قرآنی تعلیم', 'بنیادی اسلامی تعلیم', 'طلبہ کا اندراج اور نگرانی', 'اساتذہ کی تعیناتی اور انتظام'],
    impactEn: '150+ maktabs operational with thousands of students enrolled across the region.',
    impactUr: 'پورے خطے میں 150+ مکاتب فعال ہیں جن میں ہزاروں طلبہ کا اندراج ہے۔',
    supportEn: 'Teacher salaries, learning materials, maktab infrastructure.',
    supportUr: 'اساتذہ کی تنخواہیں، تعلیمی مواد، مکاتب کا بنیادی ڈھانچہ۔',
  },
  {
    icon: Building2,
    ur: 'شعبہ مدارس',
    en: 'Madrasa Department',
    purposeEn: 'Supporting city madrasas with expanded Quran education programs and structured Islamic studies curriculum.',
    purposeUr: 'شہری مدارس کی مدد وسیع قرآنی تعلیمی پروگراموں اور منظم اسلامی مطالعات کے نصاب کے ساتھ۔',
    activitiesEn: ['City madrasa support', 'Quran education expansion', 'Islamic studies programs', 'Curriculum development'],
    activitiesUr: ['شہری مدارس کی مدد', 'قرآنی تعلیم کی توسیع', 'اسلامی مطالعات کے پروگرام', 'نصاب کی ترقی'],
    impactEn: 'Multiple madrasas supported with enhanced educational programs.',
    impactUr: 'متعدد مدارس کو بہتر تعلیمی پروگراموں کے ساتھ مدد فراہم کی گئی۔',
    supportEn: 'Madrasa operations, teacher support, educational resources.',
    supportUr: 'مدارس کا انتظام، اساتذہ کی مدد، تعلیمی وسائل۔',
  },
  {
    icon: GraduationCap,
    ur: 'شعبہ کورس',
    en: 'Courses Department',
    purposeEn: 'Organizing structured Islamic courses including the signature 40-day course covering core Islamic subjects.',
    purposeUr: 'منظم اسلامی کورسز کا اہتمام جن میں بنیادی اسلامی مضامین پر مشتمل 40 روزہ خصوصی کورس شامل ہے۔',
    activitiesEn: ['40 Days Islamic Course', 'Structured educational programs', 'Subject-wise training', 'Teacher training programs'],
    activitiesUr: ['40 روزہ اسلامی کورس', 'منظم تعلیمی پروگرام', 'مضمون کے لحاظ سے تربیت', 'اساتذہ کی تربیت کے پروگرام'],
    impactEn: 'Hundreds of graduates completing Islamic education courses annually.',
    impactUr: 'ہر سال سینکڑوں فارغ التحصیل اسلامی تعلیمی کورسز مکمل کر رہے ہیں۔',
    supportEn: 'Course materials, instructor fees, venue arrangements.',
    supportUr: 'کورس کا مواد، انسٹرکٹر کی فیس، مقام کے انتظامات۔',
  },
  {
    icon: Users,
    ur: 'شعبہ تنظیم اطفال',
    en: "Children's Organization Department",
    purposeEn: "Dedicated to children's Islamic development through organized events, structured learning, and youth engagement activities.",
    purposeUr: 'منظم تقریبات، منظم تعلیم اور نوجوانوں کی مشغولیت کی سرگرمیوں کے ذریعے بچوں کی اسلامی نشوونما کے لیے وقف۔',
    activitiesEn: ["Children's Islamic development", 'Organized educational events', 'Structured learning programs', 'Youth engagement activities'],
    activitiesUr: ['بچوں کی اسلامی نشوونما', 'منظم تعلیمی تقریبات', 'منظم تعلیمی پروگرام', 'نوجوانوں کی مشغولیت کی سرگرمیاں'],
    impactEn: 'Engaging children in Islamic learning through creative and structured programs.',
    impactUr: 'تخلیقی اور منظم پروگراموں کے ذریعے بچوں کو اسلامی تعلیم میں مشغول کرنا۔',
    supportEn: 'Event organization, children\'s materials, activity resources.',
    supportUr: 'تقریبات کا اہتمام، بچوں کا مواد، سرگرمیوں کے وسائل۔',
  },
  {
    icon: Megaphone,
    ur: 'شعبہ دعوت',
    en: 'Dawah Department',
    purposeEn: 'Conducting outreach activities and Islamic awareness campaigns to strengthen faith and understanding in the community.',
    purposeUr: 'معاشرے میں ایمان اور سمجھ بوجھ کو مضبوط بنانے کے لیے دعوتی سرگرمیاں اور اسلامی آگاہی مہمات۔',
    activitiesEn: ['Community outreach activities', 'Islamic awareness campaigns', 'Educational seminars', 'Interfaith dialogue sessions'],
    activitiesUr: ['کمیونٹی تک رسائی کی سرگرمیاں', 'اسلامی آگاہی مہمات', 'تعلیمی سیمینارز', 'بین المذاہب مکالمے'],
    impactEn: 'Reaching hundreds of community members through awareness and outreach programs.',
    impactUr: 'آگاہی اور رسائی کے پروگراموں کے ذریعے سینکڑوں لوگوں تک رسائی۔',
    supportEn: 'Campaign materials, event logistics, outreach resources.',
    supportUr: 'مہم کا مواد، تقریب کا لوجسٹکس، رسائی کے وسائل۔',
  },
  {
    icon: Printer,
    ur: 'شعبہ نشرواشاعت',
    en: 'Publications Department',
    purposeEn: 'Managing Quran printing, Islamic book distribution, and educational material publication for widespread access to Islamic knowledge.',
    purposeUr: 'قرآن کی طباعت، اسلامی کتب کی تقسیم اور تعلیمی مواد کی اشاعت کا انتظام۔',
    activitiesEn: ['Quran printing & distribution', 'Islamic books publishing', 'Educational material creation', 'Teaching manuals & guides'],
    activitiesUr: ['قرآن کی طباعت و تقسیم', 'اسلامی کتب کی اشاعت', 'تعلیمی مواد کی تخلیق', 'تدریسی کتابچے اور رہنما'],
    impactEn: 'Thousands of Islamic books and Quran copies distributed across the community.',
    impactUr: 'ہزاروں اسلامی کتب اور قرآن کی کاپیاں معاشرے میں تقسیم کی گئیں۔',
    supportEn: 'Printing costs, distribution logistics, material development.',
    supportUr: 'طباعت کے اخراجات، تقسیم کا لوجسٹکس، مواد کی ترقی۔',
  },
  {
    icon: ClipboardCheck,
    ur: 'شعبہ امتحان',
    en: 'Examination Department',
    purposeEn: 'Conducting student testing and academic evaluation to ensure quality educational standards across all maktabs.',
    purposeUr: 'تمام مکاتب میں معیاری تعلیمی سطح کو یقینی بنانے کے لیے طلبہ کے امتحانات اور تعلیمی جانچ۔',
    activitiesEn: ['Student examinations', 'Academic evaluation', 'Progress assessment', 'Quality standards monitoring'],
    activitiesUr: ['طلبہ کے امتحانات', 'تعلیمی جانچ', 'ترقی کی تشخیص', 'معیار کی نگرانی'],
    impactEn: 'Standardized evaluation system ensuring consistent educational quality.',
    impactUr: 'معیاری جانچ کا نظام جو مستقل تعلیمی معیار کو یقینی بناتا ہے۔',
    supportEn: 'Examination materials, evaluation tools, administration costs.',
    supportUr: 'امتحانی مواد، جانچ کے اوزار، انتظامی اخراجات۔',
  },
  {
    icon: Heart,
    ur: 'شعبہ تعاون مالی',
    en: 'Financial Support Department',
    purposeEn: 'Managing financial sponsorship programs to support teachers, students, book printing, and operational costs of the Trust.',
    purposeUr: 'ٹرسٹ کے اساتذہ، طلبہ، کتب کی طباعت اور آپریشنل اخراجات کی مدد کے لیے مالی کفالت کے پروگراموں کا انتظام۔',
    activitiesEn: ['Teacher salary sponsorship', 'Student fee support', 'Book printing sponsorship', 'Administrative support funding'],
    activitiesUr: ['اساتذہ کی تنخواہ کی کفالت', 'طلبہ کی فیس کی مدد', 'کتب کی طباعت کی کفالت', 'انتظامی مدد کی فنڈنگ'],
    impactEn: 'Enabling the entire trust operations through community financial support.',
    impactUr: 'کمیونٹی کی مالی مدد کے ذریعے پورے ٹرسٹ کے آپریشنز کو ممکن بنانا۔',
    supportEn: 'All sponsorship tiers contribute directly to trust operations.',
    supportUr: 'کفالت کے تمام درجے براہ راست ٹرسٹ کے آپریشنز میں حصہ ڈالتے ہیں۔',
  },
];

const sponsorshipTiers = [
  { typeEn: 'Teacher Support (Monthly)', typeUr: 'استاد کی کفالت (ماہانہ)', monthly: '₹6,000', yearly: '₹72,000' },
  { typeEn: 'Student Fee Support (Monthly)', typeUr: 'طالب علم کی فیس (ماہانہ)', monthly: '₹500', yearly: '₹6,000' },
  { typeEn: 'Book Printing (Tier 1)', typeUr: 'کتب کی طباعت (درجہ 1)', monthly: '₹1,000', yearly: '₹12,000' },
  { typeEn: 'Book Printing (Tier 2)', typeUr: 'کتب کی طباعت (درجہ 2)', monthly: '₹5,000', yearly: '₹60,000' },
  { typeEn: 'Administrative Support', typeUr: 'انتظامی مدد', monthly: 'Variable', yearly: 'Variable' },
];

export function Departments() {
  const { isUrdu, setPage, t } = useApp();
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 geo-pattern" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 fade-in">
            {t('Our Departments', 'ہمارے شعبہ جات')}
          </h1>
          <p className="text-white/70 text-lg fade-in-d1 max-w-2xl mx-auto">
            {t(
              'Eight organized departments working together to serve Islamic education and community welfare.',
              'آٹھ منظم شعبے جو مل کر اسلامی تعلیم اور فلاح عامہ کی خدمت کر رہے ہیں۔'
            )}
          </p>
        </div>
      </section>

      {/* Department List */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="space-y-4">
            {departments.map((dept, idx) => {
              const isOpen = expanded === idx;
              const Icon = dept.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-cream-dark shadow-sm overflow-hidden card-hover"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center gap-4 p-5 md:p-6 text-start"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-urdu text-xl text-primary font-bold leading-relaxed">
                        {dept.ur}
                      </h3>
                      <p className="text-gray-500 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {dept.en}
                      </p>
                    </div>
                    <div className="text-primary shrink-0">
                      {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 md:px-6 pb-6 border-t border-cream-dark pt-5 fade-in">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Purpose */}
                        <div>
                          <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-gold rounded-full" />
                            {t('Purpose', 'مقصد')}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {isUrdu ? dept.purposeUr : dept.purposeEn}
                          </p>
                        </div>

                        {/* Activities */}
                        <div>
                          <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-gold rounded-full" />
                            {t('Activities', 'سرگرمیاں')}
                          </h4>
                          <ul className="space-y-1.5">
                            {(isUrdu ? dept.activitiesUr : dept.activitiesEn).map((act, i) => (
                              <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                                <span className="text-primary mt-0.5">✓</span>
                                {act}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Impact */}
                        <div>
                          <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-gold rounded-full" />
                            {t('Impact', 'اثر')}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {isUrdu ? dept.impactUr : dept.impactEn}
                          </p>
                        </div>

                        {/* Support Needed */}
                        <div>
                          <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-gold rounded-full" />
                            {t('Support Needed', 'مدد درکار')}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {isUrdu ? dept.supportUr : dept.supportEn}
                          </p>
                        </div>
                      </div>

                      {/* Special sponsorship table for Financial Support dept */}
                      {idx === 7 && (
                        <div className="mt-8 bg-cream rounded-xl p-5">
                          <h4 className="font-bold text-primary mb-4 text-lg text-center">
                            {t('Sponsorship Options', 'کفالت کے اختیارات')}
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                              <thead>
                                <tr className="border-b-2 border-primary/20">
                                  <th className="text-start p-3 text-primary font-bold">
                                    {t('Support Type', 'مدد کی قسم')}
                                  </th>
                                  <th className="text-center p-3 text-primary font-bold">
                                    {t('Monthly', 'ماہانہ')}
                                  </th>
                                  <th className="text-center p-3 text-primary font-bold">
                                    {t('Yearly', 'سالانہ')}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {sponsorshipTiers.map((tier, i) => (
                                  <tr key={i} className="border-b border-cream-dark hover:bg-white transition-colors">
                                    <td className="p-3 font-medium text-gray-700">
                                      {isUrdu ? tier.typeUr : tier.typeEn}
                                    </td>
                                    <td className="p-3 text-center text-primary font-bold">
                                      {tier.monthly}
                                    </td>
                                    <td className="p-3 text-center text-primary font-bold">
                                      {tier.yearly}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <div className="text-center mt-5">
                            <button
                              onClick={() => setPage('support')}
                              className="bg-primary hover:bg-primary-light text-white font-bold px-6 py-3 rounded-lg transition-colors"
                            >
                              {t('Donate Now →', 'ابھی عطیہ دیں ←')}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
