import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={49.99}
          title="Ksh0 - 50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100.99}
          title="Ksh50 - Ksh100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={149.99}
          title="Ksh100 - Ksh150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over Ksh150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
