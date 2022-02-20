import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main";
import Menu from "../pages/Menu";
import Catalog from "../pages/Catalog";
import Contacts from "../pages/Contacts";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/main" element={<Main/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
        </div>
    );
};

export default Router;