import { Carousel } from "antd";
import slider1 from "../../../assets/slider/slide-01.jpg";
import slider2 from "../../../assets/slider/slide-02.jpg";
import slider3 from "../../../assets/slider/slide-03.jpg";

const slide1: React.CSSProperties = {
  height: "600px",
  backgroundImage: `url(${slider1})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const slide2: React.CSSProperties = {
  height: "600px",
  backgroundImage: `url(${slider2})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const slide3: React.CSSProperties = {
  height: "600px",
  backgroundImage: `url(${slider3})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const HomeSlider: React.FC = () => (
  <div className="container">
    <Carousel autoplay>
      <div>
        <div
          style={slide1}
          className="flex justify-end items-start px-10 py-10 flex-col font-Poppins gap-3"
        >
          <h2 className="text-lg text-navlinks">Women Collection 2018</h2>
          <h1 className="font-Playfair text-3xl sm:text-6xl">NEW SEASON</h1>
          <button
            className="px-7 py-3 rounded-md bg-burger text-white font-Poppins
          hover:bg-black transition-all duration-500 ease"
          >
            SHOP NOW
          </button>
        </div>
      </div>
      <div>
        <div
          style={slide2}
          className="flex justify-end items-start px-10 py-10 flex-col font-Poppins gap-3"
        >
          <h2 className="text-lg text-navlinks">Men New-Season</h2>
          <h1 className="font-Playfair text-3xl sm:text-6xl">JACKETS & COATS</h1>
          <button
            className="px-7 py-3 rounded-md bg-burger text-white font-Poppins
          hover:bg-black transition-all duration-500 ease"
          >
            SHOP NOW
          </button>
        </div>
      </div>
      <div>
        <div
          style={slide3}
          className="flex justify-end items-start px-10 py-10 flex-col font-Poppins gap-3"
        >
          <h2 className="text-lg text-navlinks">Men Collection 2018</h2>
          <h1 className="font-Playfair text-3xl sm:text-6xl">NEW ARRIVALS</h1>
          <button
            className="px-7 py-3 rounded-md bg-burger text-white font-Poppins
          hover:bg-black transition-all duration-500 ease"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </Carousel>
  </div>
);

export default HomeSlider;
