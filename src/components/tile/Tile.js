import React from "react";

const Tile = ({content}) => {

  const contentArray = Object.values(content)

  return (
    <div className="tile-container">
      {contentArray.map((value, index) => {
        if (value === contentArray[0]) {
          return (
            <p key={index} className="tile-title">{value}</p>
          )
        } else {
          return ( 
            <p key={index} className="tile">{value}</p>
          )
        }
      })}
    </div>
  );
};

export default Tile;
