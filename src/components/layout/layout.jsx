import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="container m-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
