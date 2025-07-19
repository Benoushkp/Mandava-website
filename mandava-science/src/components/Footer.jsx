import { Link, useLocation } from 'react-router-dom';
import '../styles/footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const partnerLogos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_of_India_logo.svg/1600px-Government_of_India_logo.svg.png"},
  { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWHarAwAQbegFiP6_g4Dh8BSxBrEHXc8J0iLvJM5GAae7lFyf5KAbVXv2iLSD2FY-j7_-RTvOZP7O2k01vgvTifi0wHun6g7s1kEHJsQtUNMDuI3KSr2JRbfhUOnL9ClAiEvd5viFsJMrx/s1600/IMG-20181210-WA0095.jpg", alt: "Government of Tamil Nadu" },
  { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjg4f4WF596Dm-Oacws0lomI5gQGxyRVMzANwWbQKc6FhcLKUS5fNPRxZdE_Pg2mkNeyWOplywqIyaHmzL3jz-xoX1B44KZLxcmWPDuLDdr3_XNojEwi20r-k0ZW1E72zbDgCg_GOTxfSQ/s1600/karnataka_govt_logo.png", alt: "Government of Karnataka" },
  { src: "https://www.vhv.rs/dpng/d/444-4449404_government-of-uttar-pradesh-hd-png-download.png", alt: "Government of Uttar Pradesh" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Seal_of_the_Government_Of_Punjab_%28Black_On_White%29.svg", alt: "Government of Punjab" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Seal_of_the_National_Capital_Territory_of_Delhi.svg/803px-Seal_of_the_National_Capital_Territory_of_Delhi.svg.png", alt: "Government of Delhi" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Government_of_Kerala_Logo.svg/1200px-Government_of_Kerala_Logo.svg.png", alt: "Government of Kerala" },
  { src: "https://getlogovector.com/wp-content/uploads/2019/12/niti-aayog-logo-vector.png" },
  { src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWHarAwAQbegFiP6_g4Dh8BSxBrEHXc8J0iLvJM5GAae7lFyf5KAbVXv2iLSD2FY-j7_-RTvOZP7O2k01vgvTifi0wHun6g7s1kEHJsQtUNMDuI3KSr2JRbfhUOnL9ClAiEvd5viFsJMrx/s1600/IMG-20181210-WA0095.jpg", alt: "TN State Planning Commission" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Seal_of_the_Government_Of_Punjab_%28Black_On_White%29.svg/1200px-Seal_of_the_Government_Of_Punjab_%28Black_On_White%29.svg.png", alt: "Punjab Development Commission" },
  { src: "https://hitsncchits.weebly.com/uploads/6/0/0/7/60078799/3123962_orig.jpg"},
  { src: "https://i.pinimg.com/474x/77/1c/d3/771cd34469dba434d76e54db2631585d.jpg", alt: "Bangalore University" },
  { src: "https://cs.christuniversity.in/softex/resources/img/christ_university_Black.png"},
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-IlQCoM8OqVnfqKYf7MCV61nzJgTabEleA&s" },
  { src: "https://dsca.edu.in/wp-content/uploads/2025/01/DS-logo-01-01.png", alt: "Dayananda Sagar Institutions" },
  { src: "https://upload.wikimedia.org/wikipedia/en/d/d6/RVU_logo.png" },
  { src: "https://clubrunner.blob.core.windows.net/00000002427/PhotoAlbum/branding/Mark-of-Excellence-4992.png", alt: "Rotary International" },
  { src: "https://i.pinimg.com/736x/30/8b/39/308b39166ab85b227ea981e4073083a6.jpg"},
  { src: "https://www.pngkey.com/png/full/261-2612709_political-biased-to-transparent-the-hindu-logo.png" },
  { src: "https://pbs.twimg.com/profile_images/1154640759888347136/rEQVuzy2_200x200.png", alt: "The People Society Of Hosur" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XXdLND1otiDR-LWMGnrbN9uVPP7KdTf-Og&s", alt: "Law and Justice Research Foundation" },
  { src: "https://i.pinimg.com/736x/3e/d9/1e/3ed91e9834ffc146235fff9606eed929.jpg" }
];

const Footer = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Partners Section */}
        <div className="footer-partners">
          <h4>Our Partners</h4>
          <div className="partner-marquee">
            <div className="marquee-track">
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div className="partner-item" key={index}>
                  <img src={logo.src} alt={logo.alt || "Partner"} className="partner-logo" loading="lazy" />
                  <span className="partner-name">{logo.alt || ""}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="footer-columns">
          <div className="footer-block">
            <h4>About</h4>
            <Link to="/who-we-are" className={isActive('/who-we-are') ? 'active-footer-link' : ''}>Who We Are</Link>
            <Link to="/beliefs" className={isActive('/beliefs') ? 'active-footer-link' : ''}>Beliefs</Link>
            <Link to="/projects" className={isActive('/projects') ? 'active-footer-link' : ''}>Projects</Link>
          </div>

          <div className="footer-block">
            <h4>Engage</h4>
            <Link to="/participate" className={isActive('/participate') ? 'active-footer-link' : ''}>Participate</Link>
            <Link to="/donate" className={isActive('/donate') ? 'active-footer-link' : ''}>Donate</Link>
            <Link to="/gallery" className={isActive('/gallery') ? 'active-footer-link' : ''}>Gallery</Link>
          </div>

          <div className="footer-block">
            <h4>Legal</h4>
            <Link to="/podcasts" className={isActive('/podcasts') ? 'active-footer-link' : ''}>Podcasts</Link>
            <Link to="/policies" className={isActive('/policies') ? 'active-footer-link' : ''}>Policies</Link>
            <Link to="/contact-us" className={isActive('/contact-us') ? 'active-footer-link' : ''}>Contact Us</Link>
          </div>

          <div className="footer-block">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://instagram.com" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://twitter.com" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href="https://youtube.com" target="_blank" aria-label="YouTube" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Mandava Science Foundation. All rights reserved.</p>
          <div className="footer-credit">
  Designed by Archdeacon.
  <a href="https://ben-portfolio-pi.vercel.app/#/contact" target="_blank" rel="noopener noreferrer">
    Enquire Here
  </a>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
