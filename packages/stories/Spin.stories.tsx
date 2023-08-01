import type { Meta, StoryObj } from '@storybook/react'
import { Spin } from '@components/Spin'
import { Space } from '@components/Space'

const meta = {
  title: 'UI Component/Spin',
  component: Spin,
  tags: ['autodocs'],
} satisfies Meta<typeof Spin>

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => <Spin>There are some text</Spin>,
}

export const Demo: Story = {
  render: () => (
    <Space size={'large'}>
      <Spin tip='hello'>
        <span
          style={{
            display: 'block',
            padding: 50,
          }}
        >
          Spin ...
        </span>
      </Spin>

      <Spin spinning tip="loading...">
        <div
          style={{
            height: '100px',
            color: 'white',
            background: '#91caff',
          }}
        >
          <span>
            A long long text A long long text A long long
            text A long long
          </span>
        </div>
      </Spin>

      <Spin tip="Loading" size="small">
        <span
          style={{
            display: 'block',
            height: '100px',
            color: 'white',
            background: 'red',
          }}
        >
          A long long spin ...
        </span>
      </Spin>
    </Space>
  ),
}

export default meta