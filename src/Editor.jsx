import "./styles/ediotr.css";
import "codemirror/theme/material.css";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/sql/sql";
import { useState } from "react";
import { sqlQuery } from "./constants";
import { Controlled as ControlledEditor } from "react-codemirror2";
import Button from "react-bootstrap/Button";

export default function Editor() {
  const [value, setValue] = useState(sqlQuery);

  function handleChange(editor, data, value) {
    setValue(value);
  }

  return (
    <div className="editor">
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="codemirrorRaper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: "sql",
          lineNumbers: true
        }}
      />
      <Button className="runBtn" variant="outline-success">
        Run Query
      </Button>{" "}
      <Button variant="outline-primary">Save Query</Button>{" "}
    </div>
  );
}
