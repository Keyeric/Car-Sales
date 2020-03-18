import React from "react";

const Total = props => {
  console.log("Total: ", props);
  console.log("Total(additional price): ", props.additionalPrice);
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    addtionalPrice: state.additionalPrice,
    price: state.car.price
  };
};
export default connect(mapStateToProps, {})(Total);
