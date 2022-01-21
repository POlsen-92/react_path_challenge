import React from "react";
import Tile from "../tile/Tile";

const TileList = ({ array }) => {
  
  return (
    <div>
      {
        array.map((content) => {
          return(
            <Tile content={content} key={array.index+1}/>
          )
        })
      }
    </div>
  );
};

export default TileList;
