import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import UserDetail from "./pages/UserDitail";
import Service from "./pages/Servicee/Service";
import General from "./pages/general/General";
import ProductDetail from "./pages/ProductDetail";
import CatDetail from "./pages/CatDetail";
import Info from "./pages/Info/Info";
import CategoryProducts from "./pages/CategoryProducts/CategoryProducts";

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            { path: "service", element: <Service /> },
            { path: "general", element: <General /> },
            { path: "/user/:id", element: <UserDetail /> },
            { path: "/product/:id", element: <ProductDetail /> },
            { path: "/cat/:id", element: <CatDetail /> },
            { path: "info", element: <Info /> },
            { path: "/category/:id", element: <CategoryProducts /> }, // Маршрут для CategoryProducts
        ],
    },
]);
