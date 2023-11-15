import React from 'react';
import NavBar from './NavBar';

export default {
  title: 'NavBar',
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />

export const Default = Template.bind({});
Default.args = {};

export const WithDifferentProps = Template.bind({});
WithDifferentProps.args = {
  // Pass different props if needed
  // Example: toggle: true
};

// You can add more stories as needed
