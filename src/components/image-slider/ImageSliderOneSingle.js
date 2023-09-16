import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ImageSliderOneSingle = ({ data }) => {
  return (
    <div className="single-image" style={{marginRight:"25px",marginLeft:"10px"}}>
      <Link to={process.env.PUBLIC_URL + data.link}>
        <img src={process.env.PUBLIC_URL + data.image} alt="" />
      </Link>
     <div>
     <h3 style={{fontSize:"15px",marginBottom:"15px",marginTop:"20px",lineHeight:"24px",fontWeight:"bold"}}>{data.title}</h3>
     <p style={{fontSize: "16px",lineHeight: "1.38",marginBottom: "14px"}}>{data.subtitle}</p>
     <div><a href="/wellness" style={{textDecoration: "underline"}}>READ MORE</a></div>
     </div>
    </div>
    
  );
};

ImageSliderOneSingle.propTypes = {
  data: PropTypes.shape({})
};

export default ImageSliderOneSingle;
