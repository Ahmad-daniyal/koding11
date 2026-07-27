import { Component } from "./components/component.js";
import { Navbar } from "./components/navbar.js";
import { Footer } from "./components/footer.js";
import { HomePage } from "./pages/HomePage.js";
import { AboutPage } from "./pages/AboutPage.js";
import { KontakPage } from "./pages/KontakPage.js";

const routes = 
{
    "/home": HomePage,
    "/about": AboutPage,
    "/kontak": KontakPage,
}

export function router() {
    let path = window.location.hash.replace("#", "") || "/home";
    
    if (path === "/") {
        path = "/home";
    }
    
    const PageClass = routes[path] || HomePage;

    const page = new PageClass();
    document.getElementById("app").innerHTML = page.render();
}