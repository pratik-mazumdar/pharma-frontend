import { useEffect, useState } from "react";

export const Loading = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "< / >";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gray-100 text-gray-900 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
      </div>

      <div className="w-[200px] h-[2px] bg-gray-400 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-white shadow-[0_0_15px_#f3f4f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
