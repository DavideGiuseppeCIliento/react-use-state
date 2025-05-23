import { useState } from "react";
import languages from "../../data/languages";
import TabTitle from "./TabTitle";
import TabContent from "./TabContent";

export default function TabsGrid() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  console.log("RENDERING:..");

  return (
    <>
      {/* TABS */}
      <div className="row g-5 text-white p-5">
        {languages.map((linguaggio) => (
          <div className="col-auto" key={linguaggio.id}>
            <TabTitle
              title={linguaggio.title}
              id={linguaggio.id}
              visibleId={selectedLanguage?.id}
              onClick={() => setSelectedLanguage(linguaggio)}
            />
          </div>
        ))}
      </div>

      {/* SCHEDE */}
      <div className="row g-5 text-white p-5">
        {selectedLanguage && (
          <div className="col-auto" key={selectedLanguage.id}>
            <TabContent description={selectedLanguage.description} />
          </div>
        )}
      </div>
    </>
  );
}
