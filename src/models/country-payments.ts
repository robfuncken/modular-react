export class CountryPayment {
  private readonly _currencySign: string;
  private readonly algorithm: RoundUpStrategy;

  public constructor(currencySign: string, roundUpAlgorithm: RoundUpStrategy) {
    this._currencySign = currencySign;
    this.algorithm = roundUpAlgorithm;
  }

  get currencySign(): string {
    return this._currencySign;
  }

  getRoundUpAmount(amount: number): number {
    return this.algorithm(amount);
  }

  getTip(amount: number): number {
    return calculateTipFor(this.getRoundUpAmount.bind(this))(amount);
  }
}

const calculateTipFor =
  (roundUpAmount: (amount: number) => number) =>
  (amount: number): number => {
    return parseFloat((roundUpAmount(amount) - amount).toPrecision(10));
  };

export type RoundUpStrategy = (amount: number) => number;
