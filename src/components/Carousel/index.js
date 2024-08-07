import Slider from "react-slick";
import "./carousel.css";

function Carousel({ children }) {
    var settings = {
        dots: false,
        infinite: false,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        //slidesToShow: 1,
        slidesToScroll: 1,  
    };

    return (
        <div>
            <Slider {...settings}>
                { children }
            </Slider>
        </div>
    );
}

export default Carousel;