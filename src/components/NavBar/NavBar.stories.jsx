import React from 'react';
import { NavBar } from './NavBar'; 
import { action } from '@storybook/addon-actions';

export default {
  title: 'NavBar',
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Vous pouvez spécifier des valeurs par défaut pour les propriétés de votre composant ici
  // Par exemple:
  // title: 'Mon titre',
  // link: '/accueil',
  // onClick: action('Cliqué sur la navbar'),
};
