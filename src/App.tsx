import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Departments } from './pages/Departments';
import { Courses } from './pages/Courses';
import { Publications } from './pages/Publications';
import { Support } from './pages/Support';
import { Contact } from './pages/Contact';

function PageRouter() {
  const { page } = useApp();

  switch (page) {
    case 'home':
      return <Home />;
    case 'about':
      return <About />;
    case 'departments':
      return <Departments />;
    case 'courses':
      return <Courses />;
    case 'publications':
      return <Publications />;
    case 'support':
      return <Support />;
    case 'contact':
      return <Contact />;
    default:
      return <Home />;
  }
}

export function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-cream">
        <Header />
        <main className="flex-1">
          <PageRouter />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}
