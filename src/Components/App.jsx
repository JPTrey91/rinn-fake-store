import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { stockItems } from "../features/shopSlice.js";
import "../index.css";
import Router from "./Router.jsx";

function App() {
  const [FetchFailed, setFetchFailed] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [Loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  function fetchItems() {
    try {
      fetch("https://dummyjson.com/products", { mode: "cors" })
        .then((result) => result.json())
        .then((json) => dispatch(stockItems(json.products)))
        .finally(setLoading(false));
    } catch (err) {
      setErrorMessage(`${err}`);
      setFetchFailed(true);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      {FetchFailed && (
        <>
          <div id="modal">
            <div id="modal-message">
              <p>{`Looks like we failed to get the data necessary here!`}</p>
              <p>{`(${ErrorMessage})`}</p>
              <button onClick={() => location.reload()}>Refresh</button>
            </div>
          </div>
        </>
      )}
      {!FetchFailed && Loading && (
        <>
          <div id="modal">
            <div id="modal-message">
              <p>{`Loading...`}</p>
            </div>
          </div>
        </>
      )}
      {!FetchFailed && !Loading && <Router />}
    </>
  );
}

export default App;

// Do the fetch
// Create & Provide the context
// Render the header (with passed context)
// Render the Router
