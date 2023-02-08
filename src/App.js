import React, { useEffect, useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
  {
    title: "what is React?",
    content: "React is a frontend javascript framework",
  },
  {
    title: "Why use React",
    content: "React is a favourate JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];
const options = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Green", value: "green" },
];
function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [selected, setSelected] = useState(options[0]);
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, [currentPath]);

  const style = { backgroundColor: `${selected.value}` };
  return (
    <div>
      <Header />

      {window.location.pathname === "/" ? (
        <Accordion items={items} />
      ) : window.location.pathname === "/list" ? (
        <Search />
      ) : window.location.pathname === "/dropdown" ? (
        <Dropdown
          style={style}
          heading="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : window.location.pathname === "/translate" ? (
        <Translate />
      ) : null}
    </div>
  );
}

export default App;
