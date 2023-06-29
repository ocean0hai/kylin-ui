import { Badge } from '@components/Badge'
import { Space } from '@components/Space'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'UI Component/Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => <Badge>123</Badge>,
}

export const Type: Story = {
  render: args => (
    <Space>
      <Badge type="secondary">Secondary</Badge>
      <Badge type="success">Success</Badge>
      <Badge type="warning">Warning</Badge>
      <Badge type="danger">Danger</Badge>
      <Badge type="info">Info</Badge>
    </Space>
  ),
}

export const Shape: Story = {
  render: args => (
    <Space>
      <Badge shape="square">default shape</Badge>
      <Badge shape="circle">circle</Badge>
      <Badge shape="rounded">rounded</Badge>
    </Space>
  ),
}

export const Size: Story = {
  render: args => (
    <Space>
      <Badge size="small">small</Badge>
      <Badge size="middle">middle</Badge>
      <Badge size="large">large</Badge>
    </Space>
  ),
}

export const Gradient: Story = {
  render: args => (
    <Space>
      <Badge gradient="aquamarine">aqua</Badge>
      <Badge gradient="blue">blue</Badge>
      <Badge gradient="orange">orange</Badge>
      <Badge gradient="red">red</Badge>
    </Space>
  ),
}

export const Text: Story = {
  render: args => <Badge text="text" />,
}

export default meta