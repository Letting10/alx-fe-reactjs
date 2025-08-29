// src/components/formikForm.js
import { Formik, Form, Field, ErrorMessage } from "formik";

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.username) errors.username = "Username is required";
        if (!values.email) errors.email = "Email is required";
        if (!values.password) errors.password = "Password is required";
        return errors;
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {() => (
        <Form className="space-y-4">
          <div>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className="border p-2 w-full"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500"
            />
          </div>

          <div>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="border p-2 w-full"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500"
            />
          </div>

          <div>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="border p-2 w-full"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500"
            />
          </div>

          <button type="submit" className="bg-green-500 text-white px-4 py-2">
            Register with Formik
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
