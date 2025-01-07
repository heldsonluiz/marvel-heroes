import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Hero } from "./pages/Hero";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { NotFound } from "./pages/NotFound";
export function Router () {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hero/:heroId" element={<Hero />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
