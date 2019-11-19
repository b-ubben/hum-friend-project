import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const TextInput = ({ label, name, ...props }) => {
  const [field] = useField(props);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="text" {...field} {...props} />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextInput;
