import PopupContainer from "./PopupContainer";
import Image from "next/image";
import PizzaImage from "../../public/pizzaStock.jpg";
export default function BusinessInfo(props: { onClose?: any }) {
  return (
    <>
      <div className="prose">
        <div className="flex items-center">
          <Image
            src={PizzaImage}
            width={50}
            height={50}
            alt="business logo"
            className="rounded-full w-10 h-10 mr-3"
          />
          <h2 className="my-0">Business Name</h2>
        </div>
        <p className="my-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem eos eaque velit esse itaque, earum doloribus assumenda
          officiis libero vero consequuntur, neque adipisci? Fugit veritatis
          maxime recusandae repellendus, molestiae praesentium?
        </p>
      </div>
    </>
  );
}
