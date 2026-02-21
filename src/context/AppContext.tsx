import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Language = 'en' | 'ur';
export type Page = 'home' | 'about' | 'departments' | 'courses' | 'publications' | 'support' | 'contact';

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  isUrdu: boolean;
  page: Page;
  setPage: (page: Page) => void;
  t: (en: string, ur: string) => string;
}

const AppContext = createContext<AppContextType>({
  lang: 'en',
  setLang: () => {},
  isUrdu: false,
  page: 'home',
  setPage: () => {},
  t: (en: string) => en,
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem('pst-lang');
      return stored === 'ur' ? 'ur' : 'en';
    } catch {
      return 'en';
    }
  });

  const [page, setPageState] = useState<Page>('home');

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('pst-lang', newLang);
    } catch { /* ignore */ }
  };

  const setPage = (newPage: Page) => {
    setPageState(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = (en: string, ur: string) => lang === 'ur' ? ur : en;

  useEffect(() => {
    document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang === 'ur' ? 'ur' : 'en';
  }, [lang]);

  return (
    <AppContext.Provider value={{ lang, setLang, isUrdu: lang === 'ur', page, setPage, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
