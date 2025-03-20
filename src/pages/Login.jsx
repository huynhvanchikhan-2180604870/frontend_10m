import React from "react";
import * as Yup from "yup";

import "../assets/style/login.css";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/Authentication/Action";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      try{
        dispatch(loginUser(values))
        enqueueSnackbar('Login success',{
          variant: 'success'
        })
        navigate('/home')
      }catch(error){
        enqueueSnackbar(`error has: ${error}`, {
          variant: "error"
        })
      }
    },
  });

  return (
    <div className="h-full min-h-[90vh] w-full bg-gray-200 justify-center items-stretch flex">
      <div className="border-none w-[60vw]  mt-3 rounded-2xl bg-white shadow__form flex-col justify-center items-center">
        <div className="mt-2 text-3xl font-bold text-center group cursor-pointer">
          <h2>Welcome back</h2>
          <hr className="h-[4px] w-[100px] rounded-2xl border-none outline-none bg-amber-600 text-center m-auto transition-all duration-300 group-hover:w-[150px]" />
        </div>

        <div className="border-none w-[90%] h-[90%] m-auto rounded-xl bg__login mt-2 relative">
          {/* Form có hiệu ứng overlay mờ */}
          <form
            onSubmit={formik.handleSubmit}
            className="absolute inset-0 flex-col w-[90%] h-[90%] m-auto bg-white/50 backdrop-blur-sm rounded-2xl bg__form items-center justify-center"
          >
            <div className="bg-transparent w-full p-2 ms-2 mt-5 relative">
              {/* Input */}
              <input
                className="p-3 border border-gray-300 rounded-md text-xl w-full peer outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                type="text"
                placeholder=" " // Để ẩn placeholder mặc định
                required
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {/* Label mô phỏng placeholder */}
              <label
                htmlFor="email"
                className="absolute left-5 top-1/2 -translate-y-1/2 text-amber-600 transition-all
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-amber-600 
              peer-placeholder-shown:text-sm peer-not-placeholder-shown:top-[-10px]
              peer-focus:top-[-10px] peer-focus:text-sm font-bold peer-focus:text-amber-600 bg-transparent px-1"
              >
                Enter your email
              </label>

              {/* Hiển thị lỗi nếu có */}
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-2 font-bold ps-4 bg-transparent">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div className="bg-transparent w-full p-2 ms-2 mt-5 relative">
              {/* Input */}
              <input
                className="p-3 border border-gray-300 rounded-md text-xl w-full peer outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
                type="password"
                placeholder=" "
                required
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {/* Label mô phỏng placeholder */}
              <label
                htmlFor="password"
                className="absolute left-5 top-1/2 -translate-y-1/2 text-amber-600 transition-all
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-amber-600 
              peer-placeholder-shown:text-sm peer-not-placeholder-shown:top-[-10px]
              peer-focus:top-[-10px] peer-focus:text-sm font-bold peer-focus:text-amber-600 bg-transparent px-1"
              >
                Enter your password
              </label>

              {/* Hiển thị lỗi nếu có */}
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-2 font-bold ps-4 bg-transparent">
                  {formik.errors.password}
                </p>
              )}
            </div>

            <div className="m-auto justify-center items-center">
              <button className="text-center justify-center m-auto text-xl">
                Login
                <div className="arrow-wrapper">
                  <div className="arrow" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
