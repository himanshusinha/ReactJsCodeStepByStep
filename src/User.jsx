export default function User({ display, name, getUser }) {
  return (
    <div>
      <h1>User Component</h1>
      <button onClick={() => display(name)}>Submit</button>
      <button onClick={() => getUser()}>Submit</button>
    </div>
  );
}
