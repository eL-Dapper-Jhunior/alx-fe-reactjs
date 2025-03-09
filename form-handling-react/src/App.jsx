
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <h1>User Registratiion</h1>
        <RegistrationForm />

        <h1>User Registration</h1>
      <FormikForm />
      </div>
      
    </>
  );
}

export default App;
