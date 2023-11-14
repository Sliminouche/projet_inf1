import React from 'react';
import  AlbumButton from './AlbumButton';

export default {
    component: AlbumButton,
    title: 'component/AlbumButton'
};

const Template = (args) => <AlbumButton {...args} />

export  const Primary = Template.bind({});

Primary.args = {
   primary: true,
   label: 'AlbumButton',
}
