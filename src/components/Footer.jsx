import { FaFacebook, FaWhatsapp, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <h3>Code Academy</h3>

      <div className="footer-icons">
        <a href="https://facebook.com" target="_blank">
          <FaFacebook />
        </a>

        <a href="https://wa.me/9639XXXXXXX" target="_blank">
          <FaWhatsapp />
        </a>

        <a href="https://t.me/username" target="_blank">
          <FaTelegram />
        </a>
      </div>

      <span>Sweida, Syria</span>
    </div>
  );
}

export default Footer;