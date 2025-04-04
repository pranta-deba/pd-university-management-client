import { FieldValues, useForm, useFormContext } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PDForm from "../components/form/PDForm";
import PDInput from "../components/form/PDInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: "A-0002",
  //     password: "admin1234",
  //   },
  // });
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // const toastId = toast.loading("login in....");

    // try {
    //   const userInfo = {
    //     id: data.userId,
    //     password: data.password,
    //   };

    //   const res = await login(userInfo).unwrap();
    //   const user = verifyToken(res.data.accessToken) as TUser;
    //   dispatch(setUser({ user, token: res.data.accessToken }));
    //   toast.success("Login success", { id: toastId });
    //   navigate(`/${user.role}/dashboard`);
    // } catch (error) {
    //   console.log(error);
    //   toast.error("something went wrong", { id: toastId });
    // }
  };

  return (
    <PDForm onSubmit={onSubmit}>
      <div>
        <label htmlFor="userId">ID: </label>
        <PDInput name="userId" placeholder="ID" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <PDInput name="password" placeholder="Password" type="text" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </PDForm>
  );
};

export default Login;
