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
      return { error: "Failed to Submit. Enter proper data", name, password };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, {});

  return (
    <div>
      <h1>useActionState Hook in React 19</h1>
      <form action={action}>
        <input
          defaultValue={data?.name}
          type="text"
          name="name"
          placeholder="Enter name"
        />
        <br />
        <br />
        <input
          defaultValue={data?.password}
          type="password"
          name="password"
          placeholder="Enter password"
        />
        <br />
        <br />
        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit Data"}
        </button>
        <br />
        <br />
        {data.error && <span style={{ color: "red" }}>{data.error}</span>}
        {data.message && <span style={{ color: "green" }}>{data.message}</span>}

        <h4>Name: {data.name || ""}</h4>
        <h4>Password: {data.password || ""}</h4>
      </form>
    </div>
  );
}

export default App;
