import React from "react";

import "./Order.css";

function Order({ order }) {
  const {
    data: { order: currOrder },
  } = order;
  console.log(order);
  console.log(currOrder);
  return (
    <div className="order-container">
      <div className="order-card">
        <p>
          <span>Order Id: </span>
          {order.id}
        </p>
        {currOrder.map((o) => (
          <p>{o.title}</p>
        ))}
      </div>
    </div>
  );
}

export default Order;
