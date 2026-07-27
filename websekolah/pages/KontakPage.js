import { Component } from "../components/component.js";
import { Navbar } from "../components/navbar.js";  
import { Footer } from "../components/footer.js";

export class KontakPage extends Component {
  render() {
    const navbar = new Navbar({ activePage: "kontak" }).render();
    const footer = new Footer().render();

    return `
${navbar}
<main>
<h1>Kontak Kami</h1>
<p>Jika Anda memiliki pertanyaan atau ingin menghubungi kami, silakan gunakan informasi kontak di bawah ini:</p>
<p>email:daniyalhamim@gmail.com</p>
<p>telepon : 08123456789</p>
</main>
${footer}
`;
  }
}