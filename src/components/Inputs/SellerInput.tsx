import { MenuItem, TextField } from "@mui/material";

interface SellerInputComponentProps {
  value: string;
  onChange: (seller: string) => void;
}

function SellerInputComponent({ value, onChange }: SellerInputComponentProps) {
  return (
    <>
      <TextField
        className="input"
        label="Поставщик"
        value={value}
        onChange={(e) => {
          const selectedSeller = e.target.value;
          onChange(selectedSeller);
        }}
        select
        fullWidth
      >
        <MenuItem value="РК">РК</MenuItem>
        <MenuItem value="ЮГ">ЮГ</MenuItem>
        <MenuItem value="EMEX">EMEX</MenuItem>
        <MenuItem value="АП">АП</MenuItem>
      </TextField>
    </>
  );
}

export default SellerInputComponent;
