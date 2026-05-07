type Rule = {
  number: string;
  title: string;
  body: string;
};

type ManifestoProps = {
  rules: readonly Rule[];
};

export function Manifesto({ rules }: ManifestoProps) {
  return (
    <div className="manifesto-grid reveal">
      {rules.map((rule) => (
        <div key={rule.number} className="rule">
          <div className="rule-number">{rule.number}</div>
          <div className="rule-content">
            <h3 className="rule-title">{rule.title}</h3>
            <p className="rule-body">{rule.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
