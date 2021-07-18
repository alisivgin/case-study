import { connect } from "react-redux";
import { setActivePage } from "../store/actions";

export function mapStateToProps({ pagination: { activeNumber, pageCount } }) {
  return {
    activeNumber,
    pageCount,
  };
}

const mapDispatchToProps = { setActivePage };

export default connect(mapStateToProps, mapDispatchToProps);
