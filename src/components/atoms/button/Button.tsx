import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export type ObjType = {
  [key: string]: string;
};

type ObjType2 = {
  [key: string]: number;
};

const buttonHeight: ObjType = {
  small: '30px',
  medium: '30px',
  large: '40px',
};

const buttonWidth: ObjType = {
  small: '100px',
  medium: '200px',
  large: '300px',
};

const buttonColor: ObjType = {
  white: '#ffffff',
  green: '#0ec205',
  orenge: '#ff6300',
  gray: '#bfbfbf',
};

const buttonHover: ObjType = {
  white: '#dddddd',
  green: '#089b00',
  orenge: '#da5300',
  gray: '#8a8a8a',
};

const fontColor: ObjType = {
  default: '#ffffff',
  white: ' #000000',
  gray: '#767676',
};

const buttonRadius: ObjType2 = {
  half: 10,
  max: 100,
};

export type PropsType = {
  size: string;
  color: string;
  radius: string;
  label: string;
  onClick: undefined;
};

export const ButtonStyle = ({ size, color, radius, label, onClick }: PropsType) => {
  const Component = styled.button`
    height: ${buttonHeight[size]};
    width: ${buttonWidth[size]};
    font-size: 15px;
    background: ${buttonColor[color]};
    border: ${color === 'white' ? '1' : 'none'};
    color: ${fontColor[color] ? fontColor[color] : fontColor.default};
    border-color: '#bfbfbf';
    border-radius: ${buttonRadius[radius]}px;
    &:hover {
      background: ${buttonHover[color]};
    }
  `;
  return <Component>{label}</Component>;
};

ButtonStyle.propTypes = {
  color: PropTypes.oneOf(['white', 'green', 'orenge', 'gray']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  radius: PropTypes.oneOf(['half', 'max']),
};

ButtonStyle.defaultProps = {
  color: 'white',
  size: 'medium',
  radius: 'half',
  label: 'Hello World',
  onClick: undefined,
};
