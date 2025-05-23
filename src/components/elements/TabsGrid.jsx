import languages from "../../data/languages";
import TabTitle from "./TabTitle";
import TabContent from "./TabContent";

export default function TabsGrid() {
  return (
    <div className="row g-5 text-white">
      {languages.map((linguaggio) => (
        <div className="col-auto" key={linguaggio.id}>
          <TabTitle
            title={linguaggio.title}
            description={linguaggio.description}
          />
        </div>
      ))}
    </div>
  );
}
