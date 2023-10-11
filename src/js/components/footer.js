class Footer extends HTMLElement {
    constructor() {
        super();

        let htmlDisplay = `
        <footer id="footer" class="text-center text-white">
            <div  class = container>
                <div class="row">
                    <div class="col-lg-12 col-sm-12 col-xs-12 text-center p-3">
                    © 2020 Copyright:
                    <p>MDBootstrap.com</p>
                    </div>
                </div>
            </div>
        </footer>
        `
        this.innerHTML = htmlDisplay
    }
}


customElements.define("footer-list", Footer);