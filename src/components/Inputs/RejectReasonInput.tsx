import { MenuItem, TextField } from "@mui/material";

interface RejectReasonInputComponentProps {
  value: string;
  onChange: (returnReason: string) => void;
}

function RejectReasonInputComponent({
  value,
  onChange,
}: RejectReasonInputComponentProps) {
  return (
    <>
      <TextField
        className="input"
        label="Причина отказа"
        value={value}
        onChange={(e) => {
          const selectedReason = e.target.value;
          onChange(selectedReason);
        }}
        select
        fullWidth
      >
        <MenuItem value="Истекли сроки">Истекли сроки</MenuItem>
        <MenuItem value="Неверно выбрана деталь">
          Неверно выбрана деталь
        </MenuItem>
      </TextField>
    </>
  );
}

export default RejectReasonInputComponent;
