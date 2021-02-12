import { FC } from 'react';
import { DatePickerProps } from 'react-date-picker/dist/entry.nostyle';
import { Size } from '../../../types';
export interface IDatepickerProps extends Omit<DatePickerProps, 'onChange'> {
    /** Изменение */
    onChange?: (date: Date | null, name?: string) => void;
    /** Очистка */
    clear?: boolean;
    /** Размер */
    size?: Size;
}
declare const Datepicker: FC<IDatepickerProps>;
export default Datepicker;
