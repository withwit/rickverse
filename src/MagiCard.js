import { Image } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import "./MagiCard.css";

function MagiCard({ name, status, species, image }) {
  return (
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.2}
    >
      <Image src={image} roundedCircle />
      <div className="inner-element">
        <div>{name}</div>
        <div>{(status, species)}</div>
      </div>
    </Tilt>
  );
}

export default MagiCard;
