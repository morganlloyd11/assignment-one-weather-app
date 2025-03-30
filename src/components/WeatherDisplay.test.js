// IMPORTS
// render to render react component
// sceen to access renderd dom elements
import { render, screen } from '@testing-library/react';
// the component being tested
import WeatherDisplay from './WeatherDisplay';

// group of tests for the component
describe('WeatherDisplay Component', () => {
    // checks that the component displays the passed props
    test('render city, temperature and weather', () => {
    // component with dummy props
      render(<WeatherDisplay city="Calgary" temperature="-5°C" weather="Snowy" />);
      
      // set the city, temp and weather to be rendered to dom
      expect(screen.getByText('Calgary')).toBeInTheDocument();
      expect(screen.getByText('-5°C')).toBeInTheDocument();
      expect(screen.getByText('Snowy')).toBeInTheDocument();
    });
  
    // check if element has right css name
    test('correct css class name', () => {
        // renders component and dectructures container(root dom of container)
      const { container } = render(
        <WeatherDisplay city="Calgary" temperature="-5°C" weather="Snowy" />
      );
      // make sure top level element has the class "weather-display";
      expect(container.firstChild).toHaveClass('weather-display');
    });
  });