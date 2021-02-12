import React, { ReactNode } from 'react';
import { Variant } from '../../../types';
import { variantClass } from '../../../utils/helpers';


export interface ITagProps {
  children: ReactNode | ReactNode[];
  className?: string;
  variant?: Variant;
  onClick?: (e: React.MouseEvent) => void;
}

const Tag: React.FC<ITagProps> = ({ children, className = '', variant = 'neutral', onClick }: ITagProps) => {

  const handler = (e: React.MouseEvent) => {
    onClick && onClick(e);
  };

  const clickableClass = onClick ? 'rf-tag--clickable' : '';

  return (
    <div className={ `rf-tag ${variantClass[variant]} ${clickableClass} ${className}` } onClick={ handler }>
      { children }
    </div>
  );
};

export default Tag;
