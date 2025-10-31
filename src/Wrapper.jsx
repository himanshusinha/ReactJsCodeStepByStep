function Wrapper({ children, color = "green" }) {
  return (
    <div
      style={{
        color: color,
        border: "1px solid green",
        width: "400px",
        marginTop: "20px",
        fontSize: "10px",
      }}
    >
      <h1>{children}</h1>
    </div>
  );
}
export default Wrapper;
