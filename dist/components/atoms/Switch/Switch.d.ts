import { FC, ReactNode, HTMLProps } from 'react';
import { Size, Variant } from '../../../types';
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
declare const Switch: FC<ISwitchProps>;
export default Switch;
