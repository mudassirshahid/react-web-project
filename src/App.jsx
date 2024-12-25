import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CardSection from "./components/CardSection";
import TailComponents from "./components/TailComponents";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SidebarHeader from "./components/SidebarHeader";

function App() {
  const [color, setColor] = useState("#242424");
  const [colorUpdated, setcolorUpdated] = useState(false);

  const updateColor = () => {
    setColor(colorUpdated ? "#242424" : "White");
    setcolorUpdated(!colorUpdated);
  };

  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };

  const subValue = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <>
      <div className="w-full h-auto duration-200" style={{ background: color }}>
        <Header />
        {/* <SidebarHeader />  */}
        <button className="my-3" onClick={updateColor}>
          Set mode
        </button>
        <TailComponents />
        <CardSection />
        {/* <Counter /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
