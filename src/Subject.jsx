import { useContext } from "react";
import { SubjectContext } from "./ContextData";

export default function SubjectComponent() {
  const subject = useContext(SubjectContext);
  return (
    <div style={{ backgroundColor: "red", padding: 10 }}>
      <h1>Subject Component : {subject}</h1>
    </div>
  );
}
