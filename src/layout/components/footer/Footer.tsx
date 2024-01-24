import { Component, JSX } from "solid-js";

const Footer: Component = (): JSX.Element => {
    return (
        <footer class="py-2 border-t-2">
            <div class="container flex justify-between items-center mx-auto">
                <p>Footer</p>
            </div>
        </footer>
    )
};
 
export default Footer;