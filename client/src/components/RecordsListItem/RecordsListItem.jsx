import React from "react";

const RecordsListItem = ({ record }) => {
  return (
    <div>
      <p>
        {record.artist} - <b>{record.title}</b>
      </p>
    </div>
  );
};

export default RecordsListItem;
