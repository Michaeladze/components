import { FC, HTMLProps } from 'react';
import { Size, Variant } from '../../../types';
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
declare const Button: FC<IButtonProps>;
export default Button;
