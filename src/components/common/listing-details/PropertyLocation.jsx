const PropertyLocation = () => {
  return (
    <>
      <div className="thumb">
        <div className="h400" id="map-canvas">
          <div className="gmap_canvas ">
            <iframe
              title="map"
              className="gmap_iframe"
              src=""
            ></iframe>
          </div>
        </div>
        <div className="overlay_icon">
          <a href="#">
            <img
              className="map_img_icon"
              src="/assets/images/header-logo.png"
              alt="header-logo.png"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default PropertyLocation;
