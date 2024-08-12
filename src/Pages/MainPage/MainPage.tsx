import React from "react";
import logo from "../../assets/images/support-main-icon.png";
import { Link } from "react-router-dom";
import "./MainPage.scss";
import OrderInfo from "../../components/OrderInfo/OrdersInfo";

function MainPage() {
  return (
    <section className="main-page">
      <div className="main-image">
        <img src={logo} alt="main-image" />
      </div>
      <h1 className="main-page-header">Стартовая страница Leonet Support*</h1>
      <h6 className="main-page-description">
        *Служба Поддержки Пользователей.
      </h6>
      <p className="main-page-info">
        В данном инструменте можно получить
        <br />
        актуальную информацию о запросах на <Link to="/returns">возврат</Link>,
        <br />а также информацию об <Link to="/rejects">отказах</Link> от
        заказов.
      </p>
      <OrderInfo />
    </section>
  );
}

export default MainPage;
