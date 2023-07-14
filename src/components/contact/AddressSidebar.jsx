import Social from "../common/footer/Social";

const AddressSidebar = () => {
  return (
    <div className="contact_localtion">
      <h4>Contactanos</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis
        libero eleifend ornare. habitasse platea dictumst.
      </p>
      <div className="content_list">
        <h5>Dirección</h5>
        <p>
          2301 Calle 3, Puerto Jimenez, <br />
          3008
        </p>
      </div>
      <div className="content_list">
        <h5>Teléfono</h5>
        <p>(506) 333-2321</p>
      </div>
      <div className="content_list">
        <h5>Mail</h5>
        <p>info@osajungle.com</p>
      </div>
      <div className="content_list">
        <h5>Skype</h5>
        <p>osajungle.com</p>
      </div>
      <h5>Síguenos</h5>
      <ul className="contact_form_social_area">
        <Social />
      </ul>
    </div>
  );
};

export default AddressSidebar;
