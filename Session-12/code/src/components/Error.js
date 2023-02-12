import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div className="error-page">
        Error : {err.status + " " + err.statusText}
        <Link to="/">
          <button className="error-go-back">Home</button>
        </Link>
      </div>
    </>
  );
};
export default Error;
