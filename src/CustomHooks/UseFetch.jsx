/**
 * @file useFetch.jsx
 * @brief useFetch custom hook
 * @version 1.0
 * @date 2022-12-09
 * @author Hoang Quoc Le
 */
import React, { useState, useEffect } from "react";

function UseFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
            setIsPending(false);
            setError(err.message);
        });
    }, 500);
    // Intentionally gave the fetch a delay of 500ms to show the loading screen
  }, [url]);

  return { data, isPending, error };
}

export default UseFetch;
