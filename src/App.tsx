import { Outlet } from "react-router";

function App() {
  return (
    <div className="min-h-screen flex flex-col container mx-auto px-6 ">
      {/* <Navbar /> */}
      <div className="grow-1">
        {" "}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
