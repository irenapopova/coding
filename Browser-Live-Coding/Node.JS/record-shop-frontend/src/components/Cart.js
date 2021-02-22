import React, { useContext } from "react";
import { MyContext } from "../App";

export default function Cart() {
  const { cart, userData, token, setCart } = useContext(MyContext);

  const placeOrder = () => {
    console.log("placing order");

    let order = {
      records: cart.map((record) => record._id),
      user: userData._id,
    };

    fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth": token,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setCart([]);
          window.alert("we received your order");
        }
      });
  };

  return (
    <div>
      {cart.length === 0 ? (
        <h2>No Item inside the Cart</h2>
      ) : (
          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {" "}
              {cart.map((record) => {
                return (
                  <div
                    key={record._id}
                    style={{
                      width: "300px",
                      padding: "10px",
                      textAlign: "center",
                      boxShadow: "2px 5px 5px gray",
                    }}
                  >
                    <h3>Title: {record.title}</h3>
                    <h4>Artist: {record.artist}</h4>
                    <p>Year: {record.year}</p>
                    <p>Price: {record.price}$</p>
                  </div>
                );
              })}
            </div>
            <button onClick={placeOrder}>Checkout</button>
          </div>
        )}
    </div>
  );
}
