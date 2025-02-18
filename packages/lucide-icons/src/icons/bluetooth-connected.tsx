import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path d="m7 7 10 10-5 5V2l5 5L7 17" stroke={color} />
      <Line x1="18" x2="21" y1="12" y2="12" stroke={color} />
      <Line x1="3" x2="6" y1="12" y2="12" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'BluetoothConnected'

export const BluetoothConnected = memo<IconProps>(themed(Icon))
