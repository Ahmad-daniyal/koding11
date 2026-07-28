import { Component } from "./component.js";
export class Navbar extends Component {
render() {
const active = this.props.activePage;
const linkClass = (page) => (page === active ? "active" : "");
return `
<nav>
<h2>SMK Yadika konoha</h2>
<a class="${linkClass('home')}" href="#/home">Home</a> |
<a class="${linkClass('about')}" href="#/about">About</a> |
<a class="${linkClass('kontak')}" href="#/kontak">Kontak</a>
</nav>
<hr/>
`;
}
}