import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home, NotFound, Search, MyPlaylist, Login, Note, Register, Logout,
} from 'pages';

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
          path="/my-playlist"
          element={<MyPlaylist />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/note"
          element={<Note />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/logout"
          element={<Logout />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}
