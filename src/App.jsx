import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Tournaments from "./pages/Tournaments";
import Chronicles from "./pages/tournaments/Chronicles";
import BattleOfMinds from "./pages/tournaments/BattleOfMinds";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

// Each old .html page opened at the top; do the same on route change.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/tournaments" element={<Tournaments />} />
      <Route path="/tournaments/chronicles" element={<Chronicles />} />
      <Route path="/tournaments/battle-of-minds" element={<BattleOfMinds />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </>
);

export default App;
