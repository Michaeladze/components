import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { Size, Variant } from '../../../types';
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
    size?: Size;
}
declare const Radio: FC<IRadioProps>;
export default Radio;
