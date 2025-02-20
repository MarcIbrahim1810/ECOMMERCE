import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input, Button } from "@heroui/react";
import { UserContext } from '../../Context/UserContext';


export default function Login() {
let { setUserLogin } = useContext(UserContext);
  let validationSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/).required("Password is Required and must Start with UpperCase"),
  })


  const [isLoading, setIsLoading] = useState(false)

  let navigate = useNavigate();

  const [apiError, setapiError] = useState("")
  function handleLogin(formValues) {
    setIsLoading(true);
    axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formValues)
      .then((apiResponse) => {
        if (apiResponse.data.message === 'success') {
          localStorage.setItem('userToken', apiResponse.data.token);
          setUserLogin(apiResponse.data.data);
          setIsLoading(false);
          navigate('/')
        }
      })
      .catch((apiResponse) => {
        setIsLoading(false);
        setapiError(apiResponse?.response?.data?.message)
      });
  }





  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleLogin
  })




  return (
    <>
      <div className='py-6 max-w-xl mx-auto'>

        {apiError ? <div className="p-4 mb-4 w-full  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {apiError}
        </div> : null}
        <h2 className='text-3xl font-bold mb-6 text-green-600'>Login Now</h2>

        <Form onSubmit={formik.handleSubmit}>
          <div className="w-2/3 mx-auto grid grid-cols-2 gap-4">

          </div>





          <div className="relative z-0 w-full mb-5 group">
            <Input id="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" className="" placeholder=" " />
            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email Adress :</label>
          </div>

          {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 w-full text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.email}
          </div> : null}






          <div className="relative z-0 w-full mb-5 group">
            <Input id="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password" className="" placeholder=" " />
            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password :</label>
          </div>

          {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 w-full  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.password}
          </div> : null}



          <div className="flex iteems-center">


            <Button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              {isLoading ? <i className='fas fa-spinner fa-spin'></i> : "Login"}
            </Button>

            <p className='pl-5'>didn't have account yet ? <span className='font-semibold'><Link to={'/register'}>Register Now</Link></span></p>
          </div>
        </Form>



      </div>
    </>
  )
}
