import Head from 'next/head';

import { PageData, SiteData, seoGenerateMetaDescription, seoGenerateMetaTags, seoGenerateTitle } from '@/utils/seo';

interface SeoHeadProps {
    page: PageData;
    site: SiteData;
}

const SeoHead: React.FC<SeoHeadProps> = ({ page, site }) => {
    const title = seoGenerateTitle(page, site);
    const metaTags = seoGenerateMetaTags(page, site);
    const metaDescription = seoGenerateMetaDescription(page, site);
    const siteUrl = site?.env?.URL;
    const canonicalUrl = siteUrl ? `${siteUrl}${page.__metadata.urlPath}` : undefined;
    const schemaOrg = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Jannik Adam',
        jobTitle: 'Technischer Berater & SAP Entwickler',
        url: canonicalUrl
    };

    return (
        <Head>
            <title>{title}</title>
            {metaDescription && <meta name="description" content={metaDescription} />}
            {metaDescription && <meta property="og:description" content={metaDescription} />}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
            {metaTags.map((metaTag) =>
                metaTag.format === 'property' ? (
                    <meta key={metaTag.property} property={metaTag.property} content={metaTag.content} />
                ) : (
                    <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />
                )
            )}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {site.favicon && <link rel="icon" href={site.favicon} />}
            {canonicalUrl && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
                />
            )}
        </Head>
    );
};

export default SeoHead;

