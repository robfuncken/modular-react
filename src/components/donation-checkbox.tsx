interface DonationCheckboxProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  content: string;
}

export const DonationCheckbox = ({
  onChange,
  checked,
  content,
}: DonationCheckboxProps) => {
  return (
    <div className="">
      <label className="flex items-center gap-2">
        <input type="checkbox" onChange={onChange} checked={checked} />
        <p>{content}</p>
      </label>
    </div>
  );
};
