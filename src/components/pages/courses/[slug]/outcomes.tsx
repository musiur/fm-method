export const Outcomes = (props: Array<string>) => {
  return (
    <div className="bg-white rounded-lg">
      <ul className="space-y-4">
        {props.map((outcome, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-primary">✓</span>
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
