import { useFormContext } from "react-hook-form";

type TPDInput = {
  type?: string;
  name?: string;
  className?: string;
  placeholder?: string;
};

const PDInput = ({
  type = "text",
  name = "",
  className = "",
  placeholder = "",
}: TPDInput) => {
  const { register } = useFormContext();
  return (
    <input
      className={className}
      type={type}
      id={name}
      placeholder={placeholder}
      {...register(name)}
    />
  );
};

export default PDInput;
