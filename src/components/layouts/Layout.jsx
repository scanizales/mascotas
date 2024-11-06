import Header from "../basics/Header";
import Footer from "../basics/Footer";
import { Outlet } from "react-router-dom";

//Plantilla página
const Layout = () => {
    return (
        <>
         <Header/>
            <Outlet/>
         <Footer/>
        </>
    );
}

export default Layout;
