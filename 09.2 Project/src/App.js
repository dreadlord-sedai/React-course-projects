import { useState } from "react";
import InputForm from "./components/UserInput/InputForm";
import UserCard from "./components/UserInfo/UserCard";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (username, age) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: Math.random().toString(), username: username, age: age },
    ]);
  };

  return (
    <div>
      <header>
        <h1>User Input Form</h1>
      </header>

      <InputForm onAddUser={addUserHandler} />

      {users.map((user) => (
        <UserCard key={user.id} username={user.username} age={user.age} />
      ))}
    </div>
  );
}

export default App;
