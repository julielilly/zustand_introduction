import IncreaseCounter from "@/components/IncreaseCounter";
import DisplayCounter from "@/components/DisplayCounter";
import Link from "next/link";
import DecreaseCounter from "@/components/DecreaseCounter";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[100svh]">
      <DisplayCounter counter_text="Count:" />

      <div className="flex gap-4">
        <DecreaseCounter />
        <IncreaseCounter />
      </div>

      <Link href={`/count/`}>
        <div className="pt-4 text-blue-700 underline">Check how much I counted to</div>
      </Link>
    </div>
  );
}
