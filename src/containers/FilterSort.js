import { connect } from "react-redux";
import { showBottomSheet, closeBottomSheet } from "../store/actions";

export function mapStateToProps({ filters: { brands, tags } }) {
  return {
    brandFilterCount: brands.length,
    tagFilterCount: tags.length,
  };
}

const mapDispatchToProps = { showBottomSheet, closeBottomSheet };

export default connect(mapStateToProps, mapDispatchToProps);
