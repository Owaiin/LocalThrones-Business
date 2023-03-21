import Image from "next/image";
import stockImage from "../../public/pizzaStock.jpg";

export default function DealCard(props: { onClick?: React.MouseEventHandler }) {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <Image
            src={stockImage}
            alt="stock image"
            width={400}
            height={200}
            className=" h-36 object-cover "
          />
        </figure>
        <div className="card-body p-3">
          <h2 className="card-title">Buy One, Get One Free!</h2>
          <p>Pizza Mikes</p>
          <div className="card-actions justify-end">
            <button onClick={props.onClick} className="btn btn-primary">
              Access Deal
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
