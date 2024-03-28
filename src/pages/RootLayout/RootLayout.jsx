import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <main className="max-w-7xl flex-1 mx-auto  lg:px-2">
        {/* {children} */}

        <Outlet></Outlet>
        </main>
    </div>
  );
}

export default RootLayout;