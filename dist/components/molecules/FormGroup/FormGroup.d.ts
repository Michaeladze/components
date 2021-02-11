import React, { FC } from 'react';
import { Variant } from '../../../types';
export interface IFormGroup {
    /** Дочерние элементы */
    children: React.ReactNode | React.ReactNode[];
    /** Имя */
    label?: React.ReactNode;
    /** Сообщение */
    message?: string;
    /** Дополнительный класс */
    className?: string;
    /** Обязательность */
    required?: boolean;
    /** Вариант */
    variant?: Variant;
}
declare const FormGroup: FC<IFormGroup>;
export default FormGroup;
