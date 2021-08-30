import "./styles/styles.css";

import Editor from "./Editor";
import Result from "./Result";
import Panel from "./Panel";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Panel />
      <Editor />
      <Result />
    </div>
  );
}
