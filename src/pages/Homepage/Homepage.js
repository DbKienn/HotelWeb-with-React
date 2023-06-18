import "./Homepage.css";
import "../fomatGeneral.css";
// --------- DATA HOMEPGAE ----------------
const DataHomePage = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];
// --------------- DATA HOTEL TYPE --------------
const DataHotelType = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];
// -------------- DATA HOTEL LIST -----------------
const DataHotelList = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];
const Homepage = () => {
  return (
    // ---------------SHOW CITY FROM DATAHOMEPAGE -------------
    <div className="homepage-container">
      <div className="city-grid">
        <div className="information-city">
          <img className="img-city" src={DataHomePage[0].image}></img>
          <h2 className="information">{DataHomePage[0].name}</h2>
          <h3 className="information">{DataHomePage[0].subText}</h3>
        </div>
        <div className="information-city">
          <img className="img-city" src={DataHomePage[1].image}></img>
          <h2 className="information">{DataHomePage[1].name}</h2>
          <h3 className="information">{DataHomePage[1].subText}</h3>
        </div>
        <div className="information-city">
          <img className="img-city" src={DataHomePage[2].image}></img>
          <h2 className="information">{DataHomePage[2].name}</h2>
          <h3 className="information">{DataHomePage[2].subText}</h3>
        </div>
      </div>
      {/* ---------SHOW HOTEL TYPE FROM DATAHOTELTYPE ----------  */}
      <div className="list-hotel-container">
        <h2 className="title-hotel">Browse by property type</h2>
        <div className="type-hotel">
          <div>
            <img className="img-hotel-type" src={DataHotelType[0].image}></img>
            <h2 className="title-list-hotel">{DataHotelType[0].name}</h2>
            <p className="content-list-hotel">
              {DataHotelType[0].count} Hotels
            </p>
          </div>
          <div>
            <img className="img-hotel-type" src={DataHotelType[1].image}></img>
            <h2 className="title-list-hotel">{DataHotelType[1].name}</h2>
            <p className="content-list-hotel">
              {DataHotelType[1].count} Hotels
            </p>
          </div>
          <div>
            <img className="img-hotel-type" src={DataHotelType[2].image}></img>
            <h2 className="title-list-hotel">{DataHotelType[2].name}</h2>
            <p className="content-list-hotel">
              {DataHotelType[2].count} Hotels
            </p>
          </div>
          <div>
            <img className="img-hotel-type" src={DataHotelType[3].image}></img>
            <h2 className="title-list-hotel">{DataHotelType[3].name}</h2>
            <p className="content-list-hotel">
              {DataHotelType[3].count} Hotels
            </p>
          </div>
          <div>
            <img className="img-hotel-type" src={DataHotelType[4].image}></img>
            <h2 className="title-list-hotel">{DataHotelType[4].name}</h2>
            <p className="content-list-hotel">
              {DataHotelType[4].count} Hotels
            </p>
          </div>
        </div>
        {/* ----------------------------------HOTEL LIST -------------- */}
        <h2 className="title-hotel">Homes guests love</h2>
        <div className="type-hotel">
          <div className="hotel-list">
            {/* ---IMPORT IMAGE--- */}
            <img
              className="img-hotel-type img-hotel-list"
              src={DataHotelList[0].image_url}
            ></img>{" "}
            <br></br>
            {/* --- NAME HOTEL --- */}
            <a href="./detail" className="content-list-hotel content-links">
              {DataHotelList[0].name}
            </a>
            {/*  */}
            <p className="content-list-hotel">{DataHotelList[0].city}</p>
            <h3 className="content-list-hotel">
              Starting from ${DataHotelList[0].price}
            </h3>
            <div className="list-hotel-rate">
              <h3 className="content-list-hotel point-rate">
                {DataHotelList[0].rate}
              </h3>
              <h3 className="content-list-hotel">{DataHotelList[0].type}</h3>
            </div>
          </div>
          <div className="hotel-list">
            <img
              className="img-hotel-type img-hotel-list"
              src={DataHotelList[1].image_url}
            ></img>
            <br></br>
            <a href="./detail" className="content-list-hotel content-links">
              {DataHotelList[1].name}
            </a>
            <p className="content-list-hotel">{DataHotelList[1].city}</p>
            <h3 className="content-list-hotel">
              Starting from ${DataHotelList[1].price}
            </h3>
            <div className="list-hotel-rate">
              <h3 className="content-list-hotel point-rate">
                {DataHotelList[1].rate}
              </h3>
              <h3 className="content-list-hotel">{DataHotelList[1].type}</h3>
            </div>
          </div>
          <div className="hotel-list">
            <img
              className="img-hotel-type img-hotel-list"
              src={DataHotelList[2].image_url}
            ></img>
            <br></br>
            <a href="./detail" className="content-list-hotel content-links">
              {DataHotelList[2].name}
            </a>
            <p className="content-list-hotel">{DataHotelList[2].city}</p>
            <h3 className="content-list-hotel">
              Starting from ${DataHotelList[2].price}
            </h3>
            <div className="list-hotel-rate">
              <h3 className="content-list-hotel point-rate">
                {DataHotelList[2].rate}
              </h3>
              <h3 className="content-list-hotel">{DataHotelList[2].type}</h3>
            </div>
          </div>
          <div className="hotel-list">
            <img
              className="img-hotel-type img-hotel-list"
              src={DataHotelList[3].image_url}
            ></img>
            <br></br>
            <a href="./detail" className="content-list-hotel content-links">
              {DataHotelList[3].name}
            </a>
            <p className="content-list-hotel">{DataHotelList[3].city}</p>
            <h3 className="content-list-hotel">
              Starting from ${DataHotelList[3].price}
            </h3>
            <div className="list-hotel-rate">
              <h3 className="content-list-hotel point-rate">
                {DataHotelList[3].rate}
              </h3>
              <h3 className="content-list-hotel">{DataHotelList[3].type}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
