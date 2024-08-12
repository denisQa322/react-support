import { MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import "./AddReturnOrderComponent.scss";
import Buttons from "../Buttons/Buttons";

function AddReturnOrderComponent() {
  const date = new Date();

  const formattedDateLocale = date.toLocaleDateString("ru-RU");

  const [reference, setReference] = useState("");
  const [quantity, setQuantity] = useState("");
  const [newDate, setDate] = useState(formattedDateLocale);
  const [seller, setSeller] = useState("");
  const [reason, setReason] = useState("");

  console.log(typeof reference);
  console.log(typeof quantity);
  console.log(typeof newDate);
  console.log(typeof seller);
  console.log(typeof reason);

  return (
    <form action="">
      <div className="order-info-inputs">
        <TextField
          fullWidth
          label="Референс"
          variant="outlined"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />
        <TextField
          fullWidth
          label="Количество"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <TextField
          fullWidth
          type="date"
          value={newDate}
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          className="input"
          label="Поставщик"
          value={seller}
          onChange={(e) => {
            const selectedSeller = e.target.value;
            setSeller(selectedSeller);
          }}
          select
          fullWidth
        >
          <MenuItem value="Local">РК</MenuItem>
          <MenuItem value="Mega">ЮГ</MenuItem>
          <MenuItem value="EMEX">EMEX</MenuItem>
          <MenuItem value="Autopiter">АП</MenuItem>
        </TextField>
        <TextField
          className="input"
          label="Причина возврата"
          value={reason}
          onChange={(e) => {
            const selectedReason = e.target.value;
            setReason(selectedReason);
          }}
          select
          fullWidth
        >
          <MenuItem value="Damage">Повреждение</MenuItem>
          <MenuItem value="Wrong attachement">
            Пересорт/Неверное вложение
          </MenuItem>
          <MenuItem value="Not all">Некомплект/Недостача</MenuItem>
          <MenuItem value="Used before">Б/У</MenuItem>
          <MenuItem value="Factory defect">Заводской брак</MenuItem>
          <MenuItem value="Wrong replacement">Неккоректная замена</MenuItem>
          <MenuItem value="Selection error">Ошибка подбора</MenuItem>
        </TextField>
      </div>
      <Buttons />
    </form>
  );
}

export default AddReturnOrderComponent;
