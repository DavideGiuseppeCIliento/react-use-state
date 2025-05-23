export default function TabTitle({ title, onClick }) {
  return (
    <button className="tab-title" onClick={onClick}>
      {title}
    </button>
  );
}
