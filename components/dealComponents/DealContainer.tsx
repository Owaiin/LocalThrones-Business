import DealCard from "./DealCard";
import { useRouter } from "next/navigation";
export default function DealContainer() {
  const router = useRouter();
  return (
    <>
      <div className="mx-auto p-2 bg-neutral rounded-xl grid gap-5">
        <DealCard onClick={() => router.push("/deal/dealPage")} />
        <DealCard onClick={() => router.push("/deal/dealPage")} />
        <DealCard onClick={() => router.push("/deal/dealPage")} />
        <DealCard onClick={() => router.push("/deal/dealPage")} />
        <DealCard onClick={() => router.push("/deal/dealPage")} />
        <DealCard onClick={() => router.push("/deal/dealPage")} />
      </div>
    </>
  );
}
