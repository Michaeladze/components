import React, { FC, useState } from 'react';
// @ts-ignore
import DatePicker, { DatePickerProps } from 'react-date-picker/dist/entry.nostyle';
import Calendar from '../../_icons/calendar';
import Close from '../../_icons/close';

export interface IDatepickerProps extends Omit<DatePickerProps, 'onChange'> {
  /** Изменение */
  onChange?: (date: Date | null, name?: string) => void;
  /** Очистка */
  clear?: boolean;
  /** Размер */
  size?: 'big' | 'small' | 'micro';
}

const Datepicker: FC<IDatepickerProps> = ({ size = 'small', ...props }: IDatepickerProps) => {
  const [value, setValue] = useState<Date | Date[] | null>(props.value || null);

  /** Изменение значения календаря */
  const handleChange = (date: Date | Date[] | null) => {
    const d = date as Date;
    setValue(d);
    props.onChange && props.onChange(d, props.name || '');
  };

  const sizeClass: Record<'big' | 'small' | 'micro', string> = {
    big: 'rf-datepicker__wrapper--big',
    small: 'rf-datepicker__wrapper--small',
    micro: 'rf-datepicker__wrapper--micro'
  };

  return (
    <div className={`rf-datepicker__wrapper ${sizeClass[size]}`}>
      <DatePicker
        {...props}
        value={value}
        format='dd.MM.y'
        calendarIcon={<Calendar />}
        clearIcon={props.clear && !props.disabled && value ? <Close /> : null}
        onChange={handleChange}
        dayPlaceholder='__'
        monthPlaceholder='__'
        yearPlaceholder='____'
      />
    </div>
  );
};

export default Datepicker;
