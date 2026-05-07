import { Star } from "lucide-react";

type TickerProps = {
  items: readonly string[];
};

export function Ticker({ items }: TickerProps) {
  const doubled = [...items, ...items];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="ticker-item">
            {item}
            <Star className="ticker-star" fill="currentColor" strokeWidth={0} />
          </span>
        ))}
      </div>
    </div>
  );
}
