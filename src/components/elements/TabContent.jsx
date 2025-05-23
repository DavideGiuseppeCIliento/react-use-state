export default function TabContent({ description, id, visibleId }) {
  let visibility = null;
  id === visibleId ? (visibility = "visibile") : (visibility = "nascosto");

  return <p className={`${visibility}`}>{description}</p>;
}
