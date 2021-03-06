import React from 'react';
import { IFeedback, IUser } from '../../../../types/projects.types';
export interface IFeedbackPopupProps {
    user: IUser;
    sendFeedback: (data: IFeedback) => void;
    onClose?: () => void;
}
declare const FeedbackPopup: React.FC<IFeedbackPopupProps>;
export default FeedbackPopup;
