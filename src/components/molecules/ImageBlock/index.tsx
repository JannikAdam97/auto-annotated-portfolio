import Image from 'next/image';
import { Annotated } from '@/components/Annotated';

export default function ImageBlock(props) {
    const { elementId, className, url, altText = '' } = props;
    if (!url) {
        return null;
    }

    return (
        <Annotated content={props}>
            <Image
                id={elementId || undefined}
                className={className}
                src={url}
                alt={altText}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                loading="lazy"
                decoding="async"
            />
        </Annotated>
    );
}
