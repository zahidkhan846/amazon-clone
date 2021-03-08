import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useOrder } from "../../context/OrderContext";
import "./Orders.css";
import Order from "./Order/Order";

function Orders() {
  const { getOrders, orders } = useOrder();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      getOrders(currentUser.uid);
    }
  }, []);

  console.log(orders);

  return (
    <div className="order-container">
      <h1>Your Orders</h1>
      <div className="orders">
        {orders &&
          orders.map((order) => <Order key={order.id} order={order} />)}
      </div>
    </div>
  );
}

export default Orders;
