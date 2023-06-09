import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  container: {},

  main: {
    height: '100vh',
    background: '#273036',
    zIndex: '1',
    display: 'flex',
    flexDirection: 'row',
  },
  img: {
    height: '500px',
    borderRadius: '20px',
    margin: '16px',
  },
  signup: {
    width: '50%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '10%',
    color: 'white',
    fontFamily: 'Poppins',
    zIndex: '1',
    marginBottom: '24px',
    height: '800px',
  },
  subtitle: {
    width: '60%',
    margin: 'auto',

    paddingTop: '5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: '4em',
  },
  imgContainer: {
    width: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: { height: '200px', borderRadius: '10px' },
  iconContainer: {
    margin: 'auto',
  },
  btn: {
    '&:hover': {
      color: '#fff',
      background: theme.palette.primary.main,
      cursor: 'pointer',
    },
    background: 'white',
    border: 'none',
    padding: '20px',
    borderRadius: '25px',
    fontSize: 20
  },
  landingImgContainer: {
    width: '35%',
    marginTop: 'auto',
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <div className={classes.signup}>
          <h1 className={classes.h1}>Sign Language Conversion</h1>
          <h1>Accessibility For All</h1>
          <Link href='/speech'>
              <button className={classes.btn}>Access the Detector</button>
          </Link>
        </div>
        <div className={classes.landingImgContainer}>
          <img height='688' src='/home_page_sign.png'></img>
        </div>
      </div>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,320L60,293.3C120,267,240,213,360,170.7C480,128,600,96,720,117.3C840,139,960,213,1080,240C1200,267,1320,245,1380,234.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg> */}
      
      <div className={classes.imgContainer}>
        <img
          className={classes.img}
          src='https://images.pexels.com/photos/4629633/pexels-photo-4629633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        ></img>
        <img
          className={classes.img}
          src='https://miro.medium.com/v2/resize:fit:1400/0*Iv-GIxB6KwJpZPaQ'
        ></img>
        <img
          className={classes.img}
          src='https://images.pexels.com/photos/4629625/pexels-photo-4629625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        ></img>
      </div>
    </div>
  );
}
