import "./SearchList.css";
/// -------------- data from json file -------------------
const DataSearch = [
  {
    name: "Tower Street Apartments",
    distance: "500m",
    tag: "Free airport taxi",
    type: "Entire studio • 1 bathroom • 21m² 1 full bed",
    description: "Studio Apartment with Air conditioning",
    free_cancel: true,
    price: 112,
    rate: 8.9,
    rate_text: "Excellent",
    image_url: "./images/hotel_search_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    distance: "200m",
    tag: "Free Breakfast",
    type: "Entire studio • 2 bathroom • 100m² 2 full bed",
    description: "Studio Apartment",
    free_cancel: true,
    price: 140,
    rate: 9.3,
    rate_text: "Exceptional",
    image_url: "./images/hotel_search_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    distance: "100m",
    tag: "Free Parking",
    type: "1 bathroom • 51m² 2 full bed",
    description: "Hotel in Lisbon",
    free_cancel: false,
    price: 99,
    rate: 8.8,
    rate_text: "Excellent",
    image_url: "./images/hotel_search_3.jpg",
  },
];

//-----------page navigation--------------
const SubmitBtmDetail = (event) => {
  event.preventDefault();
  window.location.replace("./detail");
};
const SearchList = () => {
  return (
    <div className="search-list-container">
      <div>
        {/* ------------- import information hotel by data--------- */}
        <div className="search-list-grid">
          <img className="img-search-list" src={DataSearch[0].image_url}></img>
          <div className="search-list-content">
            <div className="search-list-grid-1">
              <a className="search-content" href="#">
                {DataSearch[0].name}
              </a>
              <p className="search-content">
                {DataSearch[0].distance} from center
              </p>
              <p className="search-content search-list-tag">
                {DataSearch[0].tag}
              </p>
              <p className="search-content  search-list-description">
                <strong>{DataSearch[0].description}</strong>
              </p>
              <p className="search-content">{DataSearch[0].type}</p>
              <p className="search-content search-list-cancel">
                {DataSearch[0].free_cancel == true ? "Free cancellation" : ""}
              </p>
            </div>
            <div className="search-list-grid-2">
              <div className="search-list-rate">
                <h4>{DataSearch[0].rate_text}</h4>
                <p className="point-rate-search-list">{DataSearch[0].rate}</p>
                <div className=" search-list-price">
                  <h3 className="search-content">${DataSearch[0].price}</h3>
                  <p className="search-content"> Includes taxes and fees</p>
                  {/* ----------- button navigate to details page--------- */}
                  <button
                    className="btn btn-search-list"
                    onClick={SubmitBtmDetail}
                  >
                    See availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------- import information hotel by data--------- */}
        <div className="search-list-grid">
          <img className="img-search-list" src={DataSearch[1].image_url}></img>
          <div className="search-list-content">
            <div className="search-list-grid-1">
              <a className="search-content" href="#">
                {DataSearch[1].name}
              </a>
              <p className="search-content">
                {DataSearch[1].distance} from center
              </p>
              <p className="search-content search-list-tag">
                {DataSearch[1].tag}
              </p>
              <p className="search-content  search-list-description">
                <strong>{DataSearch[1].description}</strong>
              </p>
              <p className="search-content">{DataSearch[1].type}</p>
              <p className="search-content search-list-cancel">
                {DataSearch[1].free_cancel == true ? "Free cancellation" : ""}
              </p>
            </div>
            <div className="search-list-grid-2">
              <div className="search-list-rate">
                <h4>{DataSearch[1].rate_text}</h4>
                <p className="point-rate-search-list">{DataSearch[1].rate}</p>
                <div className=" search-list-price">
                  <h3 className="search-content">${DataSearch[1].price}</h3>
                  <p className="search-content"> Includes taxes and fees</p>
                  {/* ----------- button navigate to details page--------- */}
                  <button
                    className="btn btn-search-list"
                    onClick={SubmitBtmDetail}
                  >
                    See availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------- import information hotel by data--------- */}
        <div className="search-list-grid">
          <img className="img-search-list" src={DataSearch[2].image_url}></img>
          <div className="search-list-content">
            <div className="search-list-grid-1">
              <a className="search-content" href="#">
                {DataSearch[2].name}
              </a>
              <p className="search-content">
                {DataSearch[2].distance} from center
              </p>
              <p className="search-content search-list-tag">
                {DataSearch[2].tag}
              </p>
              <p className="search-content  search-list-description">
                <strong>{DataSearch[2].description}</strong>
              </p>
              <p className="search-content">{DataSearch[2].type}</p>
              <p className="search-content search-list-cancel">
                {DataSearch[2].free_cancel == true ? "Free cancellation" : ""}
              </p>
            </div>
            <div className="search-list-grid-2">
              <div className="search-list-rate">
                <h4>{DataSearch[2].rate_text}</h4>
                <p className="point-rate-search-list">{DataSearch[2].rate}</p>
                <div className=" search-list-price">
                  <h3 className="search-content">${DataSearch[2].price}</h3>
                  <p className="search-content"> Includes taxes and fees</p>
                  {/* ----------- button navigate to details page--------- */}
                  <button
                    className="btn btn-search-list"
                    onClick={SubmitBtmDetail}
                  >
                    See availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchList;
