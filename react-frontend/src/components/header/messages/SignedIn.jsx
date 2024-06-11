import React from 'react';
import classes from './SignedIn.module.scss';

function SignedIn() {
  return (
    <div className={classes.signedIn}>
      Logged in as: Mehdi Aitbrahim
    </div>
  );
}

export default SignedIn;