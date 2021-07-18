import { connect } from "react-redux";
import { addToChart } from "../store/actions";

export function mapStateToProps() {
  return {};
}

const mapDispatchToProps = { addToChart };

export default connect(mapStateToProps, mapDispatchToProps);
