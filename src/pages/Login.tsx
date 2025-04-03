import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0002",
      password: "admin1234",
    },
  });
  const [login, { data, error }] = useLoginMutation();

  console.log("Data ==>", data);
  console.log("Error ==>", error);

  const onSubmit = (data: { userId: string; password: string }) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };

    login(userInfo);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="userId">ID: </label>
        <input
          className=""
          type="text"
          id="userId"
          placeholder="ID"
          {...register("userId")}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          className=""
          type="text"
          id="password"
          placeholder="Password"
          {...register("password")}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
