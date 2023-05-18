import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NotFound, Search } from 'pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/search/:query"
          element={<Search />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}
