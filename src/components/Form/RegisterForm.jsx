import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="card">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      >
        <div className="form-control">
          <label className="auth-label" htmlFor="name">
            Name
          </label>
          <input
            className="auth-input"
            name="name"
            {...register("name", { required: true })}
            type="text"
            id="name"
          />
          {errors.name && (
            <span className="text-red-600">Name field is required</span>
          )}
        </div>
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

        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Register
        </button>
      </form>
      <div className="py-4 lg:py-6">
        <Link
          to="/login"
          className="text-center text-xs text-gray-600/95 lg:text-sm"
        >
          Already have an account?
          <span className="text-white transition-all hover:text-lwsGreen hover:underline mx-3">
            Login Now !{" "}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
