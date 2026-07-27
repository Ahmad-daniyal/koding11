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
<h1>Tentang SMA Negeri Harapan Bangsa</h1>
<p>SMA Negeri Harapan Bangsa adalah sekolah menengah atas yang berfokus pada pendidikan berkualitas dan pengembangan karakter siswa.</p>
</main>

${footer}
`;
    }
}