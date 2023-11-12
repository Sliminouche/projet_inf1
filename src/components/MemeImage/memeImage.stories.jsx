import React from 'react';
import memeImage from './MemeImage';

export default {
    component: memeImage,
    title: 'component/memeImage'
};

const Template = (args) => <memeImage {...args} />

export  const Default = Template.bind({});

Default.args = {
    image: <img src="https://i.imgflip.com/145qvv.jpg" alt="meme" class="meme--image"/>,
    textHaut: 'textHaut',
    textBas: 'textBas',
}



