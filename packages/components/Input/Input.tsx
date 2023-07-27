import React, { useState } from 'react'
import { InputProps } from './type'
import {
  InputComponent,
  InputContainer,
  CountContainer,
  RelativeContainer,
  Prefix,
  Suffix,
} from './styled'
import { Search } from '@packages/icon'
import { omit } from '@packages/shared'

const InternalInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (props, ref) => {
  const {
    className,
    placeholder,
    prefix,
    suffix = props?.enterSearch ? (
      <Search width={20} height={20} />
    ) : null,
    showCount = false,
    limitCount,
    onChange,
  } = props

  const [count, setCount] = useState(0)

  const handleChange = e => {
    if (showCount) {
      setCount(e.target.value.length)
    }
    if (onChange) {
      onChange(e.target.value)
    }
  }

  const restProps = omit(props, [
    'enterSearch',
    'prefix',
    'suffix',
    'showCount',
    'onChange',
  ])

  return (
    <>
      <InputContainer className={className} tabIndex={1}>
        {prefix && <Prefix>{prefix}</Prefix>}
        <RelativeContainer width={props?.width}>
          <InputComponent
            ref={ref}
            placeholder={placeholder}
            onChange={handleChange}
            {...restProps}
          ></InputComponent>
          {showCount && (
            <CountContainer>
              {count}/{limitCount ?? '∞'}
            </CountContainer>
          )}
        </RelativeContainer>
        {suffix && <Suffix>{suffix}</Suffix>}
      </InputContainer>
    </>
  )
}

const Input = React.forwardRef(InternalInput)

if (process.env.NODE_ENV !== 'production') {
  Input.displayName = 'Input'
}
export { Input }
