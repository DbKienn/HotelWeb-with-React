import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Detail_Infor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fomatGeneral.css";
// ------------Data Detail---------------
const DetailData = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};
const DetailInformation = () => {
  return (
    // ---------- import title & information detail-------------
    <div className="detail-container">
      <h3 className="detail-title-head">{DetailData.name}</h3>
      <div className="detail-title">
        <div className="detail-title-head">
          <FontAwesomeIcon icon={faLocationDot} />
          <span> {DetailData.address}</span>
        </div>
        {/* -----------button boooking------------ */}
        <button className="btn btn-detail-booking">Reserve or Book Now!</button>
      </div>
      <h4 className="detail-title-head detail-distance">
        {DetailData.distance}
      </h4>
      <h4 className="detail-title-head detail-price">{DetailData.price}</h4>
      {/* ---------- import image from data-------------- */}
      <div className="detail-img-gird">
        <img className="image-detail" src={DetailData.photos[0]}></img>
        <img className="image-detail" src={DetailData.photos[1]}></img>
        <img className="image-detail" src={DetailData.photos[2]}></img>
        <img className="image-detail" src={DetailData.photos[3]}></img>
        <img className="image-detail" src={DetailData.photos[4]}></img>
        <img className="image-detail" src={DetailData.photos[5]}></img>
      </div>
      {/* ------------- import title & content form data----------- */}
      <div className="detail-content-grid">
        <div className="detail-content-grid-1">
          <h3 className="detail-title-content">{DetailData.title}</h3>
          <p className="detail-title-content">{DetailData.description}</p>
        </div>
        <div className="detail-content-grid-2">
          <h3 id="detail-title-price" className="detail-content-price">
            Perfect for a 9-night stay
          </h3>
          <p className="detail-content-price">
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </p>
          <div className="detail-content-price detail-price">
            <h3>${DetailData.nine_night_price}</h3>
            <p>(9 nights)</p>
          </div>
          {/* ---------- button detail----------- */}
          <button className="btn-2 btn-detail-booking">
            Reserve or Book Now!
          </button>
        </div>
      </div>
    </div>
  );
};
export default DetailInformation;
