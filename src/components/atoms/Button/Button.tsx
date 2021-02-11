import React, { FC, HTMLProps } from 'react';
import { Variant } from '../../../types';
import { variantClass } from '../../../utils/helpers';

export interface IButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
  /** Внешний вид */
  buttonType?: 'primary' | 'secondary' | 'ghost' | 'round' | 'text';
  /** Размер */
  size?: 'big' | 'medium' | 'small' | 'micro';
  /** Тип */
  type?: 'button' | 'submit' | 'reset';
  /** Варианты */
  variant?: Variant;
}

const Button: FC<IButtonProps> = ({
  type = 'button',
  size = 'small',
  buttonType = 'primary',
  variant = 'primary',
  ...props
}: IButtonProps) => {
  const classesMap: { [key: string]: string } = {
    primary: 'rf-button--primary',
    secondary: 'rf-button--secondary',
    ghost: 'rf-button--ghost',
    text: 'rf-button--text',
    round: 'rf-button--round',

    big: 'rf-button__big',
    medium: 'rf-button__medium',
    small: 'rf-button__small',
    micro: 'rf-button__micro'
  };

  return (
    <button
      {...props}
      type={type}
      className={`rf-button ${classesMap[buttonType]} ${classesMap[size]} ${variantClass[variant]}
      ${props.className || ''}`}>
      {props.children}
    </button>
  );
};

export default Button;
