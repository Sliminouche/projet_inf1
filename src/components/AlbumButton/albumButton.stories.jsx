import React from 'react';
import  albumButton from './albumButton';

export default {
    component: albumButton,
    title: 'component/albumButton'
};

const Template = (args) => <albumButton {...args} />

export  const Default = Template.bind({});

Default.args = {
    children: 'Button',
    loading: false,
    disabled: false,
}

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
