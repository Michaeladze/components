import React, { FC, InputHTMLAttributes } from 'react';
import { IOption } from '../../../types';
export interface ISelectProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Список вариантов */
    options: IOption[];
    /** Множественный выбор */
    multiSelect?: boolean;
    /** Начальное значение */
    value?: string | string[];
    /** Изменение значение селекта */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, option?: IOption) => void;
    /** Вернуть IOption */
    getValue?: (option: IOption) => void;
}
declare const Select: FC<ISelectProps>;
export default Select;
