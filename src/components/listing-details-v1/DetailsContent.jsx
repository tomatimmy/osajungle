import Comments from "../blog-details/Comments";
import Ratings from "../blog-details/Ratings";
import ReviewBox from "../blog-details/ReviewBox";
import AdditionalDetails from "../common/listing-details/AdditionalDetails";
import Attachments from "../common/listing-details/Attachments";
import FloorPlans from "../common/listing-details/FloorPlans";
import PropertyDescriptions from "../common/listing-details/PropertyDescriptions";
import PropertyDetails from "../common/listing-details/PropertyDetails";
import PropertyFeatures from "../common/listing-details/PropertyFeatures";
import PropertyItem from "../common/listing-details/PropertyItem";
import PropertyLocation from "../common/listing-details/PropertyLocation";
import PropertyVideo from "../common/listing-details/PropertyVideo";
import WalkScore from "../common/listing-details/WalkScore";
import WhatsNearby from "../common/listing-details/WhatsNearby";

const DetailsContent = () => {
  return (
    <>
      <div className="listing_single_description">
        <div className="lsd_list">
          <PropertyItem />
        </div>
        {/* End .lsd_list */}

        <h4 className="mb30">Descripción</h4>
        <PropertyDescriptions />
      </div>
      {/* End .listing_single_description */}

      <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Detalles de la propiedad</h4>
          </div>
          <PropertyDetails />
        </div>
      </div>
      {/* End .additional_details */}

{/*       <div className="additional_details">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb15">Additional details</h4>
          </div>
          <AdditionalDetails />
        </div>
      </div> */}
      {/* End .additional_details */}

      <div className="property_attachment_area">
        <h4 className="mb30">Brochure</h4>
        <div className="iba_container style2">
          <Attachments />
        </div>
      </div>
      {/* End .property_attachment_area */}

      <div className="application_statics mt30">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb10">Especiales</h4>
          </div>
          {/* End .col */}

          <PropertyFeatures />
        </div>
      </div>
      {/* End .feature_area */}

      <div className="application_statics mt30">
        <h4 className="mb30">
          Ubicación{" "}
          <small className="float-end">
            Calle 123, Puerto Jimenez, 8004
          </small>
        </h4>
        <div className="property_video p0">
          <PropertyLocation />
        </div>
      </div>
      {/* End .location_area */}

      <div className="application_statics mt30">
        <h4 className="mb30">Planos</h4>
        <div className="faq_according style2">
          <FloorPlans />
        </div>
      </div>
      {/* End .floor_plane */}

      <div className="shop_single_tab_content style2 mt30">
        <PropertyVideo />
      </div>
      {/* End property-video  */}

      {/* <div className="walkscore_area mt30">
        <WalkScore />
      </div> */}
      {/* End walkscore_area */}

      <div className="whats_nearby mt30">
        <h4 className="mb10">Cercanías</h4>
        <WhatsNearby />
      </div>
      {/* End what's nearby area */}
      
      
      {/* End review and comment area area */}
    </>
  );
};

export default DetailsContent;
