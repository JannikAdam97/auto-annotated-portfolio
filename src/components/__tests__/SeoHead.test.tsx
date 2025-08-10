import { render } from '@testing-library/react';
import React from 'react';

// Mock next/head to render children directly
jest.mock('next/head', () => {
    return ({ children }) => <>{children}</>;
});

import SeoHead from '../SeoHead';

describe('SeoHead component', () => {
    it('renders canonical link when site URL is provided', () => {
        const page = { __metadata: { urlPath: '/about' } } as any;
        const site = { env: { URL: 'https://cloudbuds.de' } } as any;
        render(<SeoHead page={page} site={site} />);
        const canonical = document.querySelector('link[rel="canonical"]');
        expect(canonical).toHaveAttribute('href', 'https://cloudbuds.de/about');
    });
});

