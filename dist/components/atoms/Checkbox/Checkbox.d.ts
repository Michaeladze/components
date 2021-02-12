import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import { Size, Variant } from '../../../types';
export interface ICheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Лейбл */
    label?: React.ReactNode;
    /** Значение */
    value?: string;
    /** HTML Элемент вместо строки */
    node?: ReactNode;
    /** Отображение иконки */
    icon?: boolean;
    /** Вариант */
    variant?: Variant;
    /** Размер */
    size?: Size;
}
declare const Checkbox: FC<ICheckboxProps>;
export default Checkbox;
