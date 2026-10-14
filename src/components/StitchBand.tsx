// Banda decorativa en punto de cruz, inspirada en el bordado xok bichuy
// del hipil yucateco. Cada letra del patrón es una puntada:
// r = hilo rosa, g = hilo verde, c = hilo azul, . = tela sin bordar.
const PATTERN = [
  "c.c.c.c.c.c.c.c.c.c.",
  "....................",
  ".....r..............",
  "....rrr.......r.....",
  "...rr.rr.....r.r....",
  "....rrr.......r.....",
  ".....r........g.....",
  "...g.g.g.....ggg....",
  "....ggg.......g.....",
  ".....g..............",
  "....................",
  ".c.c.c.c.c.c.c.c.c.c",
];

const WIDTH = 20;
const CELL = 9;
const PAD = 2;

const THREAD: Record<string, string> = {
  r: "stroke-hilo-rosa",
  g: "stroke-hilo-verde",
  c: "stroke-hilo-azul",
};

const stitches = PATTERN.flatMap((row, y) =>
  row
    .padEnd(WIDTH, ".")
    .slice(0, WIDTH)
    .split("")
    .map((ch, x) => ({ ch, x, y })),
).filter((s) => s.ch in THREAD);

export function StitchBand() {
  const height = PATTERN.length * CELL;

  return (
    <div className="bg-tela py-4">
      <svg
        aria-hidden="true"
        focusable="false"
        className="stitch-reveal block w-full"
        height={height}
      >
        <defs>
          <pattern
            id="hipil"
            width={WIDTH * CELL}
            height={height}
            patternUnits="userSpaceOnUse"
          >
            {stitches.map(({ ch, x, y }) => {
              const x0 = x * CELL + PAD;
              const y0 = y * CELL + PAD;
              const x1 = (x + 1) * CELL - PAD;
              const y1 = (y + 1) * CELL - PAD;
              return (
                <g
                  key={`${x}-${y}`}
                  className={THREAD[ch]}
                  strokeWidth={1.8}
                  strokeLinecap="round"
                >
                  <line x1={x0} y1={y0} x2={x1} y2={y1} />
                  <line x1={x1} y1={y0} x2={x0} y2={y1} />
                </g>
              );
            })}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hipil)" />
      </svg>
    </div>
  );
}

// Puntada individual, usada como marcador en la línea de tiempo.
export function StitchMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 12 12"
      className={`size-3 stroke-rosa ${className}`}
      strokeWidth={2.4}
      strokeLinecap="round"
    >
      <line x1="2" y1="2" x2="10" y2="10" />
      <line x1="10" y1="2" x2="2" y2="10" />
    </svg>
  );
}
