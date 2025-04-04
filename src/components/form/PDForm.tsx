import { useForm } from "react-hook-form";

const PDForm = ({ onSubmit, children }) => {
  const { handleSubmit } = useForm();

  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
};

export default PDForm;
