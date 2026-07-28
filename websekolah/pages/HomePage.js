import { Component } from "../components/component.js";
import { Navbar } from "../components/navbar.js";
import { Footer } from "../components/footer.js";

export class HomePage extends Component {
  render() {
    const navbar = new Navbar({ activePage: "home" }).render();
    const footer = new Footer().render();
    
    return `    
${navbar}
<main>
<h1>Selamat Datang di SMK Yadika konoha</h1>
<p>welkom</p>
 <p>jadi disini kita lagi bikin website turorial guys, <br> ceritanyamah initeh website sekolah snh jadi stay toon terus ya buta perkembangan nya ges
 </P>
</main>
${footer}
`;
  }
}