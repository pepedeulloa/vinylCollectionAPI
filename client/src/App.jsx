import "./App.css";
import RecordsList from "./components/RecordsList";
import RecordsList from "./components/RecordInfo";

function App() {
  return (
    <div>
      <header>
        <h1>Records Collection Image Uploader</h1>
      </header>
      <section className="dashboard">
        <div className="sideList">
          <RecordsList></RecordsList>
        </div>
        <div className="container">
          <RecordInfo></RecordInfo>
        </div>
      </section>
    </div>
  );
}

export default App;
