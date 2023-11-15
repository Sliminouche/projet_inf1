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
  label: "Nom de l'artiste",
  name: 'username',
  type: 'text',
  value: '',
  onChange: action('onChange'),
  required: true,
};

