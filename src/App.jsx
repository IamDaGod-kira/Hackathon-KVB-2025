import "./App.css";
import Home from "./components/home";
import { useState } from "react";

function App() {
  const [isRendered, setIsRendered] = useState(true);

  if (isRendered) {
    return (
      <div className="body1 div1">
        <main className="content">
          <section className="section">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsRendered(false);
              }}
            >
              <h1>Login for PM Shri Kendriya Vidyalaya Ballygunge</h1>
              <h2>
                <label htmlFor="email">Enter Email ID</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email ID"
                  required
                />
              </h2>
              <h2>
                <label htmlFor="username">Enter Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter username"
                  required
                />
              </h2>
              <h2>
                <label htmlFor="password">Enter Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password required"
                  required
                />
              </h2>
              <h2>
                <label htmlFor="unique-id">Enter Unique ID</label>
                <input
                  type="text"
                  id="unique-id"
                  name="unique-id"
                  placeholder="Unique ID"
                  required
                />
              </h2>
              <button className="button1" type="submit">
                Login to go to school website
              </button>
            </form>
          </section>
        </main>
      </div>
    );
  } else {
    return <Home />;
  }
}

export default App;
