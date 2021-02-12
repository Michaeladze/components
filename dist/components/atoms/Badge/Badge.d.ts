import React, { ReactNode } from 'react';
import { Size, Variant } from '../../../types';
export interface IBadgeProps {
    children: ReactNode;
    badgeContent?: ReactNode;
    className?: string;
    variant?: Variant;
    max?: number;
    position?: 'topRight' | 'topLeft' | 'bottomLeft' | 'bottomRight' | 'text';
    display?: boolean;
    size?: Size;
}
declare const Badge: React.FC<IBadgeProps>;
export default Badge;
