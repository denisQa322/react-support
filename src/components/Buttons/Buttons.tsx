import Button from "@mui/material/Button/Button";
import React from "react";
import deleteIcon from "../../assets/icons/delete-button.svg";
import editIcon from "../../assets/icons/edit-button.svg";
import addIcon from "../../assets/icons/add-button.svg";
import "./Buttons.scss";

function Buttons() {
  return (
    <div className="buttons">
      <Button className="delete">
        <img src={deleteIcon} alt="" />
      </Button>
      <Button className="edit">
        <img src={editIcon} alt="" />
      </Button>
      <Button className="add">
        <img src={addIcon} alt="" />
      </Button>
    </div>
  );
}

export default Buttons;
