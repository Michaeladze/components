import React from 'react';
import { Size, Variant } from '../../../types';
import { sizeClass, variantClass } from '../../../utils/helpers';

export interface IPreloaderProps {
  size?: Size;
  variant?: Variant;
}

const Preloader: React.FC<IPreloaderProps> = ({ size = 'medium', variant = 'primary' }: IPreloaderProps) => {
  return (
    <div className={`preloader ${sizeClass[size]} ${variantClass[variant]}`}>
      <div className='preloader__circle' />
    </div>
  );
};

export default Preloader;
