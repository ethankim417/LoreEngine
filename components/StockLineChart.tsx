type StockLineChartProps = {
  values: number[];
  positive: boolean;
  height?: number;
  strokeWidth?: number;
  label?: string;
  endLabel?: string;
};

export function StockLineChart({
  values,
  positive,
  height = 56,
  strokeWidth = 2,
  label = "Price trend",
  endLabel
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
  const gradientId = `chart-${positive ? "up" : "down"}-${values.join("-").replaceAll(".", "_")}`;
  const stroke = positive ? "#9ff5c8" : "#fda4af";
  const guide = positive ? "rgba(159, 245, 200, 0.12)" : "rgba(253, 164, 175, 0.12)";
  const endpoint = points[points.length - 1] ?? { x: width - padding, y: padding };

  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={`0 0 ${width} ${height}`}
      className="stock-chart h-full w-full overflow-visible"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.11" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.28, 0.56, 0.84].map((ratio) => (
        <line
          key={ratio}
          x1={padding}
          x2={width - padding}
          y1={height * ratio}
          y2={height * ratio}
          stroke={guide}
          strokeWidth="0.8"
          vectorEffect="non-scaling-stroke"
        />
      ))}
      <polygon points={area} fill={`url(#${gradientId})`} />
      <line
        className="stock-chart-end-marker"
        x1={endpoint.x}
        x2={endpoint.x}
        y1={endpoint.y}
        y2={height - padding}
        stroke={stroke}
        strokeWidth="0.9"
        vectorEffect="non-scaling-stroke"
      />
      <polyline
        points={line}
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        opacity="0.82"
        vectorEffect="non-scaling-stroke"
      />
      <circle
        className="stock-chart-endpoint"
        cx={endpoint.x}
        cy={endpoint.y}
        r="1.9"
        fill={stroke}
        opacity="0.82"
      />
      {endLabel ? (
        <text
          className="stock-chart-end-label"
          x={Math.max(endpoint.x - 3, padding)}
          y={Math.max(endpoint.y - 5, 8)}
          textAnchor="end"
          fill={stroke}
          fontSize="7"
          fontWeight="800"
        >
          {endLabel}
        </text>
      ) : null}
    </svg>
  );
}
