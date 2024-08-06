import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Row, RowProps } from '../index';
import Box from '../object/Box';

const meta: Meta<typeof Row> = {
  title: 'Component/Row',
  component: Row,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: StoryFn<RowProps> = (args: RowProps) => (
  <Row {...args}>
    <Box />
    <Box />
    <Box />
    <Box />
  </Row>
);

export const Default = Template.bind({});
Default.args = {};
