import { connect } from "react-redux";
import { showBottomSheet, closeBottomSheet } from "../store/actions";

export function mapStateToProps({ bottomSheet: { show, content } }) {
  return {
    show,
    content,
  };
}

const mapDispatchToProps = { showBottomSheet, closeBottomSheet };

export default connect(mapStateToProps, mapDispatchToProps);
