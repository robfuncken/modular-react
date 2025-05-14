"use client";
import { useState } from "react";
import { Payment } from "../components/payment";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { CountryPayment } from "../models/country-payments";

const strategies = {
  us: new CountryPayment("$", (amount: number) => Math.ceil(amount)),
  eu: new CountryPayment("€", (amount: number) => Math.ceil(amount * 2) / 2),
  uk: new CountryPayment("£", (amount: number) => Math.ceil(amount * 4) / 4),
};

export default function Home() {
  const [amount, setAmount] = useState<number>(99.281);
  const [strategy, setStrategy] = useState<CountryPayment>(strategies.us);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h3 className="text-2xl font-bold ">Payment</h3>

        <div className="w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="amount">Amount to be paid :</Label>
          <Input
            id="amount"
            type="number"
            min="0"
            step="0.01"
            defaultValue={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div className="w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="strategy">Payment Strategy:</Label>
          <Select
            onValueChange={(value) =>
              setStrategy(strategies[value as keyof typeof strategies])
            }
          >
            <SelectTrigger id="strategy">
              <SelectValue placeholder="Select strategy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">US Dollar</SelectItem>
              <SelectItem value="eu">Euro</SelectItem>
              <SelectItem value="uk">British Pound</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Payment amount={amount} strategy={strategy} />
      </main>
    </div>
  );
}
