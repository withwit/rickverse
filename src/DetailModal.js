import "./DetailModal.css";
import { Modal, Container, Row, Col, Card } from "react-bootstrap";
import "antd/dist/antd.css";
import Tilt from "react-parallax-tilt";
import MaleIcon from "./assets/male.png";
import AliveIcon from "./assets/alive.png";
import AlienIcon from "./assets/alien.png";
import DeadIcon from "./assets/dead.png";
import OriginIcon from "./assets/origin.png";
import UnknownIcon from "./assets/unknown.png";

function DetailsModal(info) {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to left,  rgba(255,255,255, 1),rgba(242, 97, 255, 0.30),rgba(61, 255, 61, 0.4)), 
     url(${info.image})`,
    backgroundSize: "cover",
    width: "18rem",
  };

  return (
    <Modal {...info} size="lg" centered>
      {" "}
      {
        <Tilt
          tiltEnable={false}
          glareEnable={true}
          glareMaxOpacity={0.5}
          glareColor="black"
          glarePosition="top"
        >
          <div className="inner-element-modal">
            <Container fluid={true}>
              <Row>
                <div style={backgroundStyle}></div>

                <Col className="DetailCard">
                  <Card.Text className="Detail-Title">{info?.name}</Card.Text>
                  <Row>
                    <Col>
                      <Card.Text>
                        {info?.status == "Alive" ? info?.status : "Dead"}
                        {info?.status == "Alive" ? (
                          <img className="Alive-Icon" src={AliveIcon} />
                        ) : (
                          <img className="Dead-Icon" src={DeadIcon} />
                        )}
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text>
                        {info?.gender == "Male" ? info?.gender : ""}
                        {info?.gender == "Male" ? (
                          <img className="Male-Icon" src={MaleIcon} />
                        ) : (
                          ""
                        )}
                      </Card.Text>
                    </Col>
                  </Row>
                  <Card.Text>
                    <a className="Detail-secondary">Location: </a>
                    {info?.location?.name}
                  </Card.Text>

                  <Card.Text>
                    <a className="Detail-secondary">Origin: </a>
                    {info?.origin?.name}
                    {info?.origin?.name == "unknown" ? (
                      <img className="Unknown-Icon" src={UnknownIcon} />
                    ) : (
                      <img className="Origin-Icon" src={OriginIcon} />
                    )}
                  </Card.Text>

                  <Card.Text>
                    <a className="Detail-secondary">Species: </a>
                    {info?.species}
                    {info?.species == "Human" ? (
                      ""
                    ) : (
                      <img className="Alien-Icon" src={AlienIcon} />
                    )}
                  </Card.Text>
                </Col>
              </Row>
            </Container>
          </div>
        </Tilt>
      }
    </Modal>
  );
}

export default DetailsModal;
