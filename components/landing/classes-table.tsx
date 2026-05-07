type ClassRow = {
  code: string;
  name: string;
  focus: string;
  intensity: "Alta" | "Media" | "Baja" | "Brutal";
  duration: string;
};

type ClassesTableProps = {
  rows: readonly ClassRow[];
};

const intensityClass = (i: ClassRow["intensity"]) =>
  i === "Brutal" || i === "Alta" ? "chip-full" : "chip-gold";

export function ClassesTable({ rows }: ClassesTableProps) {
  return (
    <div className="reveal">
      {/* desktop / tablet */}
      <div className="hidden md:block overflow-x-auto">
        <table className="brut-table">
          <thead>
            <tr>
              <th style={{ width: "5rem" }}>Cod</th>
              <th>Clase</th>
              <th>Foco</th>
              <th style={{ width: "7rem" }}>Intensidad</th>
              <th style={{ width: "6rem" }}>Duración</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.code}>
                <td className="text-[var(--brand)]">{row.code}</td>
                <td className="font-semibold uppercase tracking-wider text-[var(--foreground)]">
                  {row.name}
                </td>
                <td className="text-[var(--muted-foreground)]">{row.focus}</td>
                <td>
                  <span className={intensityClass(row.intensity)}>
                    {row.intensity}
                  </span>
                </td>
                <td className="text-[var(--muted-foreground)]">
                  {row.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* mobile */}
      <ul className="md:hidden grid gap-3 font-mono">
        {rows.map((row) => (
          <li
            key={row.code}
            className="border border-[var(--border)] bg-[var(--block)] p-4 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-[var(--brand)] text-2xl font-display tracking-wider">
                {row.code}
              </span>
              <span className={intensityClass(row.intensity)}>
                {row.intensity}
              </span>
            </div>
            <div className="font-semibold uppercase tracking-wider text-[var(--foreground)] text-[0.95rem] leading-tight">
              {row.name}
            </div>
            <p className="text-[var(--muted-foreground)] text-[0.82rem] leading-relaxed">
              {row.focus}
            </p>
            <div className="flex items-center gap-2 pt-2 border-t border-[var(--border)] text-[0.65rem] uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
              <span>Duración</span>
              <span className="text-[var(--foreground)]">{row.duration}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
