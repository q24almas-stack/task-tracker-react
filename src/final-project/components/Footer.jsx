export default function Footer({ total, completed }) {
  return (
    <footer>
      <p>Total Tasks: {total}</p>
      <p>Completed: {completed}</p>
    </footer>
  );
}
