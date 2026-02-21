import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type Language = 'en' | 'ur';
export type Page = 'home' | 'about' | 'departments' | 'courses' | 'publications' | 'support' | 'contact';

export const PAGE_PATHS: Record<Page, string> = {
  home: '/',
  about: '/about',
  departments: '/departments',
  courses: '/courses',
  publications: '/publications',
  support: '/support',
  contact: '/contact',
};

function getPageFromPath(pathname: string): Page {
  const matchedPage = (Object.entries(PAGE_PATHS) as [Page, string][])
    .find(([, path]) => path === pathname)?.[0];

  return matchedPage ?? 'home';
}

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
  const navigate = useNavigate();
  const location = useLocation();

  const [lang, setLangState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem('pst-lang');
      return stored === 'ur' ? 'ur' : 'en';
    } catch {
      return 'en';
    }
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('pst-lang', newLang);
    } catch {
      // ignore
    }
  };

  const setPage = (newPage: Page) => {
    navigate(PAGE_PATHS[newPage]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = (en: string, ur: string) => (lang === 'ur' ? ur : en);
  const page = getPageFromPath(location.pathname);

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
