import Navbar from "../navbar/Navbar";
import Banners from "./banners/Banners";
import HomeSlider from "./homeslider/HomeSlider";
import banner1 from "../../assets/banner/banner-01.jpg";
import banner2 from "../../assets/banner/banner-02.jpg";
import banner3 from "../../assets/banner/banner-03.jpg";
import Filters from "./filters/Filters";

type BannerData = {
  Bimage: string;
  Btitle: string;
  Bdescription: string;
};

const DUMMY_BANNER: BannerData[] = [
  {
    Bimage: banner1,
    Btitle: "Woman",
    Bdescription: "Spring 2018",
  },
  {
    Bimage: banner2,
    Btitle: "Men",
    Bdescription: "Spring 2018",
  },
  {
    Bimage: banner3,
    Btitle: "Accessories",
    Bdescription: "New Trend",
  },
];

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HomeSlider />
      <div className="flex container itemscenter justify-around">
        {DUMMY_BANNER.map((values) => (
          <div key={values.Btitle}>
            <Banners
              Bimage={values.Bimage}
              Btitle={values.Btitle}
              Bdescription={values.Bdescription}
            />
          </div>
        ))}
      </div>
      <Filters />
    </div>
  );
};

export default Home;
