import React from 'react';
import './button.css';

interface IButton {
  icon: JSX.Element;
  name: string;
  bgColor?: string;
  color?: string;
}

function Button({
  icon,
  name,
  bgColor = 'var(--primary',
  color = '#ffffff',
}: IButton) {
  return (
    <a className="mainBtn" style={{ color: color, background: bgColor }}>
      {icon} {name}
    </a>
  );
}

export default Button;
