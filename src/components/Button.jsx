import React from 'react';

function Button({
  type = '',
  children = '',
  className = '',
  updateActiveFilter = () => {},
  ...props
}) {
  return (
    <button type={type} className={`px-3 py-1 text-[15px] font-semibold rounded-xl ${className}`} {...props} onClick={() => updateActiveFilter(children)}>
      {children}
    </button>
  );
}

export default Button;
