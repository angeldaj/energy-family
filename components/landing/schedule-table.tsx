type ScheduleRow = {
  time: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
};

type ScheduleTableProps = {
  rows: readonly ScheduleRow[];
};

const days = [
  { key: "mon", label: "Lun" },
  { key: "tue", label: "Mar" },
  { key: "wed", label: "Mié" },
  { key: "thu", label: "Jue" },
  { key: "fri", label: "Vie" },
  { key: "sat", label: "Sáb" },
] as const;

export function ScheduleTable({ rows }: ScheduleTableProps) {
  return (
    <div className="reveal">
      {/* desktop / tablet */}
      <div className="hidden md:block overflow-x-auto">
        <table className="brut-table">
          <thead>
            <tr>
              <th style={{ width: "7rem" }}>Hora</th>
              {days.map((d) => (
                <th key={d.key}>{d.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.time}>
                <td className="text-[var(--brand)] font-semibold">{row.time}</td>
                <td>{row.mon}</td>
                <td>{row.tue}</td>
                <td>{row.wed}</td>
                <td>{row.thu}</td>
                <td>{row.fri}</td>
                <td>{row.sat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* mobile */}
      <ul className="md:hidden grid gap-3 font-mono">
        {rows.map((row) => (
          <li
            key={row.time}
            className="border border-[var(--border)] bg-[var(--block)] p-4"
          >
            <div className="flex items-baseline gap-3 mb-3 pb-3 border-b border-[var(--border)]">
              <span className="text-[var(--brand)] text-xl font-display">
                {row.time}
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                Bloque
              </span>
            </div>
            <div className="grid grid-cols-3 gap-x-3 gap-y-2 text-[0.78rem]">
              {days.map((d) => {
                const value = row[d.key];
                const empty = value === "—";
                return (
                  <div key={d.key} className="flex flex-col gap-0.5">
                    <span className="text-[0.58rem] uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                      {d.label}
                    </span>
                    <span
                      className={
                        empty
                          ? "text-[var(--muted-foreground)]"
                          : "text-[var(--foreground)] font-semibold"
                      }
                    >
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
