import { PaymentMethod } from "../types";

export const PaymentMethods = ({
  paymentMethods,
}: {
  paymentMethods: PaymentMethod[];
}) => (
  <>
    {paymentMethods.map((method) => (
      <label key={method.provider} className="flex gap-2">
        <input
          type="radio"
          name="payment"
          value={method.provider}
          defaultChecked={method.provider === "cash"}
        />
        <span>{method.label}</span>
      </label>
    ))}
  </>
);
