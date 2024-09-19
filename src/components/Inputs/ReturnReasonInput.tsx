import { MenuItem, TextField } from "@mui/material";

interface ReturnReasonInputComponentProps {
  value: string;
  onChange: (returnReason: string) => void;
}

function ReturnReasonInputComponent({
  value,
  onChange,
}: ReturnReasonInputComponentProps) {
  return (
    <>
      <TextField
        className="input"
        label="Причина возврата"
        value={value}
        onChange={(e) => {
          const selectedReason = e.target.value;
          onChange(selectedReason);
        }}
        select
        fullWidth
      >
        <MenuItem value="Повреждение">Повреждение</MenuItem>
        <MenuItem value="Пересорт/Неверное вложение">
          Пересорт/Неверное вложение
        </MenuItem>
        <MenuItem value="Некомплект/Недостача">Некомплект/Недостача</MenuItem>
        <MenuItem value="Б/У">Б/У</MenuItem>
        <MenuItem value="Заводской брак">Заводской брак</MenuItem>
        <MenuItem value="Неккоректная замена">Неккоректная замена</MenuItem>
        <MenuItem value="Ошибка подбора">Ошибка подбора</MenuItem>
      </TextField>
    </>
  );
}

export default ReturnReasonInputComponent;
