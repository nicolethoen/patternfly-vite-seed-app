import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Settings from './Settings';

describe('Settings page', () => {
  it('renders the heading and description', () => {
    render(<Settings />);
    expect(screen.getByRole('heading', { name: /settings/i })).toBeInTheDocument();
    expect(screen.getByText(/this is the settings page/i)).toBeInTheDocument();
  });
}); 