import React from 'react';
import { IBreadcrumb, Size } from '../../../types';
export interface IProps {
    list: IBreadcrumb[];
    size?: Size;
}
declare const Breadcrumbs: React.FC<IProps>;
export default Breadcrumbs;
