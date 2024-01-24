import { Component, JSX } from "solid-js";
import Nav from "../header/Nav";
import Logo  from "../header/Logo";

const Header: Component = (): JSX.Element => {
    return (
        <header class="py-2 border-b-2">
            <div class="container flex justify-between items-center mx-auto">
                <Logo />
                <Nav />
            </div>
        </header>
    )
}

export default Header;