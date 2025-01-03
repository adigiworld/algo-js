import { twoCrystalBalls } from "../twoCrystalBalls";

test("Two Crystal Balls Algo", () => {
  const data = new Array(10000).fill(false);
  const idx = Math.floor(Math.random() * 10000);
  for (let i = idx; i < data.length; i += 1) {
    data[i] = true;
  }
  expect(twoCrystalBalls(data)).toEqual(idx);
  expect(twoCrystalBalls(new Array(1000).fill(false))).toEqual(-1);
});
