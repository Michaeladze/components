import React, { ReactNode } from 'react';
export interface ITileProps {
    children: ReactNode | ReactNode[];
    className?: string;
}
declare const Tile: React.FC<ITileProps>;
export default Tile;
