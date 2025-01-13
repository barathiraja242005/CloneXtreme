import { Col, Row } from "react-bootstrap";
import "../styles/rp-bootstrap.css";
import CountUp from "react-countup";
import {
  ButttonComp,
  DefalutContainer,
  HomeBox,
  SpecialFont,
} from "./Home.style";
const Home = () => {
  return (
    <>
    
      <HomeBox>
        <Row className="g-0 ">
          <Col lg={6} className="pt-6 bg-info ">
            <div className="p-5">
              <p className=" fw-bolder fh-5">
                Good Health Is The <br /> Root Of All <br /> Heppiness
              </p>
              <Row className="pt-5">
                {HomeLeftWord("Expert Doctors", 123)}
                {HomeLeftWord("Medical Stuff", 1234)}
                {HomeLeftWord("Total Patients", 12345)}
              </Row>
              <h6 className="text-white">
                Healthxperts are always committed to create a healthy society
                free of diseases and disorders 24/7*365 days
              </h6>
              <SpecialFont>
                It is health that is the real wealth and not pieces of gold and
                silver
              </SpecialFont>
            </div>
          </Col>
          <Col lg={6} className="bg-danger mx-auto">
            <img
              src="public/assets/homeBannerRight.jpg"
              alt=""
              className="img-fluid w-100 h-100"
            />
          </Col>
        </Row>
      </HomeBox>
      <DefalutContainer >
        <Row>
          <Col lg={6} className="">
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
            
          </Col>
          <Col lg={6} className="">
            <div className="mt-5">
              <ButttonComp>About Us</ButttonComp>
              <h1 className="mt-3">
                Why You Should Trust Us? Get Know About Us!
              </h1>
              <div className="pe-5 pt-3">
              <p className="">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p>
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum. Clita clita labore, dolor
                duo nonumy clita sit at, sed sit sanctus dolor eos.
              </p>
              </div>
              <ul className="pl-0">
                <p>
                  <li className="far fa-check-circle text-primary me-3 "></li>
                  Quality health care
                </p>
                <p>
                  <li className="far fa-check-circle text-primary me-3"></li>
                  Only Qualified Doctors
                </p>
                <p>
                  <li className="far fa-check-circle text-primary me-3"></li>
                  Medical Research Professionals
                </p>
              </ul>
              <button className="px-5 border rounded-pill py-3 text-white bg-primary">
                Read More
              </button>
            </div>
          </Col>
        </Row>
      </DefalutContainer>

      <DefalutContainer>
        <div className="text-center">
          <ButttonComp className="">Services</ButttonComp>
          <h1 className="pt-3">Health Care Solutions</h1>
        </div>
        <div>
            <div>
              
            </div>
        </div>
      </DefalutContainer>
    
    </>
  );
};

export default Home;

function HomeLeftWord(title: string, count: number) {
  return (
    <>
      <Col sm={4}>
        <div className="border-light border-start ps-4 pt-1 ">
          <CountUp end={count} duration={2} className="fs-2  fw-bold" />
          <p className="f fw-5">{title}</p>
        </div>
      </Col>
    </>
  );
}
