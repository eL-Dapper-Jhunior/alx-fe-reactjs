import ControlledForm from "./components/ControlledForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div>
      <h1>Controlled Form</h1>
      <ControlledForm />
      <h1>Formik Form</h1>
      <FormikForm />
    </div>
  );
}

export default App;
