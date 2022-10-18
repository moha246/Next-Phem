/* eslint-disable @next/next/no-img-element */
import { Spinner } from "@chakra-ui/react";
import CustomHead from "@components/Utilities/CustomHead/CustomHead";
import { signinServerSideHelper } from "@helpers/signin-serverside.helper";
import { useSigninValidationSchema } from "@hooks/formValidationSchema/UseSigninFormValidationSchema.hook";
import { useSigninUserLocal } from "@hooks/reusables/useSiginUser.hook";
import { signinUser } from "@services/mutation/siginUser.service";
import React from "react";

const Login = () => {
  const { isLoading, mutate, isSuccess } = useSigninUserLocal({
    mutationFn: signinUser,
  });
  const { formik } = useSigninValidationSchema(mutate);

  return (
    <section>
      <CustomHead title={`Log in | Join the community`} />

      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 font-sans">
        <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
            <div className="w-full px-6 py-3">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex items-center w-full">
                    <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">
                      Sign up
                    </h3>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <label htmlFor="username" className="sr-only">
                      Username
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      onBlur={formik.handleBlur}
                      disabled={isLoading || isSuccess}
                      type="text"
                      name="username"
                      id="username"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 mb-4"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                      disabled={isLoading || isSuccess}
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex flex-col mt-4 lg:space-y-2">
                    <button
                      disabled={isLoading || isSuccess}
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {isLoading ? (
                        <span className="uk-animation-fade">
                          <Spinner size={"sm"} /> Please wait...
                        </span>
                      ) : (
                        "Sign In"
                      )}
                    </button>
                    <a
                      href="#"
                      type="button"
                      className="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"
                    >
                      {" "}
                      Forgot your Password?{" "}
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="order-first hidden w-full lg:block">
              <img
                className="object-cover h-full bg-cover rounded-l-lg"
                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(ctx) {
  const signinReturns = signinServerSideHelper(ctx);
  return signinReturns;
}

export default Login;
