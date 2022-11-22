import React from "react";
import Formtext from "./Component/Formtext";
import Login from "./Component/Login/Login";
import Signin from "./Component/Signin/Signin";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Resetpass from "./Component/Reset/Resetpass";
import Newpass from "./Component/Reset/Newpass";
import Codecheck from "./Component/Reset/Codecheck";
import Card from "./Component/Card/Card";
import Navbar from "./Component/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
import Carddetail from "./Component/Card/Carddetail";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Signin />}></Route>
            <Route path="/signin" element={<Login />}></Route>
            <Route path="/formtext" element={<Formtext />}></Route>
            <Route path="/resetpass" element={<Resetpass />}></Route>
            <Route path="/newpass" element={<Newpass />}></Route>
            <Route path="/codecheck" element={<Codecheck />}></Route>
            <Route path="/card" element={<Card />}></Route>
            <Route path="/carddetail" element={<Carddetail />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
