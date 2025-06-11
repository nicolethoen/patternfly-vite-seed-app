import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Documentation from './Documentation';

describe('Documentation page', () => {
  it('renders the heading and description', () => {
    render(<Documentation />);
    expect(screen.getByRole('heading', { name: /documentation/i })).toBeInTheDocument();
    expect(screen.getByText(/this is the documentation page/i)).toBeInTheDocument();
  });
}); 