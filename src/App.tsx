import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppProvider, PAGE_PATHS } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Departments } from './pages/Departments';
import { Courses } from './pages/Courses';
import { Publications } from './pages/Publications';
import { Support } from './pages/Support';
import { Contact } from './pages/Contact';

function AppRoutes() {
  return (
    <Routes>
      <Route path={PAGE_PATHS.home} element={<Home />} />
      <Route path={PAGE_PATHS.about} element={<About />} />
      <Route path={PAGE_PATHS.departments} element={<Departments />} />
      <Route path={PAGE_PATHS.courses} element={<Courses />} />
      <Route path={PAGE_PATHS.publications} element={<Publications />} />
      <Route path={PAGE_PATHS.support} element={<Support />} />
      <Route path={PAGE_PATHS.contact} element={<Contact />} />
      <Route path="*" element={<Navigate to={PAGE_PATHS.home} replace />} />
    </Routes>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className="min-h-screen flex flex-col bg-cream">
          <Header />
          <main className="flex-1">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}
