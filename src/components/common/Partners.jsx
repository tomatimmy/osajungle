const Partners = () => {
  const partnersImages = ["6", "6", "6", "6", "6"];
  return (
    <>
      {partnersImages.map((val, i) => (
        <div className="col-sm-6 col-md-4 col-lg" key={i}>
          <div className="our_partner">
            <img
              className="img-fluid"
              src={`assets/images/partners/${val}.png`}
              alt="1.png"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Partners;