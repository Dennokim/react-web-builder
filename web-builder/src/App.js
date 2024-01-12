import "./App.css";
import grapesjs from "grapesjs";
import React, { useEffect, useState } from "react";
import "grapesjs/dist/css/grapes.min.css";
import plugin from "grapesjs-preset-webpage";
import grapesjsNavbar from "grapesjs-navbar";
import grapesjsBlocksBasic from "grapesjs-blocks-basic";

function App() {
  const [editor, setEditor] = useState(null);

  // Initialize GrapesJS editor
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [plugin, grapesjsNavbar, grapesjsBlocksBasic],
      pluginsOpts: {
        //[plugin]: {},
        [grapesjsNavbar]: {},
        [grapesjsBlocksBasic]: {},
      },
    });
    setEditor(editor);
  }, []);
  return (
    <div id="editor">
      <h1>Hello World Component!</h1>
    </div>
  );
}

export default App;
