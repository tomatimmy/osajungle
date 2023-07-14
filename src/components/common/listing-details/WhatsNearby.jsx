import Ratings from "../../blog-details/Ratings";

const WhatsNearby = () => {
  const nearbyContent = [
    {
      id: 1,
      styleClass: "",
      title: " Escuelas",
      icon: "flaticon-college-graduation",
      singleItem: [
        {
          id: 1,
          name: "Escuela 1",
          miles: "3.13",
          totalReview: "8895",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 2,
          name: " Escuela 2",
          miles: "4.66",
          totalReview: "7475",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 3,
          name: "Escuela 3",
          miles: "3.31",
          totalReview: "3579",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      styleClass: "style2",
      title: "Hospitales",
      icon: "flaticon-heartbeat",
      singleItem: [
        {
          id: 1,
          name: "Hospital 1",
          miles: "3.13",
          totalReview: "8895",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 2,
          name: "Hospital 2",
          miles: "4.66",
          totalReview: "7475",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 3,
          name: "Hospital 3",
          miles: "3.31",
          totalReview: "3579",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
      ],
    },
    {
      id: 3,
      styleClass: "style3",
      title: "Transporte",
      icon: "flaticon-front-of-bus",
      singleItem: [
        {
          id: 1,
          name: "Transporte 1",
          miles: "3.13",
          totalReview: "8895",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 2,
          name: "Transporte 2",
          miles: "4.66",
          totalReview: "7475",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
        {
          id: 3,
          name: "Transporte 3",
          miles: "3.31",
          totalReview: "3579",
          ratings: (
            <>
              <Ratings />
            </>
          ),
        },
      ],
    },
  ];

  return (
    <>
      {nearbyContent.map((item) => (
        <div
          className={`education_distance mb15 ${item.styleClass}`}
          key={item.id}
        >
          <h5>
            <span className={`${item.icon}`}></span> {item.title}
          </h5>

          {item.singleItem.map((val) => (
            <div className="single_line" key={val.id}>
              <p className="para">
                {val.name} <span>({val.miles} km)</span>
              </p>
              {/* <ul className="review">
                <Ratings />
                <li className="list-inline-item">
                  <span className="total_rive_count">
                    {val.totalReview} reviews
                  </span>
                </li>
              </ul> */}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default WhatsNearby;
