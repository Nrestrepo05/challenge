import { act, fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe("<Button/>", () => {
  it('renders', async () => {
    await act(async () => {
      return render(<Button title="Reverse List" />)
    });
    screen.getByText("Reverse List");
  });
  it("onClick is called", async () => {
    const mockHandleClick = jest.fn();
    await act(async () => {
      return render(<Button title="Reverse List" onClick={mockHandleClick}/>)
    });
    const button = screen.getByText("Reverse List");
    fireEvent.click(button);
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  })
})
