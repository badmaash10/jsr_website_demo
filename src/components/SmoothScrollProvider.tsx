"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        // Initialize Lenis smooth scroll globally
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
