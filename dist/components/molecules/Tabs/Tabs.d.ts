import { ReactNode, FC } from 'react';
import { ITab, Size } from '../../../types';
export interface ITabsProps {
    /** Список вкладок */
    list: ITab[];
    /** Вид табов */
    type?: 'underline' | 'buttons';
    /** Если во вкладках есть url, то через children пробрасывается <Router/> */
    children?: ReactNode | ReactNode[];
    /** Размер */
    size?: Size;
}
declare const Tabs: FC<ITabsProps>;
export default Tabs;
