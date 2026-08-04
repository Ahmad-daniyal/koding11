import { Component } from "../components/component.js";
import { Navbar } from "../components/navbar.js";
import { Footer } from "../components/footer.js";

export class AboutPage extends Component {
    render() {
        const navbar = new Navbar({ activePage: "about", schoolName: this.props.schoolName }).render();
        const footer = new Footer({ schoolName: this.props.schoolName }).render();

        return `   
${navbar}
<main>
<h1>Tentang ${this.props.schoolName}</h1>
<p>${this.props.schoolName} adalah sekolah menengah kejuruan yang berfokus pada <BR>pendidikan berkualitas dan pengembangan karakter siswa.</p>
</main>

${footer}
`;
    }
}