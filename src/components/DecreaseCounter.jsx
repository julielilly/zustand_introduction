"use client";

import useCounter from "@/stores/useCounter";

const DecreaseCounter = () => {
  const decrCounter = useCounter((state) => state.decrCounter);

  return (
    <button onClick={decrCounter} className="py-2 px-6 text-background bg-green-700 ">
      -
    </button>
  );
};

export default DecreaseCounter;
