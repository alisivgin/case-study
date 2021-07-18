import { connect } from "react-redux";
import { applyFilter, applySort } from "../store/actions";

export function mapStateToProps(
  { tags, brands, companies, filters, sort },
  { type }
) {
  let props = {};
  switch (type) {
    default:
    case "sorting":
      props = {
        title: "Sorting",
        data: [
          {
            slug: "price-low-to-high",
            text: "Price low to High",
            type: "sorting",
            selected: sort === "price-low-to-high",
          },
          {
            slug: "price-high-to-low",
            text: "Price high to low",
            type: "sorting",
            selected: sort === "price-high-to-low",
          },
          {
            slug: "new-to-old",
            text: "New to old",
            type: "sorting",
            selected: sort === "new-to-old",
          },
          {
            slug: "old-to-new",
            text: "Old to new",
            type: "sorting",
            selected: sort === "old-to-new",
          },
        ],
      };
      break;
    case "brands":
      props = {
        title: "Brands",
        data: Object.keys(brands).reduce((acc, b) => {
          return [
            ...acc,
            {
              slug: b,
              text: companies.data[b].name,
              count: brands[b],
              type,
              selected: filters.brands.includes(b),
            },
          ].sort((a, b) => b.selected - a.selected);
        }, []),
      };
      break;
    case "tags":
      props = {
        title: "Tags",
        data: Object.keys(tags).reduce((acc, t) => {
          return [
            ...acc,
            {
              slug: t,
              text: t,
              count: tags[t],
              type,
              selected: filters.tags.includes(t),
            },
          ].sort((a, b) => b.selected - a.selected);
        }, []),
      };
      break;
  }
  return props;
}

const mapDispatchToProps = { applyFilter, applySort };

export default connect(mapStateToProps, mapDispatchToProps);
