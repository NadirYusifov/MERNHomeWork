import NotFound from "./pages/NotFound/page";
import AllClient from "./pages/AllClient/page";
import Sidebar from "./components/Layout/Sidebar";
import LoginSection from "./pages/Auth/Login/page";
import SettingsSection from "./pages/Settings/page";
import NewAddClient from "./pages/NewAddClient/page";
import RegisterSection from "./pages/Auth/Register/page";
import { Routes, Route, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();

  const isLogin = location.pathname === "/";
  const isRegister = location.pathname === "/register";

  return (
      <main>
        <div className={!isLogin && !isRegister && "flex"}>
          {!isLogin && !isRegister && <Sidebar />}
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<LoginSection />} />
            <Route path="/allclient" element={<AllClient />} />
            <Route path="/settings" element={<SettingsSection />} />
            <Route path="/register" element={<RegisterSection />} />
            <Route path="/newaddclient" element={<NewAddClient />} />
          </Routes>
          </div>
      </main>
  )
}
