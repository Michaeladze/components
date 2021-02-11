import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { Variant } from '../../../types';
export interface IRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Лейбл */
    label: ReactNode;
    /** Значение */
    value: string;
    /** HTML Элемент вместо строки */
    node?: ReactNode;
    /** Отображение иконки */
    icon?: boolean;
    /** Вариант */
    variant?: Variant;
    /** Размер */
    size?: 'default' | 'small';
}
declare const Radio: FC<IRadioProps>;
export default Radio;
