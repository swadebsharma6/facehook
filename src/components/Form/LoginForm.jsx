import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    // Make an Api Call will return and Login user info

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        data
      );
      console.log(response);

      if (response.status === 200) {
        const { token, user } = response.data;
        if (token) {
          const authToken = token.token;
          const refreshToken = token.refreshToken;

          console.log(`Login time auth Token: ${authToken}  `);
          setAuth({ user, authToken, refreshToken });

          navigate("/");
        }
      }
    } catch (error) {
      // console.log(error);
      setError("root.random", {
        type: "random",
        message: `User with email ${data.email} is not found`,
      });
    }
  };

  return (
    <div className="card">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      >
        <div className="form-control">
          <label className="auth-label" htmlFor="email">
            Email
          </label>
          <input
            className="auth-input"
            name="email"
            {...register("email", { required: true })}
            type="email"
            id="email"
          />
          {errors.email && (
            <span className="text-red-600">Email field is required</span>
          )}
        </div>

        <div className="form-control">
          <label className="auth-label" htmlFor="email">
            Password
          </label>
          <input
            className="auth-input"
            name="password"
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            id="password"
          />
          {errors.password && (
            <span className="text-red-600">
              Password field is required and 6 Characters
            </span>
          )}
        </div>
        <p>{errors?.root?.random?.message}</p>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </form>

      <div className="py-4 lg:py-6">
        <Link
          to="/register"
          className="text-center text-xs text-gray-600/95 lg:text-sm"
        >
          Do not have account?
          <span className="text-white transition-all hover:text-lwsGreen hover:underline mx-3">
            {" "}
            Create New Account
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
