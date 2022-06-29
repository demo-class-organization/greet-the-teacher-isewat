import { greet } from "./greet.js";

describe("Greeting function", () => {
  it("should return 'Hello Teacher!' when called with 'Ralf'", () => {
    expect(greet("Ralf")).toBe("Hello Teacher!");
  });
  it("should return 'Hello Teacher!' when called with 'Thomas'", () => {
    expect(greet("Thomas")).toBe("Hello Teacher!");
  });
  it("should return 'Hello Student!' when called with 'Jerry'", () => {
    expect(greet("Jerry")).toBe("Hello Student!");
  });
});
