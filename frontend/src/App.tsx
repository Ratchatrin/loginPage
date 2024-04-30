import { useState } from "react";
import "./index.css";
import axios from "axios";
function App() {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [exist, setExist] = useState(false);
  const [complete, setComplete] = useState(false);
  const userSignIn = async () => {
    try {
      if (username && password && email.length !== 0) {
        const user = {
          email,
          username,
          password,
        };
        const response = await axios.post("http://localhost:3000/signin", user);
        console.log(response);
        if (response.data === "Email is Exist") {
          setExist(true);
          setTimeout(() => {
            setExist(false);
          }, 1500);
          setEmail("");
        } else {
          setEmail("");
          setUsername("");
          setPassword("");
          setComplete(true);
          setTimeout(() => {
            setComplete(false);
          }, 1500);
        }
      } else {
        setEmpty(true);
        setTimeout(() => {
          setEmpty(false);
        }, 1500);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="text-5xl underline font-bold">Sign In</p>
        <div className="flex flex-col justify-center ">
          <label className="input input-bordered flex items-center gap-2 mt-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow"
              placeholder="example@email.com"
              onChange={(ev) => {
                setEmail(ev.target.value);
              }}
              value={email}
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2  mt-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              onChange={(ev) => {
                setUsername(ev.target.value);
              }}
              value={username}
              required
            />
          </label>
          {!showPassword ? (
            <>
              <label className="input input-bordered flex items-center gap-2  mt-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  onChange={(ev) => {
                    setPassword(ev.target.value);
                  }}
                  value={password}
                  required
                />
                <label className="swap">
                  <input type="checkbox" />
                  <div
                    className="swap-on"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    Hide
                  </div>
                  <div className="swap-off">Show</div>
                </label>
              </label>
            </>
          ) : (
            <>
              <label className="input input-bordered flex items-center gap-2  mt-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Password"
                  onChange={(ev) => {
                    setPassword(ev.target.value);
                  }}
                  value={password}
                />
                <label className="swap">
                  <input type="checkbox" />
                  <div className="swap-on">Hide</div>
                  <div
                    className="swap-off"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    Show
                  </div>
                </label>
              </label>
            </>
          )}
          <button
            className="btn btn-active btn-primary mt-4"
            onClick={userSignIn}
          >
            Sign In
          </button>
          <div className="absolute bottom-20 left-0 w-full flex justify-center items-center">
            {!empty ? (
              <></>
            ) : (
              <>
                <div
                  role="alert"
                  className="alert alert-warning mt-10  w-10/12"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Please fill in the blank.</span>
                </div>
              </>
            )}
          </div>
          <div className="absolute bottom-20 left-0 w-full flex justify-center items-center">
            {!exist ? (
              <></>
            ) : (
              <>
                <div
                  role="alert"
                  className="alert alert-warning mt-10  w-10/12"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Email is exist.</span>
                </div>
              </>
            )}
          </div>
          <div className="absolute bottom-20 left-0 w-full flex justify-center items-center">
            {!complete ? (
              <></>
            ) : (
              <>
                <div
                  role="alert"
                  className="alert alert-success mt-10  w-10/12"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Complete</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
