import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Hero } from "./pages/Hero";
import { DefaultLayout } from "./layouts/DefaultLayout";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
      </Route>
    </Routes>
  );
}
