import React, { FC } from 'react';
import { Variant } from '../../../types';
import { variantClass } from '../../../utils/helpers';

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

const FormGroup: FC<IFormGroup> = ({
  label, children, message, className = '', variant = 'error', required = false
}: IFormGroup) => {
  return (
    <div className={`rf-form-group ${className}`}>
      <div className='rf-form-group__inner'>
        {label && (
          <p className='rf-form-group__label'>
            {label}
            {required && <span className='rf-form-group__required'>*</span>}
          </p>
        )}
        {children}
      </div>
      {message && <p className={`rf-form-group__message ${variantClass[variant]}`}>{message}</p>}
    </div>
  );
};

export default FormGroup;
