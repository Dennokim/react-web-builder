import "./App.css";
import React, { useEffect, useState } from "react";
import grapesjs from "grapesjs";
import grapesjsMJML from "grapesjs-mjml";
import mjmlNL from "grapesjs-mjml/locale/nl";
import "grapesjs/dist/css/grapes.min.css";

function App() {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      fromElement: true,
      container: "#gjs",
      plugins: [grapesjsMJML],
      pluginsOpts: {
        "grapesjs-mjml": {
          /* ...options */
        },
      },
    });
    setEditor(editor);
  }, []);

  return (
    <div id="gjs">
      <mjml>
        <mj-body>
          <mj-section>
            <mj-column>
              <mj-text>My Company</mj-text>
            </mj-column>
          </mj-section>
        </mj-body>
      </mjml>
    </div>
  );
}

export default App;
