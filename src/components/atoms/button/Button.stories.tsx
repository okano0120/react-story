import React from 'react';
import { ButtonStyle } from './Button';
import { PropsType } from './Button';
import { Meta, Story} from '@storybook/react';

export default {
  title: "atoms/ButtonStyle",
  component: ButtonStyle,
} as Meta

const Template: Story<PropsType> = args => <ButtonStyle {...args}>{args.label}</ButtonStyle>

export const ButtonStyle1_1 = Template.bind({});
ButtonStyle1_1.args = {
  size: 'large',
  color: 'green',
  radius: 'max',
};

export const buttonStyle1_2 = (args: PropsType) => (
  <ButtonStyle {...args}/>
);
