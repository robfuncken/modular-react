"use client";
import { useState } from "react";

import { useMemo } from "react";
import { CountryPayment } from "../models/country-payments";

export const useRoundUp = (amount: number, strategy: CountryPayment) => {
  const [agreeToDonate, setAgreeToDonate] = useState<boolean>(false);

  const { total, tip } = useMemo(
    () => ({
      total: agreeToDonate ? strategy.getRoundUpAmount(amount) : amount,
      tip: strategy.getTip(amount),
    }),
    [agreeToDonate, amount, strategy]
  );

  const updateAgreeToDonate = () => {
    setAgreeToDonate((agreeToDonate) => !agreeToDonate);
  };

  return {
    total,
    tip,
    agreeToDonate,
    updateAgreeToDonate,
  };
};
