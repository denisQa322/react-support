import { TextField } from "@mui/material";

interface QuantityInputComponentProps {
  value: string;
  onChange: (quantity: string) => void;
}

function QuantityInputComponent({
  value,
  onChange,
}: QuantityInputComponentProps) {
  return (
    <>
      <TextField
        fullWidth
        label="Количество"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

export default QuantityInputComponent;
