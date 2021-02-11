import React from 'react';
import { IFileData } from '../../../types';
import { IButtonProps } from '../Button/Button';
/**
 * Файловый инпут для небольших файлов, конвертирует файл в neutral64.
 * Передает в коллбек setFile объект c файлом и его neutral64 версией { file: File, neutral64: string }
 *
 */
export interface IFileInputProps extends Omit<IButtonProps, 'onError'> {
    name?: string;
    accept?: string;
    multiple?: boolean;
    className?: string;
    defaultValue?: string;
    disabled?: boolean;
    placeholder?: string;
    /** Функция возвращает файл в компонент */
    setFile: (file: IFileData[]) => void;
    /** Коллбек при ошибке */
    onError?: (err: Error) => void;
    /** Максимальный размер - kB */
    maxSize?: number;
    /** Сжать изображения */
    compressImages?: boolean;
}
declare const FileInput: React.FC<IFileInputProps>;
export default FileInput;
