import React from "react";
import "./RecordsList.css";

import RecordsListItem from "../RecordsListItem/RecordsListItem";

const RecordsList = ({ records }) => {


  const recordsList = records.map((record) => (
    <li key={record.id}>
      <RecordsListItem record={record} />
    </li>
  ));

  return (
    <div>
      <ul>{recordsList}</ul>
    </div>
  );
};



export default RecordsList;
