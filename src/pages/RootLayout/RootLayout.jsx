import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex gap-1 min-h-screen ">
      <Sidebar />
      <main className="max-w-7xl flex-1 mx-auto min-h-screen  lg:px-1 ">
        {/* {children} */}

        <Outlet></Outlet>
        </main>
    </div>
  );
}

export default RootLayout;