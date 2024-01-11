import "./App.css";
import grapesjs from "grapesjs";
import React, { useEffect, useState } from "react";
import "grapesjs/dist/css/grapes.min.css";
import plugin from "grapesjs-preset-webpage";

function App() {
  const [editor, setEditor] = useState(null);

  // Initialize GrapesJS editor
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [plugin],
      pluginsOpts:{
        [plugin]: {} 
      }
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
