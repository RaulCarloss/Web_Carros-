import { Outlet } from "react-router-dom";
import { Header } from "../header/header.component";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
