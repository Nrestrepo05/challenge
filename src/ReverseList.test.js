import { act, render, screen } from '@testing-library/react';
import ReverseList from './ReverseList';

describe("<ReverseList/>", () => {
  it('renders', async () => {
    await act(async () => {
      return render(<ReverseList />)
    });
    screen.getByText("List Presentation");
  });
})
