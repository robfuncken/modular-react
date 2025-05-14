import { CountryPayment } from "./models/country-payments";

export const formatCheckboxLabel = (
  agreeToDonate: boolean,
  tip: number,
  strategy: CountryPayment
) => {
  return agreeToDonate
    ? "Thanks for your donation."
    : `I would like to donate ${strategy.currencySign}${tip} to charity.`;
};

export const formatButtonLabel = (strategy: CountryPayment, total: number) => {
  return `Pay ${strategy.currencySign}${total}`;
};
