import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>404 Not Found!</h1>
      <p>{err?.error?.message}</p>
    </div>
  );
};

export default ErrorPage;
