import React from 'react';
import  Button from './Button';

export default {
    component: Button,
    title: 'component/Button',
};

const Template = (args) => <Button {...args} />

export  const Primary = Template.bind({});

Primary.args = {
    title: 'Button',
    primary: true,
    loading: false,
}

export const Loading = Template.bind({});

Loading.args = {
    primary: false,
    loading: true,
}