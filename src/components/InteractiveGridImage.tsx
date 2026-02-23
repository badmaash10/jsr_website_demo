"use client";
import React, { useState } from 'react';

interface InteractiveGridImageProps {
    src: string;
    alt?: string;
}

export default function InteractiveGridImage({ src, alt = "Interactive Image" }: InteractiveGridImageProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // 5 columns x 3 rows = 15 cells
    const cols = 5;
    const rows = 3;
    const totalCells = cols * rows;

    return (
        <div
            className="interactive-grid-container"
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                width: '100%',
                height: '100%',
                position: 'relative',
                perspective: '1000px', // Adds depth for a subtle 3D effect if desired
            }}
        >
            {Array.from({ length: totalCells }).map((_, index) => {
                // Calculate the grid position
                const colIndex = index % cols;
                const rowIndex = Math.floor(index / cols);

                // Calculate background position percentages
                // For 5 columns, x positions are 0%, 25%, 50%, 75%, 100%
                // For 3 rows, y positions are 0%, 50%, 100%
                const xPos = (colIndex / (cols - 1)) * 100;
                const yPos = (rowIndex / (rows - 1)) * 100;

                const isHovered = hoveredIndex === index;

                return (
                    <div
                        key={index}
                        className="grid-cell"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                            backgroundImage: `url(${src})`,
                            backgroundSize: `${cols * 100}% ${rows * 100}%`,
                            backgroundPosition: `${xPos}% ${yPos}%`,
                            transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease, z-index 0.3s',
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                            boxShadow: isHovered ? '0 15px 35px rgba(0,0,0,0.6)' : 'none',
                            zIndex: isHovered ? 10 : 1,
                            position: 'relative',
                            willChange: 'transform, box-shadow'
                        }}
                        aria-label={`${alt} part ${index + 1}`}
                    />
                );
            })}
        </div>
    );
}
