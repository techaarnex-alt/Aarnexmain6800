import { useEffect, useState } from "react";

const items = [
  "DevOps",
  "ERP Integration",
  "Data Analytics",
  "IT Consulting",
  "Digital Transformation",
  "Cybersecurity"
];

export default function Ticker() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid rgba(0,200,255,.15)",
        borderBottom: "1px solid rgba(0,200,255,.15)",
        padding: "18px 0",
      }}
    >
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "ticker 18s linear infinite",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            style={{
              padding: "0 2rem",
              whiteSpace: "nowrap",
              fontWeight: "700",
              color:
                i % items.length === active ? "#00e5ff" : "#7a8ca5",
              textShadow:
                i % items.length === active
                  ? "0 0 15px #00e5ff"
                  : "none",
              transition: "all .5s ease",
            }}
          >
            {item} &nbsp; ◆
          </span>
        ))}
      </div>
    </div>
  );
}
