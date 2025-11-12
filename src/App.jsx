import { useActionState } from "react";
import "./css/style.css";

function App() {
  const handleSubmit = async (previousData, formData) => {
    const name = formData.get("name");
    const password = formData.get("password");
    console.log("handleSubmit data", name, password);
    await new Promise((res) => setTimeout(res, 3000));

    if (name && password) {
      return { message: "Data Submitted", name, password };
    } else {
      return { error: "Failed to Submit. Enter proper data" };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, {});

  console.log("Form state:", data);

  return (
    <div>
      <h1>useActionState Hook in React 19</h1>
      <form action={action}>
        <input type="text" name="name" placeholder="Enter name" />
        <br />
        <br />
        <input type="password" name="password" placeholder="Enter password" />
        <br />
        <br />
        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit Data"}
        </button>
        <br />
        <br />
        {data.error && <span style={{ color: "red" }}>{data.error}</span>}
        {data.message && <span style={{ color: "green" }}>{data.message}</span>}

        <h2>Name: {data.name || ""}</h2>
        <h2>Password: {data.password || ""}</h2>
      </form>
    </div>
  );
}

export default App;
