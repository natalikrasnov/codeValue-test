import { Route, Routes, Navigate } from "react-router-dom";
import {  List } from "../components";
import { NotFound } from "../pages/NotFound.component";

export function MainRouter() {
    return (
        <Routes>
             <Route path="/" element={<Navigate replace  to="/products" /> } />
            <Route path="/products/*" element={<List /> } />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}