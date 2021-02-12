import React, {
  FC, InputHTMLAttributes, ReactNode
} from 'react';
import CheckIcon from '../../_icons/check-icon';
import { Size, Variant } from '../../../types';
import { sizeClass, variantClass } from '../../../utils/helpers';

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

const Checkbox: FC<ICheckboxProps> = ({
  label, value, node, icon = true, variant = 'primary', size = 'medium', ...props
}: ICheckboxProps) => {

  // -------------------------------------------------------------------------------------------------------------------

  /** Отображение иконки */
  const withIcon = icon && (
    <span className={ `rf-checkbox__check ${variantClass[variant]} ${node ? 'rf-checkbox__check--node' : ''}` }>
      <span className='rf-checkbox__mark'>
        <CheckIcon/>
      </span>
    </span>
  );

  // -------------------------------------------------------------------------------------------------------------------

  const onMouseDown = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.currentTarget.classList.add('rf-checkbox--pressed');
  };

  const onMouseUp = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.currentTarget.classList.remove('rf-checkbox--pressed');
  };

  // -------------------------------------------------------------------------------------------------------------------

  const disabledClass = props.disabled ? 'disabled' : '';

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <label className={ `rf-checkbox ${disabledClass} ${sizeClass[size]} ${props.className || ''} ` }
      onMouseDown={ onMouseDown }
      onMouseUp={ onMouseUp }>
      <input { ...props } type='checkbox' className='rf-checkbox__input' value={ value }/>

      { withIcon }

      { label &&
      <div className={ `rf-checkbox__label ${node ? 'rf-checkbox__label--node' : ''}` }>{ node || label }</div> }
    </label>
  );
};

export default Checkbox;
