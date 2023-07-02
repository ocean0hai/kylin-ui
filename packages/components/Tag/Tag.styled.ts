import { styled } from 'styled-components'
import { TagProps } from './type'
import { theme as Theme } from '@packages/theme/src'

function getBackground({ gradient, type }) {
  if (gradient) {
    return Theme[gradient]
  }
  return Theme[type!] ?? Theme['default']
}

function getSize({ size }) {
  return size ? Theme[size] : Theme['middle']
}

function getRadis({ shape }) {
  return shape ? Theme[shape] : Theme['square']
}

export const TagContainer = styled.span<{
  type?: TagProps['type']
  size?: TagProps['size']
  shape?: TagProps['shape']
  gradient?: TagProps['gradient']
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  white-space: nowrap;
  background: ${props =>
    getBackground({
      gradient: props.gradient,
      type: props.type,
    })};
  padding: ${props => getSize({ size: props.size })};
  border-radius: ${props =>
    getRadis({ shape: props.shape })};
`

export const TagIcon = styled.span<{
  position?: 'before' | 'after'
  children?: any
}>`
  margin: ${props => {
    if (props.position === 'before') {
      return '0 4px 0 0'
    } else {
      return '0 0 0 4px'
    }
  }};
`
