import React, { ReactNode } from 'react';
import { Variant } from '../../../types';
export interface ITagProps {
    children: ReactNode | ReactNode[];
    className?: string;
    variant?: Variant;
    onClick?: (e: React.MouseEvent) => void;
}
declare const Tag: React.FC<ITagProps>;
export default Tag;
