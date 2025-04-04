import { Input } from "antd";
import { Controller } from "react-hook-form";

type TPDInputProps = {
  type: string;
  name: string;
  className?: string;
  placeholder?: string;
};

const PDInput = ({
  type = "text",
  name = "",
  className = "",
  placeholder = "",
}: TPDInputProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            className={className}
            type={type}
            id={name}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default PDInput;
