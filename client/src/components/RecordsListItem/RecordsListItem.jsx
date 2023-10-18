import React from "react";
import PropTypes from "prop-types";

const RecordsListItem = (props) => {
  return (
    <div>
      <img src={record.imageUrl} alt={record.title} />
      <p>
        <b>{record.title}</b>
        {record.artist}
      </p>
    </div>
  );
};

RecordsListItem.propTypes = {
  record,
};

export default RecordsListItem;
