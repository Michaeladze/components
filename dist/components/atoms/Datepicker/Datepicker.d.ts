import { FC } from 'react';
import { DatePickerProps } from 'react-date-picker/dist/entry.nostyle';
export interface IDatepickerProps extends Omit<DatePickerProps, 'onChange'> {
    /** Изменение */
    onChange?: (date: Date | null, name?: string) => void;
    /** Очистка */
    clear?: boolean;
    /** Размер */
    size?: 'big' | 'small' | 'micro';
}
declare const Datepicker: FC<IDatepickerProps>;
export default Datepicker;
