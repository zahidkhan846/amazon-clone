import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import "./Payment.css";

function Payment() {
  const { currentUser } = useAuth();
  const { cart } = useCart();

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          <Link to="/checkout">
            Checkout (
            {cart?.length > 1 ? `${cart.length} items` : `${cart.length} item`})
          </Link>
        </h1>

        <div className="payment-section">
          <h3>Delivery Address</h3>
          <div className="payment-address">
            <p>{currentUser?.email}</p>
            <p>32P, JUNGLE MATA DIN</p>
            <p>JAIL BYPASS ROAD GORAKHPUR</p>
          </div>
        </div>
        <div className="payment-section">
          <h3>Review your order</h3>
          <div className="payment-order">
            {cart &&
              cart?.map((c) => {
                return <CartItem key={c.id} cartItem={c} />;
              })}
          </div>
        </div>
        <div className="payment-section">
          <h3>Payment Options</h3>
          <div className="payment-method">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id
              necessitatibus dignissimos nisi, odio soluta quos ab voluptas
              quas? Praesentium natus fugiat ea ut totam nesciunt vel dolorum
              dolores facere labore harum sapiente, dignissimos consequuntur
              maxime aperiam! Doloremque, laudantium quo corrupti accusamus
              assumenda quas quisquam, neque sapiente excepturi officia
              voluptate!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
