import { Button, LinearProgress } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../components/AuthContext';
import { ZenDogLogo } from '../svgs/logo_zendog';
import { signInWithGoogle } from '../utils/firebase';

export const Authenticate = () => {
  const { user, profile } = useAuthValue();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && profile !== undefined) {
      if (profile === null) {
        navigate('/signup');
      } else {
        navigate('/');
      }
    }
  }, [user, profile]);

  return (
    <div
      style={{
        backgroundColor: '#AAF1CF',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
      {user && profile === undefined ? (
        <LinearProgress style={{ width: '100%', position: 'fixed', top: 0 }} />
      ) : undefined}
      <div style={{ width: '70vw', backgroundColor: '#AAF1CF', maxWidth: 350 }}>
        <ZenDogLogo fill="#11614D" />
      </div>
      <p
        style={{
          fontFamily: 'Jua, sans-serif',
          fontSize: '4rem',
          color: '#11614D',
          letterSpacing: '5px',
          marginTop: '15px'
        }}>
        ZENDOG
      </p>
      <Button
        sx={{
          backgroundColor: '#46BD7E',
          color: 'white',
          width: '80vw',
          maxWidth: 300,
          marginBottom: '16vh'
        }}
        size="large"
        onClick={signInWithGoogle}
        variant="contained">
        Sign in with Google
      </Button>
      {/* <button
        style={{
          border: 'none',
          background: 'none',
          color: 'white',
          fontSize: '1rem',
          marginBottom: '2.5rem'
        }}>
        Login with Email
      </button> */}
    </div>
  );
};
