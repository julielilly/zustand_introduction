"use client";

import useCounter from "@/stores/useCounter";

const DisplayCounter = ({ counter_text }) => {
  const counter = useCounter((state) => state.counter);
  return (
    <div className="text-5xl">
      {counter_text} {counter}
    </div>
  );
};

export default DisplayCounter;
