import Sidebar from "../Sidebar/Sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <main className="max-w-7xl flex-1 mx-auto py-4 px-2">{children}</main>
    </div>
  );
}

export default RootLayout;