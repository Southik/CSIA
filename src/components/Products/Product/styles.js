import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        boxShadow: '0 0 25px #999999',

    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        
    },
    
    
}));