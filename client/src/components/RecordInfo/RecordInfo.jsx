import React from "react";

const RecordInfo = ({ record }) => {
  return (
    <div>
      <h2>
        {record.title} - {record.artist}
      </h2>
      <div>
        <p>{record.songList}</p>
        <form>
          <input className="front-cover"></input>
          <input className="back-cover"></input>
          <input className="vinyl-1"></input>
          <input className="vinyl-2"></input>
        </form>
      </div>
    </div>
  );
};

RecordInfo.propTypes = {};

export default RecordInfo;
