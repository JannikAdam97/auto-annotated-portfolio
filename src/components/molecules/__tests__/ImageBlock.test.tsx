import { render } from '@testing-library/react';

// Mock next/image to render img element
jest.mock('next/image', () => (props) => <img {...props} />);

import ImageBlock from '../ImageBlock';

describe('ImageBlock', () => {
    it('renders image when url provided', () => {
        const { getByAltText } = render(<ImageBlock url="/test.jpg" altText="test" />);
        expect(getByAltText('test')).toBeInTheDocument();
    });

    it('returns null when no url', () => {
        const { container } = render(<ImageBlock /> as any);
        expect(container.firstChild).toBeNull();
    });
});

