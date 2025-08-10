import { DynamicComponent } from '@/components/components-registry';
import SeoHead from '@/components/SeoHead';
import { PageComponentProps } from '@/types';
import { allContent } from '@/utils/content';
import { resolveStaticProps } from '@/utils/static-props-resolvers';

const Page: React.FC<PageComponentProps> = (props) => {
    const { global, ...page } = props;
    const { site } = global;

    return (
        <>
            <SeoHead page={page} site={site} />
            <DynamicComponent {...props} />
        </>
    );
};

export function getStaticPaths() {
    const allData = allContent();
    const paths = allData.map((obj) => obj.__metadata.urlPath).filter(Boolean);
    return { paths, fallback: false };
}

export function getStaticProps({ params }) {
    const allData = allContent();
    const urlPath = '/' + (params.slug || []).join('/');
    const props = resolveStaticProps(urlPath, allData);
    return { props };
}

export default Page;
