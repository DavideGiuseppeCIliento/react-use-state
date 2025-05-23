export default function TabTitle({ title, id, visibleId, onClick }) {
  let setButton = null;
  id === visibleId ? (setButton = "tab-activate") : (setButton = null);
  return (
    <button className={`tab-title ${setButton}`} onClick={onClick}>
      {title}
    </button>
  );
}
