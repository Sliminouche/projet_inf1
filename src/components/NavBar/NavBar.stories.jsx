import React from 'react';
import Navbar from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
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
