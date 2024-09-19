import Button from "@mui/material/Button/Button";
import addIcon from "../../assets/icons/add-button.svg";

import "./Buttons.scss";

interface ButtonsProps {
  onAdd: () => void;
}

function addButton({ onAdd }: ButtonsProps) {
  return (
    <>
      <Button className="add" onClick={onAdd}>
        <img src={addIcon} alt="" />
      </Button>
    </>
  );
}

export default addButton;
