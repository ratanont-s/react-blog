import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="bg-slate-50 w-screen h-svh flex flex-col py-4 overflow-hidden">
      <main className="container mx-auto px-4 h-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
