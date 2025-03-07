import {fireEvent, render, screen} from '@testing-library/react';
import Card from '../components/Card.tsx';

describe('Card Component', () => {
    it('renders children content correctly', () => {
        render(
            <Card>
                <div>Test Content</div>
            </Card> as unknown as React.ReactElement
        );
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('applies custom className correctly', () => {
        const customClass = 'custom-class';
        const { container } = render(
            <Card className={customClass}>
                <div>Content</div>
            </Card>
        );
        expect(container.firstChild).toHaveClass(customClass);
    });

    it('triggers onClick event when clicked', () => {
        const handleClick = jest.fn();
        render(
            <Card onClick={handleClick}>
                <div>Clickable Content</div>
            </Card>
        );
        fireEvent.click(screen.getByText('Clickable Content'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not trigger onClick if not provided', () => {
        const handleClick = jest.fn();
        render(
            <Card>
                <div>Non-clickable Content</div>
            </Card>
        );
        fireEvent.click(screen.getByText('Non-clickable Content'));
        expect(handleClick).not.toHaveBeenCalled();
    });
})
