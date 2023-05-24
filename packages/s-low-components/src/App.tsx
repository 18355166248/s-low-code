import "./App.css";
import PageJump from "./EditFormComponents/PageJump";

function App() {
  return (
    <div className="App">
      <PageJump
        value={{
          url: "",
          config: "url",
        }}
        onChange={() => {}}
      />
    </div>
  );
}

export default App;
