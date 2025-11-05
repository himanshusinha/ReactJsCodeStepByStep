function College({ name, city, website }) {
  return (
    <div
      style={{
        padding: "20px",
        borderBottom: "2px solid #000 ",
        margin: "20px",
        borderRadius: "10px",
        backgroundColor: "#ccc",
        color: "#000",
      }}
    >
      <ul
        style={{
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <li>
          <h2>{name}</h2>
        </li>
      </ul>
      <ul
        style={{
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <li>
          <h2>{city}</h2>
        </li>
      </ul>
      <ul
        style={{
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <li>
          <h2>{website}</h2>
        </li>
      </ul>
    </div>
  );
}
export default College;
