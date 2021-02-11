import React, { useEffect, useState } from 'react';
import Switch from './Switch';
import { variants } from '../../../utils/helpers';
import { Variant } from '../../../types';
import Story from '../../storybook/Story';
import StoryItem from '../../storybook/StoryItem';
import StoryRow from '../../storybook/StoryRow';

export default {
  title: 'Form Controls/Switch',
  component: Switch
};

export const switcher = () => {
  const [active, setActive] = useState(true);
  const onChange = (flag: boolean) => {

    console.log(`Новое состояние: ${flag}`);
  };
  useEffect(() => {
    const i = setInterval(() => {
      setActive(!active);
    }, 2000);
    return () => clearInterval(i);
  });

  const switchVariantsJSX = variants.map((variant: Variant) => (
    <StoryRow key={variant}>
      <Switch variant={variant} state={true} label={variant} />
    </StoryRow>
  ));

  return (
    <Story name='Switch (Переключатель)' description='Переключает состояние какой-нибудь сущности'>
      <StoryItem description='Состояния переключателя'>
        <StoryRow>
          <Switch animation={true} label='Default c анимацией ' onSwitch={onChange} />
          <Switch label='Default без анимацией ' style={{ paddingLeft: '60px' }} onSwitch={onChange} labelPosition='left'/>
        </StoryRow>
        <StoryRow>
          <Switch label='Small' onSwitch={onChange} sizeElement='small' />
          <Switch label='Small' style={{ paddingLeft: '60px' }} onSwitch={onChange} sizeElement='small' labelPosition='left'/>
        </StoryRow>
        <StoryRow>
          <Switch animation={true} label='Default' onSwitch={onChange} state={active}/>
        </StoryRow>
        <StoryRow>
          <Switch label='Неактивен и включен' state={true} disable={true} onSwitch={onChange} />
        </StoryRow>
        <StoryRow>
          <Switch sizeElement='small' label='Неактивен и выключен и еще и мелкий)' disable={true} onSwitch={onChange} />
        </StoryRow>
      </StoryItem>
      <StoryItem description='Варианты цветового оформления'>{switchVariantsJSX}</StoryItem>
    </Story>
  );
};
