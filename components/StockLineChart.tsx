type StockLineChartProps = {
  values: number[];
  positive: boolean;
  height?: number;
  strokeWidth?: number;
  label?: string;
};

export function StockLineChart({
  values,
  positive,
  height = 56,
  strokeWidth = 2.5,
  label = "Price trend"
}: StockLineChartProps) {
  const width = 180;
  const padding = 6;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(max - min, 1);
  const points = values.map((value, index) => {
    const x = padding + (index / Math.max(values.length - 1, 1)) * (width - padding * 2);
    const y = padding + (1 - (value - min) / range) * (height - padding * 2);

    return { x, y };
  });
  const line = points.map((point) => `${point.x},${point.y}`).join(" ");
  const area = [
    `${points[0]?.x ?? padding},${height - padding}`,
    ...points.map((point) => `${point.x},${point.y}`),
    `${points[points.length - 1]?.x ?? width - padding},${height - padding}`
  ].join(" ");
  const gradientId = `chart-${positive ? "up" : "down"}-${values.join("-")}`;
  const stroke = positive ? "#54f0a9" : "#fb7185";

  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={`0 0 ${width} ${height}`}
      className="h-full w-full overflow-visible"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.28" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#${gradientId})`} />
      <polyline
        points={line}
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
      />
      <circle
        cx={points[points.length - 1]?.x ?? width - padding}
        cy={points[points.length - 1]?.y ?? padding}
        r="3"
        fill={stroke}
      />
    </svg>
  );
}
