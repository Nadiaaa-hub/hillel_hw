export default function SmileCard({ emoji, votes, increaseVote }) {
  return (
    <div>
      <p>
        {emoji}: {votes}
      </p>
      <button onClick={increaseVote}>Vote</button>
    </div>
  );
}
