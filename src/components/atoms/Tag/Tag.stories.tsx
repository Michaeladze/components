import React from 'react';
import Tag from './Tag';
import { Variant } from '../../../types';
import { variants } from '../../../utils/helpers';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import StoryCol from '../../storybook/StoryCol';
import StoryRow from '../../storybook/StoryRow';

export default {
  title: 'Tag',
  component: Tag
};

export const tag = () => {

  const badgesJSX = variants.map((variant: Variant) => (
    <StoryCol key={ variant }>
      <Tag variant={ variant }>
        { variant }
      </Tag>
    </StoryCol>
  ));

  return (
    <Story name='Tag (Тег)'
      description='Тег — это метка, размечающая и каталогизирующая информацию для облегчения процесса поиска. При нажатии на тэг загружаются все элементы имеющие эту метку.'>
      <StoryItem>
        <StoryRow>
          { badgesJSX }
        </StoryRow>
      </StoryItem>
    </Story>
  );
};
