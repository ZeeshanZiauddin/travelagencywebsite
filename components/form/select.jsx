/** @format */

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CustomSelect = ({
  label,
  values,
  placeholder,
  onChange,
  className,
}) => {
  if (!values || !Array.isArray(values)) {
    console.error("Invalid values provided. Expected an array:", values);
    return null; // Render nothing if values are invalid
  }

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder ?? "Select..."} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {values.map(({ id, city, country }) => (
            <SelectItem
              key={id}
              value={`${id}_${city}, ${country}`} // You can customize this value format if needed
            >
              {`${city}, ${country}`}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
