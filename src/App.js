import Login from "./Login";
import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          {/* Header */}
          <Header />

          {/* App Body */}
          <div className="app__body">
            {/* Sidebar */}
            <Sidebar />

            {/* Feed */}
            <Feed />

            {/* Widgets */}
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
