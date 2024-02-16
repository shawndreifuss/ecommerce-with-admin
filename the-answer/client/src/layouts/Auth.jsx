import React from "react";
// components
// import FooterSmall from "components/Footers/FooterSmall.js";

// views
import Login from "../pages/auth/Login.jsx";
// import Register from "../pages/auth/Register.jsx";

export default function Auth() {
  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <Login />
          {/* <FooterSmall absolute /> */}
        </section>
      </main>
    </>
  );
}
