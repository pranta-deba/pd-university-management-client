import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PDForm from "../components/form/PDForm";
import PDInput from "../components/form/PDInput";
import { Row } from "antd";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const defaultValues = {
    userId: 'A-0002',
    password: 'admin1234',
  };

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
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <PDForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="userId">ID: </label>
          <PDInput name="userId" placeholder="ID" type="text" />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password">Password: </label>
          <PDInput name="password" placeholder="Password" type="text" />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <button type="submit">Login</button>
        </div>
      </PDForm>
    </Row>
  );
};

export default Login;
