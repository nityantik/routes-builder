import RoutesBuilder from "../src/routes-builder";

test("set route", () => {
  const result = RoutesBuilder.route("/api/users");
  expect(result.get()).toMatch("/api/users");
});

test("get route throw exception parameter key not exist in route", () => {
  const result = RoutesBuilder.route("/api/users/{id}");
  expect(() => result.param("test", "1")).toThrow(
    "{test} does not exist in given route",
  );
});

test("get route throw exception if parameter not set", () => {
  const result = RoutesBuilder.route("/api/users/{id}");
  expect(() => result.get()).toThrow("{id} value has not been set");
});

test("set route params", () => {
  const result = RoutesBuilder.route("/api/users/{id}").param("id", 1).get();
  expect(result).toEqual("/api/users/1");
});

test("set route params with query", () => {
  const result = RoutesBuilder.route("/api/users/{id}")
    .param("id", 1)
    .query("verified", true)
    .get();
  expect(result).toEqual("/api/users/1?verified=true");
});

test("set route with multiple query", () => {
  const result = RoutesBuilder.route("/api/users")
    .query("search", "test")
    .query("name", "abc")
    .get();
  expect(result).toEqual(`/api/users?search=test&name=abc`);
});
