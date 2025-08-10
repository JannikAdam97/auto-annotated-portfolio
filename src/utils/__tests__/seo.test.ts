import { seoGenerateMetaDescription, seoGenerateMetaTags, seoGenerateTitle } from '../seo';

const site = {
    titleSuffix: 'Cloudbuds',
    defaultMetaTags: [{ property: 'og:type', content: 'website' }],
    env: { URL: 'https://cloudbuds.de' }
};

describe('seo utils', () => {
    it('generates title with suffix', () => {
        const page = { title: 'Home', __metadata: {} } as any;
        expect(seoGenerateTitle(page, site)).toBe('Home - Cloudbuds');
    });

    it('uses page meta description when provided', () => {
        const page = { metaDescription: 'Desc', __metadata: {} } as any;
        expect(seoGenerateMetaDescription(page, site)).toBe('Desc');
    });

    it('merges default and page meta tags', () => {
        const page = { metaTags: [{ property: 'og:title', content: 'Home' }], __metadata: {} } as any;
        const tags = seoGenerateMetaTags(page, site);
        expect(tags).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ property: 'og:type', content: 'website' }),
                expect.objectContaining({ property: 'og:title', content: 'Home' })
            ])
        );
    });
});

