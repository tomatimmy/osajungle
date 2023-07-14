import Link from "next/link";

const CopyrightFooter = () => {
  const menuItems = [
    { id: 1, name: "Home", routeLink: "/" },
    { id: 2, name: "Propiedades", routeLink: "/" },
    { id: 3, name: "Nosotros", routeLink: "/" },
    { id: 4, name: "Galería", routeLink: "/" },
    { id: 5, name: "Blog", routeLink: "/" },
    { id: 6, name: "Contact", routeLink: "/contact" },
  ];

  return (
    <div className="row">
      <div className="col-lg-6 col-xl-6">
        <div className="footer_menu_widget">
          <ul>
            {menuItems.map((item) => (
              <li className="list-inline-item" key={item.id}>
                <Link href={item.routeLink}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-6">
        <div className="copyright-widget text-end">
          <p>
            &copy; {new Date().getFullYear()} por{" "}
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              MV Development
            </a>
            . Todos los derechos reservados.
          </p>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyrightFooter;
