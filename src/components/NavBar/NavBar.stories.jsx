import React from 'react';
import NavBar from './NavBar';

export default {
    component: NavBar,
    title: 'component/NavBar'
};


const Template = (args) => <NavBar {...args} />

export  const Default = Template.bind({});

Default.args = {
    children: 'NavBar',
    loading: false,
    disabled: false,
}

/*
export const Loading = Template.bind({});

Loading.args = {
    children: 'Button',
    loading: true,
    disabled: false,

}

export const Disabled = Template.bind({});

Disabled.args = {
    children: 'Button',
    disabled: true,
    loading: false,
}
*/