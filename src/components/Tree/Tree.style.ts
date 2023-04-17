import styled, { CSSObject } from 'styled-components';
import { animated } from '@react-spring/web';
import { ReactNode } from 'react';

export const TreeFrame = styled.div`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: #24292e;
  fill: #24292e;
`;
type TitleProps = { style: CSSObject; children: ReactNode };
export const Title = styled.span<TitleProps>`
  vertical-align: middle;
  ${({ style }) => style};
`;

export const TreeContent = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
`;

export const toggle = {
  width: '1em',
  height: '1em',
  marginRight: 10,
  cursor: 'pointer',
  verticalAlign: 'middle',
};
