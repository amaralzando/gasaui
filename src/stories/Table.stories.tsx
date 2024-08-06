import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Table, TableProps } from '../index';

const meta: Meta<typeof Table> = {
  title: 'Component/Table',
  component: Table,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: StoryFn<TableProps> = (args: TableProps) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {};
