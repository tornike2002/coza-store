import { Fragment } from "react";
import { HomeProductsTypes } from "../data/Products";
import Products from "../data/Products";
import { Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import HomeProductsModal from "./HomeProductsModal";
const HomeProducts: React.FC = () => {
  return (
    <Fragment>
      <div className="container flex justify-around items-center flex-wrap gap-9">
        {Products.map((item: HomeProductsTypes) => {
          return (
            <div key={item.ID}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.ProductImage} />}
              >
                <h2 className="text-productName">{item.ProductName}</h2>
                <h2 className="font-Poppins font-light text-xs text-navlinksHover">
                  ${item.ProductPrice}
                </h2>
                <h2 className="font-Poppins font-bold text-sm text-productName">
                  Rating: {item.ProductRating}{" "}
                  <StarFilled className="text-yellow-300" />
                </h2>
                <HomeProductsModal />
              </Card>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default HomeProducts;
