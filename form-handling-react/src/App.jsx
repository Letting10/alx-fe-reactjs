import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Form Handling in React</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Manual Validation</h2>
        <RegistrationForm />
      </div>

      <hr className="my-6" />

      <div>
        <h2 className="text-xl font-semibold mb-2">Formik Validation</h2>
        <FormikForm />
      </div>
    </div>
  );
}

export default App;
