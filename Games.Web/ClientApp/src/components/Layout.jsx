import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        position: 'relative',
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    drawerPaper: {
        position: 'relative',
        width: '25em'
    },
    content: {
        height: 'auto',
        overflowY: 'auto',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0
    },
    toolbar: theme.mixins.toolbar
});

const Layout = props => {
    const { controls, winner, players, classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position='absolute' className={classes.appBar}>
                <Toolbar>
                    <Typography variant='title' color='inherit' noWrap>
                        Card Game
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant='permanent'
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.toolbar} />
                {controls}
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {winner}
                {players}
            </main>
        </div>
    );
};
Layout.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
        appBar: PropTypes.string,
        drawerPaper: PropTypes.string,
        toolbar: PropTypes.string,
        content: PropTypes.string
    }).isRequired,
    controls: PropTypes.node.isRequired,
    players: PropTypes.arrayOf(PropTypes.node),
    winner: PropTypes.node
};

export default withStyles(styles)(Layout);