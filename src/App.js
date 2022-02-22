import { useState, useEffect } from "react";
import Login from "./login";
import Mainpage from "./Main";
import firebase from "./firebase.js";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  console.log(user);

  return (
    <div className="app">{user ? <Mainpage user={user} /> : <Login />} </div>
  );
}

export default App;
