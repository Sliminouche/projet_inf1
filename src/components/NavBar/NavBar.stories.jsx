import React from 'react';
import NavBar from './NavBar';
import { MemoryRouter as Router } from 'react-router-dom';

export default {
  title: 'NavBar',
  component: NavBar,
};

const Template = (args) => (
  <Router>
    <NavBar {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {};
