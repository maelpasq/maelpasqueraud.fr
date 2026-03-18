type HeroBadgeProps = {
  text: string;
};

export function HeroBadge({ text }: HeroBadgeProps) {
  const circleRadius = 118;
  const pathLength = Math.round(2 * Math.PI * circleRadius);
  const textLength = pathLength - 34;

  return (
    <div className="relative grid aspect-square min-h-[16rem] place-items-center lg:min-h-[18rem]">
      <svg
        viewBox="0 0 320 320"
        className="h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <path
            id="hero-badge-path"
            d="M 160,160 m -118,0 a 118,118 0 1,1 236,0 a 118,118 0 1,1 -236,0"
          />
        </defs>

        <circle
          cx="160"
          cy="160"
          r="118"
          fill="rgba(255,255,255,0.02)"
          stroke="rgba(245,241,232,0.14)"
          strokeWidth="1"
        />
        <circle
          cx="160"
          cy="160"
          r="82"
          fill="none"
          stroke="rgba(245,241,232,0.12)"
          strokeWidth="1"
        />

        <g className="origin-center hero-badge-spin">
          <text
            fill="rgba(245,241,232,0.82)"
            fontSize="14"
            fontFamily="var(--font-ibm-plex-mono), monospace"
          >
            <textPath
              href="#hero-badge-path"
              startOffset="50%"
              textAnchor="middle"
              textLength={textLength}
              lengthAdjust="spacing"
            >
              {text}
            </textPath>
          </text>
        </g>

        <g className="hero-badge-square">
          <rect
            x="104"
            y="104"
            width="112"
            height="112"
            fill="rgba(255,106,0,0.10)"
            stroke="rgba(255,106,0,0.70)"
            strokeWidth="1"
          />
          <rect
            x="116"
            y="116"
            width="88"
            height="88"
            fill="none"
            stroke="rgba(245,241,232,0.18)"
            strokeWidth="1"
          />
          <line
            x1="140"
            y1="160"
            x2="180"
            y2="160"
            stroke="rgba(255,106,0,0.90)"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}
