import { Component } from "./component.js";
export class Footer extends Component {
render() {
const tahun = new Date().getFullYear();
return `
<hr/>
<footer>
<small>&copy; ${tahun} ${this.props.schoolName} — Semua hak dilindungi.</small>
</footer>
`;
}
}