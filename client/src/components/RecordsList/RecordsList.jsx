import React from "react";
import PropTypes from "prop-types";

import RecordsListItem from "../RecordsListItem/RecordsListItem";

const RecordsList = (props) => {
  const collection = [
    {
      id: 1,
      title: "Nevermind",
      artist: "Nirvana",
      imageUrl: "",
    },
  ];

  const recordsList = collection.map((record) => {
    <li key={record.id}>
      <RecordsListItem record />
    </li>;
  });

  return (
    <div>
      <ul>{records}</ul>
    </div>
  );
};

RecordsList.propTypes = {
  recordsCo,
};

export default RecordsList;
