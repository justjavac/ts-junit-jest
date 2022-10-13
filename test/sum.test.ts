import Jest, { Test, DisplayName } from "../src";

@Jest
export class SumTest {
  @Test
  @DisplayName("adds 1 + 2 to equal 3")
  add() {
    expect(1 + 2).toBe(3);
  }
}
