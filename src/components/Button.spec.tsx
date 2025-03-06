import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom';

describe('Button Component', () => {
    const buttonText = 'Click Me';
    const customClass = 'custom-class';

    it('renders button with children content', () => {
        render(<Button>{buttonText}</Button>);
        expect(screen.getByText(buttonText)).toBeInTheDocument();
    });

    it('applies custom className', () => {
        render(<Button className={customClass}>{buttonText}</Button>);
        const button = screen.getByText(buttonText);
        expect(button).toHaveClass(customClass);
    });

    it('handles onClick event', () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>{buttonText}</Button>);
        const button = screen.getByText(buttonText);
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('renders without onClick handler without crashing', () => {
        render(<Button>{buttonText}</Button>);
        const button = screen.getByText(buttonText);
        fireEvent.click(button);
        expect(button).toBeInTheDocument();
    });

    it('does not trigger onClick if not provided', () => {
        const onClick = jest.fn();
        render(<Button>{buttonText}</Button>);
        const button = screen.getByText(buttonText);
        fireEvent.click(button);
        expect(onClick).not.toHaveBeenCalled();
    });
});
