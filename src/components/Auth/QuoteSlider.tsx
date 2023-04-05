import { useState, FC } from "react";

const QuoteSlider: FC = () => {
  const quotes = [
    "CrossVal is a SaaS platform that automates the process of financial modeling for early-stage companies, enterprises, and investment funds",
    "CrossVal has the ability to build highly accurate models across industries and sectors with relative ease ",
  ];
  const [currentIndex, setCurrent] = useState<number>(0);

  const onClick = (index: number) => {
    setCurrent(index);
  };
  return (
    <div>
      <div className="h-28 md:h-40 lg:h-36 w-4/5 mx-auto pb-4">
        <h4 className="text-white text-center font-medium text-2xl">
          {quotes[currentIndex]}
        </h4>
      </div>
      <div className="w-1/6 pt-6 text-center mx-auto slider-dots-wrapper">
        {quotes.map((item, i) => (
          <span
            data-quote={item}
            key={i}
            className={i == currentIndex ? "active" : ""}
            onClick={() => onClick(i)}
          />
        ))}
      </div>
    </div>
  );
};
export default QuoteSlider;
