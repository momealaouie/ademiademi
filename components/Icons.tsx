type IconProps = {
  className?: string;
};

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ArrowDown({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path d="M10 3v14m0 0 5-5m-5 5-5-5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
