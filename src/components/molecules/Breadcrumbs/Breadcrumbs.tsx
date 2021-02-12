import React from 'react';

import Angle from '../../_icons/angle-down';
import { Link } from 'react-router-dom';
import { IBreadcrumb, Size } from '../../../types';
import { sizeClass } from '../../../utils/helpers';

export interface IProps {
  list: IBreadcrumb[];
  size?: Size;
}

const Breadcrumbs: React.FC<IProps> = ({ list, size = 'medium' }: IProps) => {
  const listJSX = list.map((b: IBreadcrumb, i: number) => (
    <div className='breadcrumb' key={i}>
      <Link to={b.url} className={`breadcrumb__link ${b.disabled ? 'breadcrumb__link--disabled' : ''}`}>
        {b.label}
      </Link>

      <Angle className='breadcrumb__angle' />
    </div>
  ));

  return <div className={`breadcrumbs ${sizeClass[size]}`}>{listJSX}</div>;
};

export default Breadcrumbs;
