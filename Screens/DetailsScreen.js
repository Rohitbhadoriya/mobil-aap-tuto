import React from 'react';
import PropertyDetails from '../components/PropertyDetails';

const DetailsScreen = ({ route }) => {
  const { property } = route.params;
  return <PropertyDetails property={property} />;
};

export default DetailsScreen;