export const Necessaries = ({ list }: { list: Array<string> }) => {
  return (
    <div className="bg-white rounded-lg">
      <ul className="space-y-4">
        {list?.map((necessary: string, index: number) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-primary">✓</span>
            <span>{necessary}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
