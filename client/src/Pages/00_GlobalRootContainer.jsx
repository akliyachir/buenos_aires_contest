import "./00_GlobalRootContainer.css";
import RootLayout from "./01_RootLayout";
import SideManuMain from "../components/01_MainLayout/02_SideManuMain/SideManuMain";
import MenuToggleContextProvider from "../context/MenuContext";
import WidthPageContextProvider from "../context/WidthPageContext";
import { Outlet } from "react-router-dom";

export default function GlobalRootContainer() {
  return (
    <WidthPageContextProvider>
      <MenuToggleContextProvider>
        <div className="GlobalRootContainer">
          <SideManuMain />
          <RootLayout />
          <Outlet />
        </div>
      </MenuToggleContextProvider>
    </WidthPageContextProvider>
  );
}
