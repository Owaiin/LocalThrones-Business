import Container from "../utility/Container";
import { AiOutlineScan } from "react-icons/ai";
import QRScanner from "../dealComponents/QRScanner";
import { useState } from "react";

export default function BusinessMobileNav() {
  const [showQRScanner, setShowQRScanner] = useState(false);
  return (
    <>
      <nav className="absolute w-full bottom-0 py-5">
        <Container>
          <div className="flex justify-center text-5xl text-white">
            <AiOutlineScan
              onClick={() => setShowQRScanner(true)}
              className="bg-primary p-1 rounded-full text-black shadow-md shadow-black"
            />
          </div>
        </Container>
      </nav>
      {showQRScanner && (
        <QRScanner onComplete={() => setShowQRScanner(false)} />
      )}
    </>
  );
}
