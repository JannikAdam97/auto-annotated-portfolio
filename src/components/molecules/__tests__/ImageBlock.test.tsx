import { render } from '@testing-library/react';

// Mock next/image to render img element
// Remove Next.js specific props like `fill` to avoid React warnings
jest.mock('next/image', () => ({ fill, ...rest }) => <img {...rest} />);

import ImageBlock from '../ImageBlock';

describe('ImageBlock', () => {
    it('renders image when url provided', () => {
        const { getByAltText } = render(<ImageBlock url="/test.jpg" altText="test" />);
        expect(getByAltText('test')).toBeInTheDocument();
    });

    it('falls back to caption when altText missing', () => {
        const { getByAltText } = render(<ImageBlock url="/test.jpg" caption="caption" />);
        expect(getByAltText('caption')).toBeInTheDocument();
    });

    it('uses default alt text when none provided', () => {
        const { getByAltText } = render(<ImageBlock url="/test.jpg" />);
        expect(getByAltText('Image')).toBeInTheDocument();
    });

    it('returns null when no url', () => {
        const { container } = render(<ImageBlock /> as any);
        expect(container.firstChild).toBeNull();
    });
});

