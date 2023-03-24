import Image from "next/image";

type FeatureImageCardProps = {
  image: string;
  businessName: string;
};

export default function FeatureImageCard(props: FeatureImageCardProps) {
  return (
    <div className="w-full h-48 mb-4">
      <Image
        src={props.image}
        alt={`${props.businessName} cover image`}
        width={400}
        height={200}
        className="w-full h-full object-center object-cover rounded-xl"
      />
    </div>
  );
}
