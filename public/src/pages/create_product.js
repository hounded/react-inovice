import React, { Component } from 'react';

import Header from '../components/header/header';
import CreateProduct from '../components/create_product/create_product';

const CreateProductP = (props) => {
  return (
    <div>
      <Header title="Create Product" />
      <CreateProduct />
    </div>
  );
}

export default CreateProductP;
