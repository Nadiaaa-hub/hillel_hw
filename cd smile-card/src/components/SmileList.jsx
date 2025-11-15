export default function SmileList({ smiles = [] }) {
  return (
    <ul>
      {smiles.map((smile) => (
        <SmileCard
          key={smile.id}
          id={smile.id}
          emoji={smile.emoji}
          votes={smile.votes}
        />
      ))}
    </ul>
  );
}
