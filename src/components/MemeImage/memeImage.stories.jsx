import React from 'react';
import MemeImage from './MemeImage';
import imageFile from '../../assets/defaultMeme.jpg';

export default {
    component: MemeImage,
    title: 'component/MemeImage'
};

const Template = (args) => <MemeImage {...args} />

export  const Default = Template.bind({});

Default.args = {
    image: imageFile,
    textHaut: 'textHaut',
    textBas: 'textBas',
}

//<img src="https://i.imgflip.com/145qvv.jpg" alt="meme" class="meme--image"/>



