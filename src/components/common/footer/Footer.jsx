import Link from "next/link";
import Social from "./Social";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
        <div className="footer_about_widget">
          <h4>Nosotros</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ut delectus officia facilis modi ex, est perspiciatis nostrum laboriosam eos.
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_qlink_widget">
          <h4>Menú rápido</h4>
          <ul className="list-unstyled">
            <li>
              <Link href="/">
                <a>Preguntas Frecuentes</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Términos y condiciones</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Propiedades</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h4>Contactanos</h4>
          <ul className="list-unstyled">
            <li>
              <a href="mailto:info@osajungle.com">info@osajungle.com</a>
            </li>
            <li>
              <a href="#">Calle falsa 123, Puerto Jimenez</a>
            </li>
            <li>
              <a href="#">8004, Península de Osa.</a>
            </li>
            <li>
              <a href="tel:+4733378901">+506 234-567-6789</a>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_social_widget">
          <h4>Síguenos</h4>
          <ul className="mb30">
            <Social />
          </ul>
          <h4>Subscribirse</h4>
          <SubscribeForm />
        </div>
      </div>
    </>
  );
};

export default Footer;
