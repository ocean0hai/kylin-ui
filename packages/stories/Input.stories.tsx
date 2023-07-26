import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@components/Input'
import { Space } from '@components/Space'

const meta = {
  title: 'UI Component/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Input
      placeholder={'请输入内容'}
      onChange={value => console.log('value', value)}
    />
  ),
}

export const Width: Story = {
  render: () => (
    <Space>
      <Input
        placeholder={'Width 100px'}
        width={'100px'}
        onChange={value => console.log('value', value)}
      />
      <Input
        placeholder={'Width 200px'}
        width={200}
        onChange={value => console.log('value', value)}
      />
      <Input
        placeholder={'Width 300px'}
        width={300}
        onChange={value => console.log('value', value)}
      />
    </Space>
  ),
}
export const Height: Story = {
  render: () => (
    <Space>
      <Input
        placeholder={'Height 10px'}
        width={'100px'}
        height={'10px'}
        onChange={value => console.log('value', value)}
      />
      <Input
        placeholder={'Height 20px'}
        width={200}
        height={20}
        onChange={value => console.log('value', value)}
      />
      <Input
        placeholder={'Height 30px'}
        width={300}
        height={30}
        onChange={value => console.log('value', value)}
      />
    </Space>
  ),
}
export default meta
