import { MenuItem, Select, SelectChangeEvent, SelectProps } from "@mui/material";
import { NativeSelectInputProps } from "@mui/material/NativeSelect/NativeSelectInput";
import React, { ChangeEvent } from "react";



interface SelectInputProps {
  labelId: string;
  id: string;
  value: string;
  onChange: (event: SelectChangeEvent<unknown>) => void;
  options: Option[];
  otherProps?: SelectProps
  register?: any ; 
}

const SelectInput = ({ labelId, id, value, onChange, options,register,  otherProps }: SelectInputProps): JSX.Element => {
  return (
    <Select
    labelId={labelId}
    id={id}
    {...register}
    value={value}
    onChange={onChange}
    {...otherProps}
    
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectInput;
