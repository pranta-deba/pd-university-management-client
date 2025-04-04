import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0002",
      password: "admin1234",
    },
  });
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("login in....");

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Login success", { id: toastId });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong", { id: toastId });
    }
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
