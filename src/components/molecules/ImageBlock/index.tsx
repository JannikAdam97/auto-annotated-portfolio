import Image from 'next/image';
import { Annotated } from '@/components/Annotated';

export default function ImageBlock(props) {
    const { elementId, className, url, altText, caption } = props;
    if (!url) {
        return null;
    }

    const alt = altText || caption || 'Image';

    return (
        <Annotated content={props}>
            <div id={elementId || undefined} className="relative w-full h-full">
                <Image
                    className={className}
                    src={url}
                    alt={alt}
                    fill
                    sizes="100vw"
                    loading="lazy"
                    decoding="async"
                />
            </div>
        </Annotated>
    );
}
