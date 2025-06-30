import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Publication from "../pages/Publication";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Research from "../pages/Research";
import Life from "../pages/Life";
import People from "../pages/People";
import Services from "../pages/Services";


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = { <Home /> } path = "/" />
                <Route element = { <Publication /> } path = "/Publication" />
                <Route element = { <About /> } path = "/About" />
                <Route element = { <Contact /> } path = "/Contact" />
                <Route element = { <Research /> } path = "/Research" />
                <Route element = { <Life /> } path = "/Life" />
                <Route element = { <People /> } path = "/People" />
                <Route element = { <Services /> } path = "/Services" />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
