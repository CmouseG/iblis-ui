import { AppBar, Grid, Paper, Toolbar, Typography, WithStyles, withStyles, WithTheme, withTheme } from '@material-ui/core';
import * as React from 'react';
import { ClassKey, createSytle, style } from './style';

export interface CardTitleLayoutProps {
    /**
     * The text to display in the top of the card
     */
    title: string;
    /**
     * The component to display if needed at the right of the card
     */
    rightComponent?: React.ReactNode;
}

const CardTitleLayoutBase: React.StatelessComponent<CardTitleLayoutProps & WithStyles<ClassKey> & WithTheme & { children?: React.ReactNode }> = (props) => {

    const { title, classes, rightComponent, theme, children } = props;

    return (
        <Paper>
            <AppBar
                position={'static'}
                color={'inherit'}
                elevation={0}
                classes={{ root: classes.appBarMenuRoot }}
            >
                <Toolbar
                    classes={{ root: classes.toolBarMenuRoot }}
                >
                    <Grid container={true} justify={'space-between'} alignItems={'center'}>
                        <Grid item={true} >
                            <Typography variant="button" color={'primary'}  >
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item={true} >
                            {rightComponent}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Grid container={true}>
                <Grid item={true} xs={12} style={style(theme).contentContainer}>
                    {children}
                </Grid>
            </Grid>
        </Paper >
    );
};

const CardTitleLayoutWithStyle: React.ComponentType<CardTitleLayoutProps> = withStyles(createSytle)(CardTitleLayoutBase);
const CardTitleLayoutWithTheme: React.ComponentType<CardTitleLayoutProps> = withTheme()(CardTitleLayoutWithStyle);

/**
 * Card with a title
 */
export const CardTitleLayout: React.ComponentType<CardTitleLayoutProps> = (CardTitleLayoutWithTheme);
