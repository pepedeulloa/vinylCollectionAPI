import "./App.css";
import { getDiscogsCollection, getDiscogsCount } from "./api/discogs.js";
import { getApiCollection, getApiCount } from "./api/records.js";

import RecordsList from "./components/RecordsList/RecordsList.jsx";
import RecordsCounter from "./components/RecordsCounter/RecordsCounter.jsx";
import { useEffect, useState } from "react";

function App() {

  const [records, setRecords] = useState({
    discogs: [],
    api: [],
  });

  const [counters, setCounters] = useState({
    discogs: undefined,
    api: undefined,
  });

  useEffect(() => {
    const getRecords = async () => {
      try {
        const discogsRecords = await getDiscogsCollection();
        const apiRecords = await getApiCollection();
        const discogsCounter = await getDiscogsCount();
        const apiCounter = await getApiCount();

        setRecords({
          discogs: discogsRecords,
          api: apiRecords
        });

        setCounters({
          discogs: discogsCounter,
          api: apiCounter
        });
      } catch (error) {
        console.log(error);
      }
    }
    getRecords();
  }, [records, counters])

  return (
    <div>
      <header>
        <h1>Records Collection Dashboard</h1>
      </header>
      <section className="dashboard">

        <div className="list">
          <div className="counter">
            <RecordsCounter text={"Discogs Records"} counter={counters.discogs}></RecordsCounter>
          </div>
          <RecordsList records={records.discogs}></RecordsList>
        </div>
        <div className="list">
          <div className="counter">
            <RecordsCounter text={"API Records"} counter={counters.api}></RecordsCounter>
          </div>
          <RecordsList records={records.api}></RecordsList>
        </div>
      </section>
    </div>
  );
}

export default App;
