import React from 'react';
import Input from './Input';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label de l'input",
  name: 'username',
  type: 'text',
  value: '',
  onChange: action('onChange'),
  required: true,
};

export const Second = Template.bind({});
Second.args = {
  label: "Input dans le cas d'une erreur",
  name: 'username',
  type: 'text',
  value: '',
  onChange: action('onChange'),
  error: true,
  required: true,
};

