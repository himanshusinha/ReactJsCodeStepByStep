import College from "./College";

export default function User({ user }) {
  return (
    <div>
      <h1>User Component</h1>
      <hr />
      <h2>User - {user.name}</h2>
      <h2>Age - {user.age}</h2>
      <h2>Address - {user.address}</h2>
      <hr />
    </div>
  );
}
