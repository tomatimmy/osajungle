import { useState } from "react";

const PropertyDescriptions = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <p className="mb25">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex provident itaque libero. Reiciendis quibusdam deserunt omnis cupiditate pariatur minus atque, voluptatum nihil at in. Quidem dolorem sequi at corporis et aperiam deleniti velit placeat quaerat iure, voluptatem veritatis vel nisi magnam libero fuga voluptas! Odio fugit minima quibusdam dolores molestiae! 
      </p>
      <p className={click ? "gpara second_para white_goverlay mt10 mb10" : ""}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam doloribus est mollitia asperiores expedita, assumenda soluta, deserunt veniam autem dicta. Necessitatibus saepe, eveniet iure, inventore temporibus possimus qui esse quisquam repellat perspiciatis, molestiae unde maiores similique modi blanditiis! Architecto, consequuntur. Repudiandae nemo at molestiae quos doloremque sequi corrupti debitis maiores delectus, ea ipsum ab deserunt ipsam assumenda quasi laudantium id magnam fuga officiis dignissimos recusandae inventore quia. Et quaerat harum cumque sint alias eveniet dolorem velit maxime delectus magnam?
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <p className="mt10 mb10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam doloribus est mollitia asperiores expedita, assumenda soluta, deserunt veniam autem dicta. Necessitatibus saepe, eveniet iure, inventore temporibus possimus qui esse quisquam repellat perspiciatis, molestiae unde maiores similique modi blanditiis! Architecto, consequuntur. Repudiandae nemo at molestiae quos doloremque sequi corrupti debitis maiores delectus, ea ipsum ab deserunt ipsam assumenda quasi laudantium id magnam fuga officiis dignissimos recusandae inventore quia. Et quaerat harum cumque sint alias eveniet dolorem velit maxime delectus magnam?
          </p>
          <p className="mt10 mb10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus totam doloribus est mollitia asperiores expedita, assumenda soluta, deserunt veniam autem dicta. Necessitatibus saepe, eveniet iure, inventore temporibus possimus qui esse quisquam repellat perspiciatis, molestiae unde maiores similique modi blanditiis! Architecto, consequuntur. Repudiandae nemo at molestiae quos doloremque sequi corrupti debitis maiores delectus, ea ipsum ab deserunt ipsam assumenda quasi laudantium id magnam fuga officiis dignissimos recusandae inventore quia. Et quaerat harum cumque sint alias eveniet dolorem velit maxime delectus magnam?
          </p>
        </div>
      </div>
      <p className="overlay_close">
        <a
          className="text-thm fz14"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={handleClick}
        >
          Mostrar más <span className="flaticon-download-1 fz12"></span>
        </a>
      </p>
    </>
  );
};

export default PropertyDescriptions;
