import { searchTodos, filterTodos, paginateTodos } from "../utils";
import todos from "./todos";

describe("When an array of todos is searched", () => {
  it("should return an array of whichever objects include the query string in their titles", () => {
    const expected = "delectus";
    const input = searchTodos(todos, "DELecTus");

    expect(input.length).toEqual(7);
    expect(input[0].title).toEqual(expect.stringContaining(expected));
  });

  it("should return an empty array when the query string is not contained in any title", () => {
    const expected = [];
    const input = searchTodos(todos, "$$#@dD@##");

    expect(input).toEqual(expected);
  });
});

describe("When an array of todos is filtered", () => {
  it("should return an array of whichever objects are completed", () => {
    const input = filterTodos(todos, "true");

    expect(input[0].completed).toEqual(true);
  });

  it("should return an array of whichever objects are not completed", () => {
    const input = filterTodos(todos, "false");

    expect(input[0].completed).toEqual(false);
  });

  it("should return the entire array if all filter is selected", () => {
    const expected = todos.length;
    const input = filterTodos(todos, "all");

    expect(input.length).toEqual(expected);
  });
});

describe("When an array of todos is paginated", () => {
  it("should only return an array the length of the page size", () => {
    const input = paginateTodos(todos, 0, 20).length;

    expect(input).toEqual(20);
  });
});
