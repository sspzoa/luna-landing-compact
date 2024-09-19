import { useEffect, useState } from "react";
import type { Position } from "@/types/Position";

export function useDallaePosition(): Position {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const dallaeImage = document.getElementById('dallae-image-container');
            if (dallaeImage) {
                const rect = dallaeImage.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const deltaX = e.clientX - centerX;
                const deltaY = e.clientY - centerY;

                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                const maxDistance = 400;
                const maxMove = 1500;

                if (distance < maxDistance) {
                    const angle = Math.atan2(deltaY, deltaX);
                    const moveRatio = Math.min(1, (maxDistance - distance) / maxDistance);
                    const moveX = Math.cos(angle + Math.PI) * maxMove * moveRatio;
                    const moveY = Math.sin(angle + Math.PI) * maxMove * moveRatio;

                    setPosition({ x: moveX, y: moveY });
                } else {
                    setPosition({ x: 0, y: 0 });
                }
            }
        };

        const handleClick = () => {
            alert("💜");
        };

        const dallaeImage = document.getElementById('dallae-image-container');
        if (dallaeImage) {
            dallaeImage.addEventListener('click', handleClick);
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (dallaeImage) {
                dallaeImage.removeEventListener('click', handleClick);
            }
        };
    }, []);

    return position;
}