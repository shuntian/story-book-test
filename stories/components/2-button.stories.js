import React from 'react';

import CustomButton from '../../src/components/custom-button';

export default {
  title: '测试',
  component: CustomButton,
};

export const Button = () => <CustomButton />


Button.story = {
  name: '文档测试',
};
