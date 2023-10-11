class Header extends HTMLElement {
    constructor() {
        super();

        let htmlDisplay = `
        <header>
            <div class="container">
                <nav>
                    <a href="/" data-link>Home</a>
                    <a href="/products" data-link>Products</a>
                    <a href="/blog" data-link>Blog</a>
                    <a href="/user" data-link>User</a>
                </nav>
            </div>
        </header>
        `
        this.innerHTML = htmlDisplay
    };

}


customElements.define("header-list", Header);