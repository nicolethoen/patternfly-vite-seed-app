import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Instances from './Instances';

describe('Instances page', () => {
  it('renders the heading and description', () => {
    render(<Instances />);
    expect(screen.getByRole('heading', { name: /instances/i })).toBeInTheDocument();
    expect(screen.getByText(/this is the instances page under system/i)).toBeInTheDocument();
  });
}); 