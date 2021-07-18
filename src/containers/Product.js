import { connect } from "react-redux";
import { addToChart } from "../store/actions";

const mapDispatchToProps = { addToChart };

export default connect(null, mapDispatchToProps);
