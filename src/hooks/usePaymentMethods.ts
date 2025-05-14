"use client";
import { useState } from "react";

import { useEffect } from "react";
import { PaymentMethod, RemotePaymentMethod } from "../types";

export const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    fetchPaymentMethods().then((methods) => setPaymentMethods(methods));
  }, []);

  return {
    paymentMethods,
  };
};

// can use react query to fetch data, or other libraries like SWR
const fetchPaymentMethods = async () => {
  const response = await fetch(
    "https://5a2f495fa871f00012678d70.mockapi.io/api/payment-methods?countryCode=AU"
  );
  const methods: RemotePaymentMethod[] = await response.json();

  return convertPaymentMethods(methods);
};

const convertPaymentMethods = (
  methods: RemotePaymentMethod[]
): PaymentMethod[] => {
  return methods.map((method) => ({
    provider: method.id,
    label: method.name,
  }));
};
