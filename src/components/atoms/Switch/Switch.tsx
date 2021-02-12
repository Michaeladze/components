import React, {
  FC, ReactNode, useState, useEffect, HTMLProps
} from 'react';
import { Size, Variant } from '../../../types';
import { sizeClass, variantClass } from '../../../utils/helpers';

export interface ISwitchProps extends Omit<HTMLProps<HTMLDivElement>, 'label' | 'size' | 'onChange'> {
  /** Функция срабатывает при переключении */
  onChange?: (f: boolean) => void;
  /** Метка */
  label?: ReactNode;
  /** Позиция метки */
  labelPosition?: 'right' | 'left';
  /** Текущее состояние */
  state?: boolean;
  /** Блокировка от нажатий */
  disable?: boolean;
  /** Цвета */
  variant?: Variant;
  /** Размер */
  size?: Size;
  /** Включить/выключить анимацию */
  animation?: boolean;
}

const Switch: FC<ISwitchProps> = ({
  label,
  state = false,
  disable = false,
  animation = false,
  onChange,
  labelPosition = 'right',
  variant = 'primary',
  size = 'medium',
  ...props
}: ISwitchProps) => {
  const [s, toggle] = useState<boolean>(state);

  useEffect(() => {
    // в случае программного изменения тоже выдаем событие
    onChange && s !== state && onChange(state);
    toggle(state);
  }, [state]);

  const changeState = () => {
    onChange && onChange(!s);
    toggle(!s);
  };

  const classDisable = disable ? 'rf-switch--disable' : '';
  const classAnim = animation ? 'rf-switch--anim' : '';
  const classOther = props.className ?? '';

  return (
    <div { ...props } tabIndex={ 0 }
      className={ `rf-switch ${sizeClass[size]} ${classDisable} ${classAnim} ${classOther}` }
      onClick={ changeState } >
      { label && labelPosition === 'left' && <p className='rf-switch__label rf-switch__label--left'>{ label }</p> }
      <div
        className={ `rf-switch__toggle  ${s ? 'rf-switch__toggle--on' : 'rf-switch__toggle--off'} ${variantClass[variant]}` }>
        <div className='rf-switch__circle'/>
      </div>
      { label && labelPosition === 'right' && <p className='rf-switch__label rf-switch__label--right'>{ label }</p> }
    </div>
  );
};

export default Switch;
