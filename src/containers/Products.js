import { connect } from "react-redux";
import { addToChart } from "../store/actions";

const sortOptions = {
  "price-low-to-high": (a, b) => a.price - b.price,
  "price-high-to-low": (a, b) => b.price - a.price,
  "new-to-old": (a, b) => a.added - b.added,
  "old-to-new": (a, b) => b.added - a.added,
};

export function mapStateToProps({ products, filters, sort }) {
  const filteredProducts = filter(products, filters);
  return {
    products: sortProducts(filteredProducts, sort),
    lifecycle: products.lifecycle,
  };
}

const mapDispatchToProps = { addToChart };

export default connect(mapStateToProps, mapDispatchToProps);

function filter(products, filters) {
  return Object.values(products.data).filter((p) => {
    let isOk = true;
    if (filters.brands.length > 0) {
      isOk = filters.brands.includes(p.manufacturer);
      if (!isOk) return false;
    }
    if (filters.tags.length > 0) {
      const diffFromProductTags = filters.tags.filter(
        (x) => !p.tags.includes(x)
      );
      isOk = diffFromProductTags.length === 0;
      if (!isOk) return false;
    }
    if (filters.productType > "") {
      isOk = filters.productType === p.itemType;
      if (!isOk) return false;
    }
    return isOk;
  });
}

function sortProducts(products, sortFor) {
  return products.sort(sortOptions[sortFor]);
}
