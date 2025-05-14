"use client";

import { Button } from "@/src/components/ui/button";
import { usePaymentMethods } from "../hooks/usePaymentMethods";
import { useRoundUp } from "../hooks/useRoundUp";
import { CountryPayment } from "../models/country-payments";
import { formatButtonLabel, formatCheckboxLabel } from "../utils";
import { DonationCheckbox } from "./donation-checkbox";
import { PaymentMethods } from "./payment-methods";

const roundUpToNearestInteger = (amount: number) => Math.ceil(amount);

export const Payment = ({
  amount,
  strategy = new CountryPayment("$", roundUpToNearestInteger),
}: {
  amount: number;
  strategy?: CountryPayment;
}) => {
  const { paymentMethods } = usePaymentMethods();

  const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp(
    amount,
    strategy
  );

  return (
    <div className="flex flex-col space-y-2">
      <h3 className="text-2xl font-bold ">Payment</h3>
      <PaymentMethods paymentMethods={paymentMethods} />
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        content={formatCheckboxLabel(agreeToDonate, tip, strategy)}
      />
      <Button>{formatButtonLabel(strategy, total)}</Button>
    </div>
  );
};
