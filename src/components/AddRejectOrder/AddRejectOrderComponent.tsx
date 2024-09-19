import ReferenceInputComponent from "../Inputs/ReferenceInput";
import QuantityInputComponent from "../Inputs/QuantityInput";
import DateInputComponent from "../Inputs/DateInput";
import SellerInputComponent from "../Inputs/SellerInput";
import RejectReasonInputComponent from "../Inputs/RejectReasonInput";
import { useState } from "react";
import AddButton from "../Buttons/addButton";

function AddRejectOrderComponent() {
  const [reference, setReference] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [seller, setSeller] = useState("");
  const [rejectReason, setRejectReason] = useState("");

  const handleAddRejectOrder = () => {
    const orderInfo = {
      reference,
      quantity,
      date,
      seller,
      rejectReason,
    };

    console.log(orderInfo);

    setReference("");
    setQuantity("");
    setDate(new Date().toISOString().split("T")[0]);
    setSeller("");
    setRejectReason("");
  };
  return (
    <div className="add-order-wrapper">
      <div className="order-info-inputs">
        <ReferenceInputComponent value={reference} onChange={setReference} />
        <QuantityInputComponent value={quantity} onChange={setQuantity} />
        <DateInputComponent value={date} onChange={setDate} />
        <SellerInputComponent value={seller} onChange={setSeller} />
        <RejectReasonInputComponent
          value={rejectReason}
          onChange={setRejectReason}
        />
      </div>
      <AddButton onAdd={handleAddRejectOrder} />
    </div>
  );
}

export default AddRejectOrderComponent;
