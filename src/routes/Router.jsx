import { BrowserRouter, Route, Routes} from "react-router-dom";

import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Layout from "../components/layouts/Layout";
import GroupPersons from "../pages/GroupPersons";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}> 
                    <Route path="/" element={<Home/>} />
                    <Route path="about" element={<GroupPersons />} />
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;