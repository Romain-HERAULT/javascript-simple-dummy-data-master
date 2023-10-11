import "../components/counter.js";
import "../components/header.js";
import "../components/footer.js";

export default () => /*html*/`
    <header-list></header-list>
    <div class="container">
        <h1>Home</h1>
        <p>Simple click counter</p>
        <click-counter></click-counter>
        </div>
    <footer-list></footer-list>
`;