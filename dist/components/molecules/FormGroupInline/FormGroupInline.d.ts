import React, { FC } from 'react';
import { Variant } from '../../../types';
export interface IFormGroupInlineProps {
    /** Дочерние элементы */
    children: React.ReactNode | React.ReactNode[];
    /** Имя */
    label?: React.ReactNode;
    /** Сообщение об ошибке */
    errorMessage?: string;
    /** Дополнительный класс */
    className?: string;
    /** Обязательность */
    required?: boolean;
    /** Вариант */
    variant?: Variant;
}
declare const FormGroupInline: FC<IFormGroupInlineProps>;
export default FormGroupInline;
