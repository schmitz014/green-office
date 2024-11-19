import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return(
    <>
      <div className="flex flex-col min-h-screen gap-5">
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
      </div>
    </>
  );
}