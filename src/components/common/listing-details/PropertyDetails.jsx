const PropertyDetails = () => {
  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              ID Propiedad : <span>HZ27</span>
            </p>
          </li>
          <li>
            <p>
              Precio : <span>$130,000</span>
            </p>
          </li>
          <li>
            <p>
              Tamaño propiedad : <span>82M2</span>
            </p>
          </li>
          <li>
            <p>
              Año : <span>2016</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Habitaciones : <span>4</span>
            </p>
          </li>
          <li>
            <p>
              Baños : <span>2</span>
            </p>
          </li>
          <li>
            <p>
              Garage : <span>1</span>
            </p>
          </li>
          <li>
            <p>
              Tamaño Garage : <span>10M2</span>
            </p>
          </li>
        </ul>
      </div>
      {/* End .col */}

      <div className="col-md-6 col-lg-6 col-xl-4">
        <ul className="list-inline-item">
          <li>
            <p>
              Tipo de Propiedad : <span>Apartamento</span>
            </p>
          </li>
          <li>
            <p>
              Estado : <span>En Venta</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PropertyDetails;
