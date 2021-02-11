import { FC } from 'react';
import { IListElement } from '../../../../types';
/** Упрощенный интерфейс пользователя */
interface IUser {
    /** Имя пользователя */
    firstName: string;
    /** Фамилия пользователя */
    lastName: string;
    /** Ссылка на фото */
    photo: string;
}
export interface IUserProps {
    /** Список действий в дропдауне */
    actionsList: IListElement[];
    /** Пользователь */
    user: IUser | null;
}
declare const User: FC<IUserProps>;
export default User;
