import React from "react";
import { removeFeature } from "../actions/carActions";
import { connect } from "react-redux";

const AddedFeature = props => {
  // console.log("props: ", props);
  // console.log("props.feature: ", props.feature);
  // console.log("props.features: ", props.features);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => props.removeFeature(props.feature)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    addtionalPrice: state.additionalPrice,
    features: state.car.features
  };
};
export default connect(mapStateToProps, { removeFeature })(AddedFeature);
