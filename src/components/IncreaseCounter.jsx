"use client";

import useCounter from "@/stores/useCounter";

const IncreaseCounter = () => {
  const incrCounter = useCounter((state) => state.incrCounter);

  return (
    <button onClick={incrCounter} className="py-2 px-6 text-background bg-green-700 ">
      +
    </button>
  );
};

export default IncreaseCounter;
