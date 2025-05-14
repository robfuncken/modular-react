export type PaymentMethod = {
  provider: string;
  label: string;
};

export type RemotePaymentMethod = {
  name: string;
  id: string;
  countryCode: string;
};
