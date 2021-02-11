import { FC, ReactNode } from 'react';
/** Вложенный компонент. Нужен только локально, поэтому никуда его не экспортирую. */
declare type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';
/** Основной компонент на экспорт. */
export interface ITooltipProps {
    /** [1] Элемент, на который наводим, [2] Элемент с подсказкой */
    children: [ReactNode, ReactNode];
    /** Позиция тултипа */
    position?: TooltipPosition;
    /** Отключить показ самого тултипа */
    isVisible?: boolean;
    /** Дополнительный класс */
    className?: string;
}
declare const Tooltip: FC<ITooltipProps>;
export default Tooltip;
