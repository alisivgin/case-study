import { connect } from "react-redux";

export function mapStateToProps({ chart, products }) {
  const totalPrice = Object.keys(chart).reduce((acc, pSlag) => {
    return acc + chart[pSlag] * products.data[pSlag].price;
  }, 0);
  console.log(totalPrice);
  return {
    totalPrice: totalPrice.toFixed(2),
  };
}

export default connect(mapStateToProps);
