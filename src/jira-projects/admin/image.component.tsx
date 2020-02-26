import React from 'react';
import { BasePropertyProps } from 'admin-bro';

const Image: React.FC<BasePropertyProps> = (props) => {
  const { property, record, resource } = props;

  const value = record.params[property.name];
  const name = record.id;

  return (<img height={40} src={value} alt={name} />);
};

export default Image;
