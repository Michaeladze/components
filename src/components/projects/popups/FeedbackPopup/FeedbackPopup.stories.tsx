import React from 'react';
import FeedbackPopup from './FeedbackPopup';
import { IUser, IFeedback } from '../../../../types/projects.types';
import Story from '../../../storybook/Story';
import StoryItem from '../../../storybook/StoryItem';
import {
  Button, openPopup, PopupMaker
} from '../../../../index';

export default {
  title: 'Projects/FeedbackPopup',
  component: FeedbackPopup
};

export const feedbackPopup = () => {
  const sendFeedback = (data: IFeedback) => {
    console.log(data);
  };

  const user: IUser = {
    id: '545d7d0b-2c64-4b2f-ad2d-1d9bd30d912f',
    firstName: 'Giovani',
    lastName: 'Nolan',
    middleName: 'Lera',
    fullName: 'Nolan Giovani',
    position: 'Labore id emo velit. Rin rem ducimus autem nihil quisquam.',
    department: '2',
    photo:
      'data:image/png;neutral64,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'
  };

  const onClick = () => {
    openPopup(<FeedbackPopup sendFeedback={sendFeedback} user={user} />, 'popup-maker');
  };

  return (
    <Story name='Обратная связь'>
      <StoryItem description='Модальное окно с обратной связью'>
        <Button onClick={onClick}> Обратная связь </Button>
        <PopupMaker/>
      </StoryItem>
    </Story>
  );
};
