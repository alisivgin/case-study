import { connect } from "react-redux";

const sortProps = {
  title: "Sorting",
  data: [
    { type: "price-low-to-high", text: "Price low to High" },
    { type: "price-high-to-low", text: "Price high to low" },
    { type: "new-to-old", text: "New to old" },
    { type: "old-to-new", text: "Old to new" },
  ],
};

export function mapStateToProps({ tags, brands, companies }, { type }) {
  let props = {};
  switch (type) {
    default:
    case "sorting":
      props = sortProps;
      break;
    case "brands":
      props = {
        title: "Brands",
        data: Object.keys(brands).reduce((acc, b) => {
          return [
            ...acc,
            { type: b, text: companies.data[b].name, count: brands[b] },
          ];
        }, []),
      };
      break;
    case "tags":
      props = {
        title: "Tags",
        data: Object.keys(tags).reduce((acc, t) => {
          return [...acc, { type: t, text: t, count: tags[t] }];
        }, []),
      };
      break;
  }
  return props;
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps);
