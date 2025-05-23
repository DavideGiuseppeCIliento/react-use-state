import languages from "../../data/languages";
import TabTitle from "./TabTitle";
import TabContent from "./TabContent";

export default function TabsGrid() {
  return (
    <>
      {/* TABS */}
      <div className="row g-5 text-white p-5">
        {languages.map((linguaggio) => (
          <div className="col-auto" key={linguaggio.id}>
            <TabTitle
              title={linguaggio.title}
              description={linguaggio.description}
            />
          </div>
        ))}
      </div>

      {/* SCHEDE */}
      <div className="row g-5 text-white p-5">
        {languages.map((scheda) => (
          <div className="col-auto" key={scheda.id}>
            <TabContent description={scheda.description} />
          </div>
        ))}
      </div>
    </>
  );
}
