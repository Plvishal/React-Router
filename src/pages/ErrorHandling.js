import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorHandling() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate('/'), 4000);
  });
  return (
    <div>
      <h1>Something wring!!!!!!</h1>
    </div>
  );
}

export default ErrorHandling;
