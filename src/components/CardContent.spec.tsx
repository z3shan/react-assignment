import { render, screen } from '@testing-library/react';
import CardContent from './CardContent';

describe('CardContent Component', () => {
    it('renders children correctly', () => {
        render(
            <CardContent>
                <p>Test Content</p>
            </CardContent>
        );

        const content = screen.getByText('Test Content');
        expect(content).toBeInTheDocument();
    });

    it('applies padding class correctly', () => {
        const { container } = render(
            <CardContent>
                <p>Test Content</p>
            </CardContent>
        );

        expect(container.firstChild).toHaveClass('p-2');
    });

    it('renders multiple children correctly', () => {
        render(
            <CardContent>
                <p>Child 1</p>
                <p>Child 2</p>
            </CardContent>
        );

        expect(screen.getByText('Child 1')).toBeInTheDocument();
        expect(screen.getByText('Child 2')).toBeInTheDocument();
    });

    it('renders empty content without crashing', () => {
        const { container } = render(<CardContent>{null}</CardContent>);
        expect(container.firstChild).toBeEmptyDOMElement();
    });
});
