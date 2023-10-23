import { Fragment } from "react";
import { Card } from "antd";
import { Image } from "antd";

type BannerProps = {
  Bimage: string;
  Btitle: string;
  Bdescription: string;
};
const { Meta } = Card;
const Banners: React.FC<BannerProps> = (props) => {
  const { Bimage, Btitle, Bdescription } = props;

  return (
    <Fragment>
      <div className="container my-5 border border-black rounded-md">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<Image width={240} src={Bimage} />}
        >
          <Meta title={Btitle} description={Bdescription} />
        </Card>
      </div>
    </Fragment>
  );
};

export default Banners;
