import logo from "./logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const success = () =>
    toast.success("Success!", {
      position: "top-left",
      theme: "light",
    });

  const info = () =>
    toast.info("Information!", {
      position: "top-center",
      theme: "light",
    });

  const warning = () =>
    toast.warning("Warning!", {
      position: "bottom-center",
      theme: "light",
    });

  const error = () =>
    toast.error("Error!", {
      position: "top-right",
      theme: "light",
    });
  const defaultFunc = () =>
    toast("Default!", {
      position: "bottom-right",
      theme: "colored",
    });

  const successDark = () =>
    toast.success("Success!", {
      position: "top-left",
      theme: "dark",
    });

  const infoDark = () =>
    toast.info("Information!", {
      position: "top-center",
      theme: "dark",
    });

  const warningDark = () =>
    toast.warning("Warning!", {
      position: "bottom-center",
      theme: "dark",
    });

  const errorDark = () =>
    toast.error("Error!", {
      position: "top-right",
      theme: "dark",
    });

  const defaultFuncDark = () =>
    toast("Default!", {
      position: "bottom-right",
      hideProgressBar: true,
      theme: "dark",
    });

  return (
    <div className="App">
      <div className="menu">
        <button onClick={success} className="button-toastify" id="success">
          Success Light
        </button>
        <button onClick={info} className="button-toastify" id="info">
          Information Light
        </button>
        <button onClick={warning} className="button-toastify" id="warning">
          Warning Light
        </button>
        <button onClick={error} className="button-toastify" id="error">
          Error Light
        </button>
        <button onClick={defaultFunc} className="button-toastify" id="default">
          Default
        </button>

        <button onClick={successDark} className="button-toastify" id="success">
          Success Dark
        </button>
        <button onClick={infoDark} className="button-toastify" id="info">
          Information Dark
        </button>
        <button onClick={warningDark} className="button-toastify" id="warning">
          Warning Dark
        </button>
        <button onClick={errorDark} className="button-toastify" id="error">
          Error Dark
        </button>
        <button
          onClick={defaultFuncDark}
          className="button-toastify"
          id="default"
        >
          Default Dark
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
