import { Col, Row } from "react-bootstrap";
import "../styles/rp-bootstrap.css";
import CountUp from "react-countup";
import { HomeBox } from "./Home.style";
const Home = () => {
  return (
    <>
    
      <HomeBox>
        <Row className="g-0 ">
          <Col lg={6} className="pt-6 bg-info ">
            <div className="p-5">
              <p className=" fw-bolder fh-5">Good Health Is The <br /> Root Of All <br /> Heppiness</p>
              <Row className="pt-5">
                {HomeLeftWord("Expert Doctors", 123)}
                {HomeLeftWord("Medical Stuff", 1234)}
                {HomeLeftWord("Total Patients", 12345)}
              </Row>
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
    </>
  );
};

export default Home;

function HomeLeftWord(title: string, count: number) {
  return (
    <>
      <Col sm={4}>
        <div className="border-light border-start ps-4 pt-1 ">
          <CountUp 
            end={count}
            duration={2}
            className="fs-2  fw-bold"
          />
          <p className="f fw-5">{title}</p>
        </div>
      </Col>
    </>
  );
}
