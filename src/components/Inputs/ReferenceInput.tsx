import { TextField } from "@mui/material";

interface ReferenceInputComponentProps {
  value: string;
  onChange: (reference: string) => void;
}

function ReferenceInputComponent({
  value,
  onChange,
}: ReferenceInputComponentProps) {
  return (
    <>
      <TextField
        fullWidth
        label="Референс/GlobalID"
        variant="outlined"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

export default ReferenceInputComponent;
