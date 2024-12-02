import { useNavigate } from "react-router-dom";
const CardHome = () => {
  const Navigate = useNavigate();
  return (
    <>
      <h3>HOMEPAGE ROUTE</h3>
      <button onClick={() => Navigate("/about")}>CHECK ABOUT</button>
    </>
  );
};

export default CardHome;
