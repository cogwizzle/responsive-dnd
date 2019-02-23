// @flow
import React from 'react';
import './text.component.scss';

export type Props = {
  label?: string;
  other?: any[];
  className?: string;
  name: string;
};

const Text = ({
  label,
  other,
  className,
  name,
}) => (
  <div className="text">
    <input
      type="text"
      className={`text__input ${className}`}
      name={name}
      {...other}
    />
    {
      (label)
        ? (<label for={name} className="text__label">{label}</label>)
        : null
    }
  </div>
);

Text.defaultProps = {
  label: undefined,
  other: undefined,
  className: '',
};

export default Text;
