import { Box, Button, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import clsx from 'clsx';

const steps = ['לוגיסטיקה', 'ת"ש', 'שלישות', 'רפואה', 'רס"ר'];
const stepsStatus = ['אושר', 'נדחה', undefined, 'אושר', undefined];

const useStyles = makeStyles((theme) => ({
    statusButton: {
        borderRadius: '30%',
        backgroundColor: 'grey',
    },
    completedStatus: {
        backgroundColor: '#4eb345',
    },
    declineStatus: {
        backgroundColor: '#e42a16',
    },
    divider: {
        width: '100px',
    },
    infoItem: {
        border: '5px solid black',
    }
}));

interface StatusChainNewProps {
    mode: string
};

const StatusChainNew = (props: StatusChainNewProps) => {
    const { mode } = props;
    const classes = useStyles();

    const [clickedItem, setClickedItem] = useState<number>();

    const onStatusClick = (index: number) => {
        setClickedItem(index);
    }

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item>
                    <Typography variant="h2">
                        טופס טיולים {mode}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center">
                {
                    steps.map((step, index) => {
                        return (
                            <>
                                <Grid item>
                                    <Button onClick={() => onStatusClick(index)} className={clsx(classes.statusButton,
                                        {
                                            [classes.declineStatus]: stepsStatus[index] === 'אושר',
                                            [classes.completedStatus]: stepsStatus[index] === 'נדחה',
                                            [classes.infoItem]: clickedItem === index,

                                        })}>
                                        {step}
                                    </Button>
                                </Grid>
                                {index !== steps.length - 1 &&
                                    < Grid item>
                                        <Divider className={classes.divider} />
                                    </Grid>
                                }
                            </>
                        );
                    })
                }
            </Grid>
            {
                clickedItem &&
                <Grid container justifyContent="center">
                    <Grid item>
                        <Box>
                            <Typography variant="h6">
                                הסבר למה אושר או נדחה
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            }
        </>
    );
}

export default StatusChainNew;