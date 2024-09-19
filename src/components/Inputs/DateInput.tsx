import { TextField } from "@mui/material";

interface DateInputComponentProps {
  value: string;
  onChange: (date: string) => void;
}

function DateInputComponent({ value, onChange }: DateInputComponentProps) {
  return (
    <>
      <TextField
        fullWidth
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

export default DateInputComponent;
