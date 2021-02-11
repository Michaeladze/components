import React, {
  FC, InputHTMLAttributes, ReactNode
} from 'react';
import CheckIcon from '../../_icons/check-icon';
import { Variant } from '../../../types';
import { variantClass } from '../../../utils/helpers';

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

const Radio: FC<IRadioProps> = ({
  label, value, node, icon = true, variant = 'primary', size = 'default', ...props
}: IRadioProps) => {
  /** Отображение иконки */
  const withIcon = icon && (
    <span className={ `rf-radio__circle ${variantClass[variant]}` }>
      <span className='rf-radio__mark'>
        <CheckIcon/>
      </span>
    </span>
  );

  // -------------------------------------------------------------------------------------------------------------------

  const onMouseDown = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.currentTarget.classList.add('rf-radio--pressed');
  };

  const onMouseUp = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.currentTarget.classList.remove('rf-radio--pressed');
  };

  const sizeClass = size === 'small' ? 'rf-radio--small' : '';

  return (
    <label className={ `rf-radio ${props.className || ''} ${props.disabled ? 'disabled' : ''} ${sizeClass}` }
      onMouseDown={ onMouseDown } onMouseUp={ onMouseUp }>
      <input { ...props } type='radio' className='rf-radio__input' value={ value }/>

      { withIcon }

      <span className={ `rf-radio__label ${node ? 'rf-radio__label--node' : ''}` }>{ node || label }</span>
    </label>
  );
};

export default Radio;
