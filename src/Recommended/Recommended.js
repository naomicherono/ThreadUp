import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
          <Button onClickHandler={handleClick} value="Rugged trousers" title="Rugged" />
          <Button onClickHandler={handleClick} value="Black t-shirt" title="T-shirt" />
          <Button onClickHandler={handleClick} value="Black heels" title="heels" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
