/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  ActionProps, Box, BasePropertyComponent, useRecord, Button, Illustration,
} from 'admin-bro';

const PropertyRenderer = ({ resource, record, propertyName }) => {
  const property = resource.showProperties.find((p) => p.name === propertyName);
  return (
    <BasePropertyComponent
      where="show"
      property={property}
      resource={resource}
      record={record}
    />
  );
};

const Show: React.FC<ActionProps> = (props) => {
  const { resource, record } = props;

  return (
    <Box flex flexDirection="row">
      <Box width={[1, 1 / 2, 1 / 3]}>
        <Box variant="white" boxShadow="card">
          <PropertyRenderer {...props} propertyName="billableSeconds" />
          <PropertyRenderer {...props} propertyName="startDate" />
        </Box>
      </Box>
      <Box width={[1, 1 / 2, 1 / 3]} mx="lg">
        <Box variant="white" boxShadow="card">
          <PropertyRenderer {...props} propertyName="description" />
          <PropertyRenderer {...props} propertyName="accountId" />
        </Box>
      </Box>
      <Box width={[1, 1 / 2, 1 / 3]}>
        <Illustration variant="Folders" width={100} />
      </Box>
    </Box>
  );
};

export default Show;
