import "./Footer.css";
import "../fomatGeneral.css";
// ----------- data form json file---------------
const DataFooter = [
  {
    col_number: 1,
    col_values: [
      "Countries",
      "Regions",
      "Cities",
      "Districts",
      "Airports",
      "Hotels",
    ],
  },
  {
    col_number: 2,
    col_values: [
      "Homes",
      "Apartments",
      "Resorts",
      "Villas",
      "Hostels",
      "Guest houses",
    ],
  },
  {
    col_number: 3,
    col_values: [
      "Unique places to stay",
      "Reviews",
      "Unpacked: Travel articles",
      "Travel communities",
      "Seasonal and holiday deals",
    ],
  },
  {
    col_number: 4,
    col_values: [
      "Car rental",
      "Flight Finder",
      "Restaurant reservations",
      "Travel Agents",
    ],
  },
  {
    col_number: 5,
    col_values: [
      "Curtomer Service",
      "Partner Help",
      "Careers",
      "Sustainability",
      "Press center",
      "Safety Resource Center",
      "Investor relations",
      "Terms & conditions",
    ],
  },
];

const Footer = () => {
  return (
    // import data footer
    <div className="footer">
      {DataFooter.map((column) => (
        <div key={column.col_number}>
          <ul>
            {column.col_values.map((value) => (
              <li key={value}>
                <a href="#" className="footer-content">
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Footer;
