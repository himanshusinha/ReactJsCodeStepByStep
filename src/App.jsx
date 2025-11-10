import "./css/style.css";
import { useFormStatus } from "react-dom";
function App() {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 5000));
    console.log("submitted");
  };
  const CustomerForm = () => {
    const { pending } = useFormStatus();
    console.log(pending);
    return (
      <div>
        <h1>useFormStatus Hook in React JS 19</h1>
        <input type="text" placeholder="Enter name" />
        <br />
        <br />
        <input type="password" placeholder="Enter password" />
        <br />
        <br />
        <button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </div>
    );
  };
  return (
    <form action={handleSubmit}>
      <CustomerForm />
    </form>
  );
}

export default App;
