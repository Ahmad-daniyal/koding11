import { Component } from "../components/component.js";
import { Navbar } from "../components/navbar.js";
import { Footer } from "../components/footer.js";

export class AboutPage extends Component {
    render() {
        const navbar = new Navbar({ activePage: "about" }).render();
        const footer = new Footer().render();

        return `   
${navbar}
<main>
<h1>Tentang SMK Yadika konoha</h1>
<p>SMK Yadika konoha adalah sekolah menengah kejuruan yang berfokus pada <BR>pendidikan berkualitas dan pengembangan karakter siswa.</p>
</main>

${footer}
`;
    }
}