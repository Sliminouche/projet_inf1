import React from 'react';
import MemeImage from './MemeImage';

export default {
    component: MemeImage,
    title: 'component/MemeImage'
};

const Template = (args) => <MemeImage {...args} />

export  const Default = Template.bind({});

Default.args = {
    image: <img src="https://i.imgflip.com/145qvv.jpg" alt="meme" class="meme--image"/>,
    textHaut: 'textHaut',
    textBas: 'textBas',
}



