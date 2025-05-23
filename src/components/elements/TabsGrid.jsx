import { useState } from "react";
import languages from "../../data/languages";
import TabTitle from "./TabTitle";
import TabContent from "./TabContent";

export default function TabsGrid() {
  const [visibleId, setVisibleId] = useState(0);
  return (
    <>
      {/* TABS */}
      <div className="row g-5 text-white p-5">
        {languages.map((linguaggio) => (
          <div className="col-auto" key={linguaggio.id}>
            <TabTitle
              title={linguaggio.title}
              id={linguaggio.id}
              visibleId={visibleId}
              onClick={() => setVisibleId(linguaggio.id)}
            />
          </div>
        ))}
      </div>

      {/* SCHEDE */}
      <div className="row g-5 text-white p-5">
        {languages.map((scheda, index) => (
          <div className="col-auto" key={scheda.id}>
            <TabContent
              description={scheda.description}
              id={index + 1}
              visibleId={visibleId}
            />
          </div>
        ))}
      </div>
    </>
  );
}
