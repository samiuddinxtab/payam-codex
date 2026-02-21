import {
  Children,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react';

interface LocationState {
  pathname: string;
}

interface NavigateOptions {
  replace?: boolean;
}

type NavigateFn = (to: string, options?: NavigateOptions) => void;

interface RouterContextType {
  location: LocationState;
  navigate: NavigateFn;
}

const RouterContext = createContext<RouterContextType | null>(null);

function normalizePath(path: string) {
  return path.startsWith('/') ? path : `/${path}`;
}

export function BrowserRouter({ children }: { children: ReactNode }) {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);

    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate: NavigateFn = (to, options) => {
    const nextPath = normalizePath(to);

    if (nextPath !== window.location.pathname) {
      if (options?.replace) {
        window.history.replaceState(null, '', nextPath);
      } else {
        window.history.pushState(null, '', nextPath);
      }
      setPathname(nextPath);
      return;
    }

    if (options?.replace) {
      window.history.replaceState(null, '', nextPath);
      setPathname(nextPath);
    }
  };

  const value = useMemo(
    () => ({ location: { pathname }, navigate }),
    [pathname]
  );

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useLocation must be used within BrowserRouter');
  }

  return context.location;
}

export function useNavigate() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useNavigate must be used within BrowserRouter');
  }

  return context.navigate;
}

export function Route(props: { path: string; element: ReactElement }) {
  void props;
  return null;
}

export function Routes({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  let wildcardElement: ReactElement | null = null;

  for (const child of Children.toArray(children)) {
    if (!isValidElement<{ path?: string; element?: ReactElement }>(child)) {
      continue;
    }

    const routePath = child.props.path;
    const routeElement = child.props.element;

    if (!routePath || !routeElement) {
      continue;
    }

    if (routePath === '*') {
      wildcardElement = routeElement;
      continue;
    }

    if (normalizePath(routePath) === pathname) {
      return routeElement;
    }
  }

  return wildcardElement;
}

export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace });
  }, [navigate, replace, to]);

  return null;
}
