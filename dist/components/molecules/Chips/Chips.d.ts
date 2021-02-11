import { FC } from 'react';
import { IChips, Variant } from '../../../types';
export interface IChipsProps {
    items: IChips[];
    className?: string;
    variant?: Variant;
    onClick?: (c: IChips) => void;
    onRemove?: (id: string) => void;
    disabled?: boolean;
    size?: 'default' | 'small';
}
declare const Chips: FC<IChipsProps>;
export default Chips;
