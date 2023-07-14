const PropertyFeatures = () => {
  const propertyFeatures = [
    {
      id: 1,
      list: ["Aire acondicionado", "Parrilla", "Lavarropas", "Gimnasio", "Garage"],
    },
    {
      id: 2,
      list: ["Microondas", "Televisión por cable", "Jardín", "Heladera", "Sauna"],
    },
    {
      id: 3,
      list: ["Piscina", "WiFi", "Energía Solar", "Agua potable", "Drenajes"],
    },
  ];
  return (
    <>
      {propertyFeatures.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-4" key={item.id}>
          <ul className="order_list list-inline-item">
            {item.list.map((val, i) => (
              <li key={i}>
                <span className="flaticon-tick"></span>
                {val}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default PropertyFeatures;
