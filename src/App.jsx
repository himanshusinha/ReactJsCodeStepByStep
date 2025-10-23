import "./App.css";

import Login, { Profile, Settings, UserKey } from "./UserComponent";
function App() {
  return (
    <>
      <div>
        <h1>Import and Export Components</h1>
        <Login />
        <Profile />
        <Settings />
        <h2>User Key: {UserKey}</h2>
      </div>
    </>
  );
}
export default App;
