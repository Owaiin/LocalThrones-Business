import { useEffect, useState } from "react";
import { useZxing } from "react-zxing";
import Modal from "../utility/Modal";
import Button from "../utility/Button";
import { useRouter } from "next/navigation";

type QRResult =
  | {
      dealId: string;
      dealName: string;
      generatedTime: Date | string;
      userId: string;
      businessId: string;
    }
  | string;

export default function QRScanner(props: { onComplete: () => void }) {
  const [result, setResult] = useState('{"default": "default"}');
  const [showModal, setShowModal] = useState(false);
  const [showModalFail, setShowModalFail] = useState(false);
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
    onError(error) {
      //   console.log(error);
    },
  });

  //   Set QR Data as JSON
  const data = JSON.parse(result);

  // When result changes, run QRCode checks
  useEffect(() => {
    console.log(data);

    if (!data.default) {
      checkIntializeTime(data.generatedTime);
    }
  }, [result]);

  // validates when the QR Code was Generated. If not generated within 60seconds, the code is invalid and can't be used for the deal. -- Prevents use of expired/old deals
  const checkIntializeTime = (initializedString: string) => {
    const currentTime = new Date().getTime();
    const initializeTime = Date.parse(initializedString);
    console.log(
      "currentTime: " + currentTime,
      "initializedTime: " + initializeTime
    );
    if (currentTime - 60000 < initializeTime) {
      console.log("Valid Code");
      setShowModal(true);
    } else {
      setShowModalFail(true);
      console.log("Invalid Code");
    }
  };

  return (
    <>
      <div className="px-5 h-screen flex items-center justify-center">
        <video className="rounded-3xl" ref={ref} />
      </div>
      {showModal && (
        <Modal>
          <h2 className=" text-base-100">Success</h2>
          <p>{data.dealId}</p>
          <p>{data.dealName}</p>
          <Button onClick={props.onComplete} text="Accept Deal" />
          <Button
            onClick={props.onComplete}
            customProps="ml-5 bg-warning border-warning"
            text="Reject Deal"
          />
        </Modal>
      )}
      {showModalFail && (
        <Modal>
          <h2 className=" text-base-100">This Code is Invalid</h2>
          <p className="font-medium">
            This code is either expired or for a different location. Please
            check the customer is using the correct code
          </p>
          <Button onClick={props.onComplete} text="Close" />
        </Modal>
      )}
    </>
  );
}
