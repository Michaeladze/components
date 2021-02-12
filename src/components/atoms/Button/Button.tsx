import React, { FC, HTMLProps } from 'react';
import { Size, Variant } from '../../../types';
import { sizeClass, variantClass } from '../../../utils/helpers';

export interface IButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
  /** Внешний вид */
  buttonType?: 'primary' | 'secondary' | 'ghost' | 'round' | 'text';
  /** Размер */
  size?: Size;
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
  };

  return (
    <button
      {...props}
      type={type}
      className={`rf-button ${classesMap[buttonType]} ${sizeClass[size]} ${variantClass[variant]}
      ${props.className || ''}`}>
      {props.children}
    </button>
  );
};

export default Button;
