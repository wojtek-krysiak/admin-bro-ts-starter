import React from 'react';
import { BasePropertyProps } from 'admin-bro';

const Image: React.FC<BasePropertyProps> = (props) => {
  const { property, record, resource } = props;

  return (
    <div>
      {record.params.name}
      {' '}
      {record.params.key}
    </div>
  );
};

export default Image;
