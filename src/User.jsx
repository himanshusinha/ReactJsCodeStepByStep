import College from "./College";

export default function User() {
  const displayName = (name) => {
    alert(name);
  };
  return (
    <div>
      <h1>User Component</h1>
      <button onClick={displayName("Himanshu")}>Submit</button>
    </div>
  );
}
