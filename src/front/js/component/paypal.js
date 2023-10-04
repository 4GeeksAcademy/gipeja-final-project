import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
export default function PayPal(props) {

  // Esta función se llamará cuando el usuario haga clic en el botón de PayPal
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: props.total, // Aquí es donde le pongo el monto que quiero
            currency_code: "USD",
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    console.log("Pago aprobado con éxito. ID de transacción:", data.orderID);
  };
  return (
    <PayPalScriptProvider options={{ "client-id": "AZLjhEtIfiLETgiz6BhoVUFbRLp-Hs7hxZmugvcnUmMFcrotoiVVL4G0B5cin2RFd4j459obwouvSdau" }}>

      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>

  );
};