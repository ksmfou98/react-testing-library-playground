import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("the counter starts at 0", () => {
  // Counter 컴포넌트 랜더링
  render(<Counter />);
  // screen object를 이용해서 원하는 엘리먼트에 접근(접근할 때 ID로)
  const counterElement = screen.getByTestId("counter");
  // id가 counter인 엘리먼트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text", () => {
  render(<Counter />);
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(minusButtonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<Counter />);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toHaveTextContent("+");
});

test("counter increments when plus button is clicked", () => {
  render(<Counter />);
  const plusButtonElement = screen.getByTestId("plus-button");
  // 클릭하면 카운터가 1씩 증가
  plusButtonElement.click();
  // fireEvent 이용한 방식 : fireEvent.click(plusButtonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("counter decrements when minus button is clicked", () => {
  render(<Counter />);
  const minusButtonElement = screen.getByTestId("minus-button");
  minusButtonElement.click();
  // fireEvent 이용한 방식 : fireEvent.click(minusButtonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});
