import { connect } from "react-redux";
import { addToChart, removeFromChart } from "../store/actions";

export function mapStateToProps({ chart, products }) {
  const items = Object.keys(chart).reduce((acc, pSlug) => {
    return [...acc, { ...products.data[pSlug], count: chart[pSlug] }];
  }, []);
  const totalPrice = items.reduce((acc, p) => acc + p.count * p.price, 0);
  return {
    products: items,
    totalPrice: totalPrice,
  };
}

const mapDispatchToProps = { addToChart, removeFromChart };

export default connect(mapStateToProps, mapDispatchToProps);
