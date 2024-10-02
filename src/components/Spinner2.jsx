import React from 'react';
import { styled } from '@mui/system';
import { DotLoader } from 'react-spinners'; 

export const Spinner2 = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <SpinnerOverlay>
      <SpinnerContent>
        <DotLoader size={60} color="#11e4e4" /> 
        <SpinnerText>Загрузка...</SpinnerText>
      </SpinnerContent>
    </SpinnerOverlay>
  );
};

const SpinnerOverlay = styled('div')(({}) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(0, 0, 0, 0.45)',
  zIndex: 9999,
}));

const SpinnerContent = styled('div')(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '250px',
  height: '200px',
  backgroundColor: 'white',
  justifyContent: 'center',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', 
  transform: 'scale(1.05)', 
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const SpinnerText = styled('div')(({}) => ({
  marginTop: '20px',
  color: '#11e4e4',
  fontSize: '20px', 
  fontWeight: 'bold',
  fontFamily: 'monospace',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', 
}));