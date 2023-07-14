import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="start_partner tac-smd">
          <h2>Encuentra la propiedad de tus sueños</h2>
          <p>Somos el socio estrátegico necesario para encontrar eso que estás buscando</p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="parner_reg_btn text-right tac-smd">
          <Link href="/listing-grid-v1">
            <a className="btn btn-thm2">Propiedades</a>
          </Link>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CallToAction;
