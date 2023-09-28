import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Homepage from "./Components/Homepage";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Counter from "./Components/Counter";
import Effect1 from "./Components/13-09/Effect-1";
import Effect2 from "./Components/13-09/Effect-2";
import Effect3 from "./Components/13-09/Effect-3";
import Effect4 from "./Components/13-09/Effect-4";
import Params from "./Components/15-09/Params-1";
import SingleProduct from "./Components/15-09/Single-Product";
import Mappings from "./Components/16-09/Mapping";
import Ternary from "./Components/16-09/Ternary";
import StyledComponents from "./Components/16-09/StyledComponents";
import Counterse from "./Components/16-09/Counterse";
import DynamicStyles from "./Components/20-09/DynamicStyles";
import ChildrenProps from "./Components/22-09/ChildrenProp";
import Registeration from "./Components/22-09/Registeration";

function App() {
  const [isLoggedIn, setLogin] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Effect1" element={<Effect1 />} />
        <Route path="/Effect2" element={<Effect2 />} />
        <Route path="/Effect3" element={<Effect3 />} />
        <Route path="/Effect4" element={<Effect4 />} />
        <Route path="/Params" element={<Params />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route
          path="/Mappings"
          element={<Mappings id={1} names={["Rahul", "Rohit", "Virat"]} />}
        />
        <Route
          path="/Ternary"
          element={<Ternary isUserLoggedIn={isLoggedIn} setLogin={setLogin} />}
        />
        <Route path="/StyledComponents" element={<StyledComponents />} />
        <Route path="/Counterse" element={<Counterse />} />
        <Route path="/DynamicStyles" element={<DynamicStyles />} />
        <Route path="/ChildrenProp" element={<ChildrenProps />} />
        <Route path="/Registeration" element={<Registeration />} />
      </Routes>
    </div>
  );
}

export default App;
