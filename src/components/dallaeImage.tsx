'use client';

import Image from 'next/image';
import { useDallaePosition } from '@/hooks/useDallaePosition';

export const DallaeImage = () => {
    const position = useDallaePosition();

    return (
        <div
            id="dallae-image-container"
            className="relative"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: 'transform 0.25s ease-out',
            }}>
            <Image draggable={false} className="translate-x-1/4" src="/images/dallae.png" alt="dallae" width={250} height={312} />
        </div>
    );
};