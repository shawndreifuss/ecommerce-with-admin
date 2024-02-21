import React from "react";
import { Routes, Route } from "react-router-dom";

// components

import FooterSmall from "../components/Footers/FooterSmall";

// pages

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url('assets/img/register_bg_2.png')",v
            }}
          ></div>
          <Routes>
            <Route path="/auth/login" exact element={<Login/>} />
            <Route path="/auth/register" exact element={<Register/>} />
          </Routes>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
