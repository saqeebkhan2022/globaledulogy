"use client";
import { useEffect, useState } from "react";

export default function Stats() {
  const stats = [
    { number: 15000, suffix: "+", label: "Counselling Done" },
    { number: 15000, suffix: "+", label: "Successful Admission" },
    { number: 1200, suffix: "+", label: "Association" },
    { number: 25000, suffix: "+", label: "Students Community" },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto px-6">
        <div className="bg-[#EA4E14] rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ number, suffix, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // animation duration in ms
    const stepTime = Math.max(Math.floor(duration / number), 20);

    const timer = setInterval(() => {
      start += Math.ceil(number / (duration / stepTime));
      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm md:text-base opacity-90">{label}</div>
    </div>
  );
}
