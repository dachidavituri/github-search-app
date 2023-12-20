import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Mode from "./components/Mode.tsx";
import Search from "./components/Search.tsx";
import Content from "./components/Content.tsx";
import octobat from "./components/data.ts";
function App() {
  interface User {
    login: string;
    avatar_url: string;
    name: string;
    created_at: string;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
    location: string;
    blog: string;
    twitter_username: string | null;
    company: string;
  }
  const [isLight, setIsLight] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [url, setUrl] = useState("https://api.github.com/users/");
  const [user, setUser] = useState<User | null>(null);
  const [result, setResult] = useState(true);
  const handleuserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };
  const logUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUrl(`https://api.github.com/users/${userInput}`);
    setUserInput("");
    console.log(user);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          console.log("can't found");
          setResult(false);
          return;
        }
        const data = await response.json();
        setUser(data);
        setResult(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (url === "https://api.github.com/users/") {
      setUser(octobat);
    } else {
      fetchData();
    }
  }, [url]);

  return (
    <div className={`App ${isLight ? "light-mode" : "dark-mode"}`}>
      <div className="main-container">
        <Mode isLight={isLight} setIsLight={setIsLight} />
        <Search
          value={userInput}
          handleInput={handleuserInput}
          fetch={logUser}
          result={result}
        />
        {result ? null : <p className="error-below">no result</p>}
        <Content user={user} />
      </div>
    </div>
  );
}

export default App;
