import React from 'react';
import Button from './Button';
import { variants } from '../../../utils/helpers';
import { Variant } from '../../../types';
import Story from '../../storybook/Story';
import StoryRow from '../../storybook/StoryRow';
import StoryItem from '../../storybook/StoryItem';
import StoryCol from '../../storybook/StoryCol';

export default {
  title: 'Button',
  component: Button
};

const scales: string[] = ['big', 'medium', 'small', 'micro'];

const buttonTypes: any = ['primary', 'secondary', 'ghost'];

export const buttons = () => {
  const buttonsJSX = buttonTypes.map((bt: any) => (
    <StoryItem description={`Кнопки с типом ${bt}`} key={bt}>
      {variants.map((variant: Variant) => (
        <StoryRow key={variant}>
          {scales.map((s: any, j: number) => (
            <StoryCol key={s}>
              <Button key={s} buttonType={bt} variant={variant} disabled={j === 2} size={s}>
                <span style={{ textTransform: 'capitalize' }}>{bt}</span>
              </Button>
            </StoryCol>
          ))}
        </StoryRow>
      ))}
    </StoryItem>
  ));

  const roundList = variants.map((variant: Variant) => (
    <div key={variant} style={{ padding: '10px' }}>
      <Button buttonType='round' variant={variant}>
        R
      </Button>
    </div>
  ));

  return (
    <Story name='Button (Кнопка)'>
      {buttonsJSX}

      <StoryItem description='Круглые кнопки'>
        <StoryRow>{roundList}</StoryRow>
      </StoryItem>
    </Story>
  );
};
