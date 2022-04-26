import { Route, Routes, Navigate } from "react-router-dom"
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from "./pages/Register/Register";
import Activation from "./pages/Activation/Activation";
import { useState } from "react";
import Add from "./pages/Add/Add";
import Profile from "./pages/Profile/Profile";
import Levels from "./pages/Levels/Levels";
function App() {

  const [dark, setDark] = useState(false)
  const [shopping, setShopping] = useState(false)

  const levels = [
    {
      images: "/images/platinum.png",
      name: "Platinum",
      price: 2000,
      p1: "- MINI DEP add-on",
      p2: "- can by  USA NOVBV",
      p3: "- can by  EU NOVBV",
      p4: "- can by World CC NOVBV",
      p5: "- quick buy -20% discount"
    },
    {
      images: "/images/gold.png",
      name: "Gold",
      price: 1500,
      p1: "- can by  USA NOVBV",
      p2: "- quick buy -20% discount",
      p3: "- auto refund time 30min",
    },
    {
      images: "/images/silver.png",
      name: "Silver",
      price: 750,
      p1: "- limit 100 orders per 24h",
      p2: "- quick buy -20% discount",
      p3: "- auto refund time 15min",
    },
    {
      images: "/images/bronze.png",
      name: "Bronze",
      price: 300,
      p1: "- 35% cards allowed to refund",
      p2: "- limit 50 orders per 24h",
      p3: "- auto refund time 10min",
    },
    {
      images: "/images/aluminium.png",
      name: "Aluminium",
      price: 30,
      p1: "-  20% cards allowed to refund",
      p2: "- limit 10 orders per 24h",
      p3: "- auto refund time 5min",
    },
    {
      images: "/images/gold.png",
      name: "Gold",
      price: 1500,
      p1: "- can by  USA NOVBV",
      p2: "- quick buy -20% discount",
      p3: "- auto refund time 30min",
    },
  ]

  return (
    <div className={dark ? "App dark-mode" : "App"}>
      <Routes>
        <Route path='/news' element={<News dark={dark} setDark={setDark} />} />
        <Route path='*' element={<Navigate to={"/news"} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shop/activation' element={<Activation dark={dark} setDark={setDark} shopping={shopping}
          setShopping={setShopping} levels={levels} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add' element={<Add dark={dark} setDark={setDark} />} />
        <Route path='/profile' element={<Profile dark={dark} setDark={setDark} shopping={shopping}
          setShopping={setShopping} />} />
        <Route path='/shop/levels' element={<Levels dark={dark} setDark={setDark} levels={levels} shopping={shopping}
          setShopping={setShopping} />} />
      </Routes>
    </div>
  );
}

export default App;
