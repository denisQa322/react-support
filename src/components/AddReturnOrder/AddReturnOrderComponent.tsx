import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "./AddReturnOrderComponent.scss";
import ReferenceInputComponent from "../Inputs/ReferenceInput";
import QuantityInputComponent from "../Inputs/QuantityInput";
import DateInputComponent from "../Inputs/DateInput";
import SellerInputComponent from "../Inputs/SellerInput";
import ReturnReasonInputComponent from "../Inputs/ReturnReasonInput";
import AddButton from "../Buttons/addButton";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Buttons from "../Buttons/Buttons";

interface ReturnOrder {
  reference: string;
  quantity: string;
  date: string;
  seller: string;
  returnReason: string;
}

const useStyles = makeStyles({
  tableContainer: {
    marginTop: "25px",
    border: "1px solid",
    backgroundColor: "#f5f5f5",
  },
  tableHeadCell: {
    fontWeight: "bold !important",
    color: "#1976d2 !important",
    fontSize: "20px !important",
    border: "1px solid black",
  },
  tableRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#e0f7fa",
    },
  },
});

function AddReturnOrderComponent() {
  const styles = useStyles();
  const [reference, setReference] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [date, setDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [seller, setSeller] = useState<string>("");
  const [returnReason, setReturnReason] = useState<string>("");

  const [orders, setOrders] = useState<ReturnOrder[]>([]);

  // Загрузка данных из localStorage
  useEffect(() => {
    const storedOrders = JSON.parse(
      localStorage.getItem("returnOrders") || "[]"
    );
    setOrders(storedOrders);
  }, []);

  // Сохранение данных в localStorage
  useEffect(() => {
    if (orders.length > 0) {
      localStorage.setItem("returnOrders", JSON.stringify(orders));
    }
  }, [orders]);

  const handleAddReturnOrder = () => {
    if (!reference || !quantity || !date || !seller || !returnReason) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    const newOrder: ReturnOrder = {
      reference,
      quantity,
      date,
      seller,
      returnReason,
    };

    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders, newOrder];
      console.log("Добавляем новый заказ:", newOrder);
      return updatedOrders;
    });

    setReference("");
    setQuantity("");
    setDate(new Date().toISOString().split("T")[0]);
    setSeller("");
    setReturnReason("");
  };

  return (
    <>
      <div className="add-order-wrapper">
        <div className="order-info-inputs">
          <ReferenceInputComponent value={reference} onChange={setReference} />
          <QuantityInputComponent value={quantity} onChange={setQuantity} />
          <DateInputComponent value={date} onChange={setDate} />
          <SellerInputComponent value={seller} onChange={setSeller} />
          <ReturnReasonInputComponent
            value={returnReason}
            onChange={setReturnReason}
          />
        </div>
        <AddButton onAdd={handleAddReturnOrder} />
      </div>

      {orders.length > 0 && (
        <TableContainer component={Paper} className={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={styles.tableHeadCell}>Референс</TableCell>
                <TableCell className={styles.tableHeadCell}>
                  Количество
                </TableCell>
                <TableCell className={styles.tableHeadCell}>Дата</TableCell>
                <TableCell className={styles.tableHeadCell}>
                  Поставщик
                </TableCell>
                <TableCell className={styles.tableHeadCell}>
                  Причина возврата
                </TableCell>
                <TableCell className={styles.tableHeadCell}>Действие</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={index} className={styles.tableRow}>
                  <TableCell className="tableReference">
                    {order.reference}
                  </TableCell>
                  <TableCell className="tableQuantity">
                    {order.quantity}
                  </TableCell>
                  <TableCell className="tableDate">{order.date}</TableCell>
                  <TableCell className="tableSeller">{order.seller}</TableCell>
                  <TableCell className="tableReturnReason">
                    {order.returnReason}
                  </TableCell>
                  <TableCell>
                    <Buttons />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default AddReturnOrderComponent;
