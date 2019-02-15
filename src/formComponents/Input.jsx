import React from 'react';
import { Input, Alert, InputGroupAddon } from 'reactstrap';

const renderField = ({
  input,
  placeholder,
  meta: { touched, error, warning },
}) => (
  <span>
  <Input
    {...input}
    placeholder={placeholder}
    invalid={(touched && error) ? true : false}
  />
  {touched && error && 
  <InputGroupAddon addonType="append">
    <Alert  color="danger" isOpen={touched && error} >
    {error}
    </Alert>
  </InputGroupAddon>
  }
  </span>
);

export default renderField;
