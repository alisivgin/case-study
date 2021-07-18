import { connect } from "react-redux";
import { applyFilter } from "../store/actions";

export function mapStateToProps({ productTypes, filters }) {
  return {
    productTypes: Object.keys(productTypes),
    selected: filters.productType,
  };
}

const mapDispatchToProps = { applyFilter };

export default connect(mapStateToProps, mapDispatchToProps);
