import { createSelector } from "reselect";

const makeSelectData = (type) => {
  switch (type) {
    default:
    case "sorting":
      return createSelector([(state) => state.sort], (sort) => [
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
      ]);
    case "brands":
      return createSelector(
        [
          (state) => state.brands,
          (state) => state.companies,
          (state) => state.filters,
        ],
        (brands, companies, filters) => {
          return Object.keys(brands).reduce((acc, b) => {
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
          }, []);
        }
      );
    case "tags":
      return createSelector(
        [(state) => state.filters, (state) => state.tags],
        (filters, tags) => {
          return Object.keys(tags).reduce((acc, t) => {
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
          }, []);
        }
      );
  }
};

const makeSelectTitle = createSelector(
  (_, type) => type,
  (type) => {
    switch (type) {
      default:
      case "sorting":
        return "Sorting";
      case "brands":
        return "Brands";
      case "tags":
        return "Tags";
    }
  }
);

export { makeSelectTitle, makeSelectData };
