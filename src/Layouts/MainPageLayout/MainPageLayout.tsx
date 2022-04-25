import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from "@material-ui/core";
import React, { ReactNode } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Notifications } from '@material-ui/icons';
import mainPicture from '../../Assets/globus.jpeg';
import './MainPageLayout.css';
import data from '../../Data/data.json';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#FDE75F',
    },
    navbarItem: {
        color: 'black',
    },
}));

interface MainPageLayoutProps {
    children: ReactNode;
}

export const MainPageLayout = (props: MainPageLayoutProps) => {
    const classes = useStyles();

    const { children } = props;
    return (
        <div id="main-page-layout">
            <AppBar position="static">
                <Toolbar className={classes.appBar}>
                    <Grid container direction="row-reverse" alignItems="center">
                        <Grid item>
                            <Notifications fontSize="large" className={classes.navbarItem}/>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.navbarItem}>
                                {data.users[1].fullName}
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <img src={mainPicture} alt="traveling person"/>
            {children}
        </div>
    );
};