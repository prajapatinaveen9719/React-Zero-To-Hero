import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();
  {
    console.log(error);
  }
  return (
    <>
      <h1>Oops! something wents wrong</h1>
      <h2>{error.status+": "+error.statusText}</h2>
    </>
  );
};

export default ErrorComponent;
