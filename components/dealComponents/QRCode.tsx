import { useQRCode } from "next-qrcode";
import { useEffect, useState } from "react";
export default function QRCode() {
  const [countDown, setCountDown] = useState(30);
  const { SVG } = useQRCode();

  //   QR Code Timer - Need to attach refresh to QR code using time value once deal data is passed as object
  const runCountDown = () => {
    if (countDown !== 0) {
      for (let i = countDown; i !== 0 - 1; i--) {
        setTimeout(() => {
          setCountDown(countDown - 1);
        }, 1000);
      }
    }
    if (countDown === 0) {
      setCountDown(30);
    }
  };

  useEffect(() => {
    runCountDown();
  }, [countDown]);

  return (
    <>
      <div className="flex flex-col items-center pt-20 prose">
        <h2 className="mb-5">This QR code expires in:</h2>
        <h3>{countDown}</h3>
        <div className="bg-primary rounded-3xl p-3 overflow-hidden">
          <SVG
            text="https://wedlake.dev"
            options={{
              margin: 2,
              width: 200,
              color: {
                dark: "#262626",
                light: "#FFD750",
              },
            }}
          />
        </div>
      </div>
    </>
  );
}
