import DisplayCounter from "@/components/DisplayCounter";

const Page = () => {
  return (
    <div className="flex justify-center items-center h-[100svh]">
      <DisplayCounter counter_text="I counted to:" />
    </div>
  );
};

export default Page;
