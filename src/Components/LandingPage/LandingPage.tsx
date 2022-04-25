import { useState } from 'react';
import { Grid, Button, makeStyles } from '@material-ui/core';
import styles from './LandingPage.module.css';
import { MainPageLayout } from '../../Layouts/MainPageLayout/MainPageLayout';
import StatusChainNew from '../StatusChainNew';
import data from '../../Data/data.json'
import { Approvals } from '../../Approvals/Approvals';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: '5px',
        backgroundColor: '#5476A0',
        fontSize: '30px',
        height: '89px',
        width: '164px',
        fontFamily: 'Segoe UI'
    }
}));

const LandingPage = () => {
    const [tripMode, setTripMode] = useState('');
    const currentUser = data.users[2];

    const classes = useStyles();

  const setEnteyTripMode = () => {
    setTripMode("נכנס");
  };

  const setOutTripMode = () => {
    setTripMode("יוצא");
  };

  return (
    <MainPageLayout
      children={
        <>
          {currentUser.role ? (
            <Approvals currentUser={currentUser} users={data.users}/>
          ) : !tripMode ? (
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignContent="center"
              className={styles.landingPageContainer}
              style={{ height: "100vh" }}
            >
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={setOutTripMode}
                  className={classes.button}
                >
                  יוצא
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={setEnteyTripMode}
                  className={classes.button}
                >
                  נכנס
                </Button>
              </Grid>
            </Grid>
          ) : (
            <StatusChainNew mode={tripMode} />
          )}
        </>
      }
    />
  );
};

export default LandingPage;