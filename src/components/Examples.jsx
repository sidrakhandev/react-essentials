import { useState } from "react";
import Section from "./Section";
import TabButton from "./TabButton";
import Tabs from "./Tabs";
import { EXAMPLES } from "../data";

export default function Examples() {
  const [tabContent, setTabContent] = useState();

  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
  }

  let tabData = <p>Select a topic to get inner insights 😉</p>;

  if (tabContent) {
    tabData = (
      <div id="tab-content">
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>{EXAMPLES[tabContent].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Section title="Examples" id="examples">
        <Tabs
          buttons={
            <>
              <TabButton
                isSelected={tabContent === "components"}
                onClick={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={tabContent === "jsx"}
                onClick={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={tabContent === "props"}
                onClick={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={tabContent === "state"}
                onClick={() => handleSelect("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {tabData}
        </Tabs>
      </Section>
    </>
  );
}
