import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Hero } from "./pages/Hero";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hero" element={<Hero />} />
    </Routes>
  );
}
