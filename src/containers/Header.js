import { connect } from "react-redux";
import { showBottomSheet } from "../store/actions";

export function mapStateToProps({ chart, products }) {
  const totalPrice = Object.keys(chart).reduce((acc, pSlag) => {
    return acc + chart[pSlag] * products.data[pSlag].price;
  }, 0);
  return {
    totalPrice: totalPrice.toFixed(2).replace(".", ","),
  };
}

const mapDispatchToProps = { showBottomSheet };

export default connect(mapStateToProps, mapDispatchToProps);
