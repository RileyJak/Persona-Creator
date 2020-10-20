import React from "react";
import holder from "../images/icons8-person-64.png";
import "../css/saved-grid.css";

function SavedGrid() {
  return (
    <>
      <div className="saved__container">
        <div className="saved">
          <img className="saved__picture" src={holder} />
          <h3 className="saved__name">Name</h3>
        </div>

        <div className="saved">
          <img className="saved__picture" src={holder} />
          <h3 className="saved__name">Name</h3>
        </div>

        <div className="saved">
          <img className="saved__picture" src={holder} />
          <h3 className="saved__name">Name</h3>
        </div>

        <div className="saved">
          <img className="saved__picture" src={holder} />
          <h3 className="saved__name">Name</h3>
        </div>

        <div className="saved">
          <img className="saved__picture" src={holder} />
          <h3 className="saved__name">Name</h3>
        </div>

        <div className="saved">
          <img className="saved__picture" src={holder} />
          <h3 className="saved__name">Name</h3>
        </div>
      </div>
    </>
  );
}

export default SavedGrid;
