
import "../pages/styles/rp-bootstrap.css"

const Topbar = () => {
  return (
    <>
      <div className="d-flex justify-content-between px-5 align-item-center top ">
        <div className="d-flex  pt-2">
          <p className="mx-5 ">
            <li className="fa fa-map-marker-alt text-primary me-2"></li>
            123 Street, New York, USA
          </p>
          <p>
            <li className="far fa-clock text-primary me-2"></li>Mon - Fri :
            09.00 AM - 09.00 PM
          </p>
        </div>
        <div className="d-flex  pt-2">
          <p className="mx-4">
            <li className="fa fa-phone-alt text-primary me-2"></li>+012 345 6789
          </p>
          <div className="mx-2 me-4">
            <a href="" className="me-2">
              <li className="fab fa-facebook-f"></li>
            </a>
            <a href="" className="me-2">
              <li className="fab fa-twitter"></li>
            </a>
            <a href="" className="me-2">
              <li className="fab fa-linkedin-in"></li>
            </a>
            <a href="" className="me-2">
              <li className="fab fa-instagram"></li>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
