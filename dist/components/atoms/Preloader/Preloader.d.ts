import React from 'react';
import { Variant } from '../../../types';
export interface IPreloaderProps {
    size?: 'small' | 'medium' | 'large';
    variant?: Variant;
}
declare const Preloader: React.FC<IPreloaderProps>;
export default Preloader;
