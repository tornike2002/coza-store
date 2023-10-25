import { Fragment, useState } from "react";
import { Button, Modal, QRCode } from "antd";

const downloadQRCode = () => {
  const canvas = document
    .getElementById("myqrcode")
    ?.querySelector<HTMLCanvasElement>("canvas");
  if (canvas) {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.download = "QRCode.png";
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};

const HomeProductsModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Fragment>
      <>
        <Button
          type="primary"
          onClick={showModal}
          className="font-Poppins border border-black text-productName
        font-bold mt-3"
        >
          Show QR
        </Button>
        <Modal
          title="Download QR Code or Scan QR Code"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={{ className: "text-black border border-gray-300" }}
        >
          <div className="flex items-center justify-around flex-wrap gap-3">
            <div id="myqrcode">
              <QRCode
                value="https://ant.design/"
                bgColor="#fff"
                style={{ marginBottom: 16 }}
              />
              <Button type="primary" className="text-black border border-gray-300" onClick={downloadQRCode}>
                Download
              </Button>
            </div>{" "}
            <div id="myqrcode">
              <QRCode
                value="https://ant.design/"
                bgColor="#fff"
                style={{ marginBottom: 16 }}
              />
              <Button type="primary" className="text-black border border-gray-300" onClick={downloadQRCode}>
                Download
              </Button>
            </div>
          </div>
        </Modal>
      </>
    </Fragment>
  );
};

export default HomeProductsModal;
