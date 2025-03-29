import { BrowserRouter, Route, Routes} from "react-router-dom";

import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Layout from "../components/layouts/Layout";
import GroupPersons from "../pages/GroupPersons";
import FormAdopt from "../components/functionals/FormAdopt"

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}> 
                    <Route index element={<Home/>} />
                    <Route path="about" element={<GroupPersons />} />
                    <Route path="adopt" element={<FormAdopt />} />
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
