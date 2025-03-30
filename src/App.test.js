// IMPORTS
// render to mount comp, screen to query elements
// fireEvent to simulate user interation
import { render, screen, fireEvent } from '@testing-library/react';
// app component
import App from './App';

// adding dummy data so the test does not need to use the json data
jest.mock('./data/locations.json', () => ([
  { city: 'Calgary', temperature: '-5°C', weather: 'Snowy' },
  { city: 'Toronto', temperature: '2°C', weather: 'Cloudy' },
  { city: 'Vancouver', temperature: '8°C', weather: 'Rainy' },
]));

// group of related tests for the app
describe('main app component', () => {
    //check that the title and search shows up correctly
  test('renders title and search input', () => {
    // render app comp.
    render(<App />);
    // checks that the tital is visible in the dom
    expect(screen.getByText(/weather app/i)).toBeInTheDocument();
    // checks that the search and placeholder texr is in the dom
    expect(screen.getByPlaceholderText(/enter city name/i)).toBeInTheDocument();
  });

// check that user input is updating the values
  test('updates input value when entered', () => {
    // rend app comp.
    render(<App />);
    // simulate user entering Calgary
    const input = screen.getByPlaceholderText(/enter city name/i);
    fireEvent.change(input, { target: { value: 'Calgary' } });
    // checks that the input value is Calgary
    expect(input).toHaveValue('Calgary');
  });

//check that the correct weather component is shown on user input
  test('renders matching WeatherDisplay components when searched', () => {
    // render app comp
    render(<App />);
    // simulate calgary as input
    const input = screen.getByPlaceholderText(/enter city name/i);
    fireEvent.change(input, { target: { value: 'Calgary' } });
    // check the correct location and info appears
    expect(screen.getByText(/Calgary/i)).toBeInTheDocument();
    expect(screen.getByText(/-5°C/)).toBeInTheDocument();
    expect(screen.getByText(/Snowy/i)).toBeInTheDocument();
  });

//
  test('renders no WeatherDisplay if no match', () => {
    // render app comp
    render(<App />);
    // simulate data that does not exist
    const input = screen.getByPlaceholderText(/enter city name/i);
    fireEvent.change(input, { target: { value: 'Atlantis' } });
    // confirm it does not appear in dom
    expect(screen.queryByText(/Atlantis/i)).not.toBeInTheDocument();
  });
});