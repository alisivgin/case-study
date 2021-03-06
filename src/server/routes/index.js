export default function routes() {
  this.get("/", () => {
    return { status: "OK" };
  });

  this.get("/companies", (schema, request) => {
    return schema.db.companies;
  });

  this.get("/items", (schema, request) => {
    return schema.db.items;
  });
}
