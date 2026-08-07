type ArrowIconProps = {
  direction?: "up-right" | "down-right" | "down";
};

export default function ArrowIcon({ direction = "up-right" }: ArrowIconProps) {
  const paths = {
    "up-right": <path d="M5 11 11 5M6 5h5v5" />,
    "down-right": <path d="m5 5 6 6M11 6v5H6" />,
    down: <path d="M8 3v10m-4-4 4 4 4-4" />,
  };

  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[direction]}
    </svg>
  );
}
