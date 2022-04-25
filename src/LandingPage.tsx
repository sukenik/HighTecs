import { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import styles from "./myStyles.module.css";
import { MainPageLayout } from "./Layouts/MainPageLayout/MainPageLayout";
import StatusChain from "./Components/StatusChain/statusChain";
import data from "./Data/data.json";
import { Approvals } from "./Approvals/Approvals";

const LandingPage = () => {
  const [tripMode, setTripMode] = useState("");
  const currentUser = data.users[2];

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
                  className={styles.modeButton}
                >
                  יוצא
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={setEnteyTripMode}
                  className={styles.modeButton}
                >
                  נכנס
                </Button>
              </Grid>
            </Grid>
          ) : (
            <StatusChain mode={tripMode} />
          )}
        </>
      }
    />
  );
};

export default LandingPage;
