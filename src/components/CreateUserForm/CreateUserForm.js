import { Spinner } from "@chakra-ui/react";
import { useCreateUserValidationSchema } from "@hooks/formValidationSchema/useCreateUserValidationSchema";
import { useCreateUser } from "@hooks/reusables/UseCreateUser.hook";
import { createUser } from "@services/mutation/createUser.service";
import React from "react";

const CreateUserForm = () => {
  const { isLoading, mutate, isSuccess } = useCreateUser({
    mutationFn: createUser,
  });
  const { formik } = useCreateUserValidationSchema(mutate);

  return (
    <section className="font-sans">
      <div className=" items-center px-5 py-12 lg:px-20">
        <div className="flex flex-col w-full p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      First Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="firstname"
                        name="firstname"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                        onBlur={formik.handleBlur}
                        disabled={isLoading || isSuccess}
                        placeholder="Your first name"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="lastname"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      Last Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="lastname"
                        name="lastname"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                        onBlur={formik.handleBlur}
                        disabled={isLoading || isSuccess}
                        required
                        placeholder="Your last name"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                  <div>
                    <label
                      htmlFor="group"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      Group
                    </label>
                    <div className="mt-1">
                      <input
                        id="group"
                        name="group"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.group}
                        onBlur={formik.handleBlur}
                        disabled={isLoading || isSuccess}
                        placeholder="Group"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      Role
                    </label>
                    <div className="mt-1">
                      <input
                        id="role"
                        name="role"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.role}
                        onBlur={formik.handleBlur}
                        disabled={isLoading || isSuccess}
                        required
                        placeholder="Role"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      Username
                    </label>
                    <div className="mt-1">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        onBlur={formik.handleBlur}
                        disabled={isLoading || isSuccess}
                        placeholder="Username"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        disabled={isLoading || isSuccess}
                        required
                        placeholder="Password"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading || isSuccess}
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {isLoading ? (
                      <span className="uk-animation-fade">
                        <Spinner size={"sm"} /> Please wait...
                      </span>
                    ) : (
                      "Create User"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateUserForm;
