import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#EFEFEF',
    padding: theme.spacing(3),
    borderRadius: '30px',

  },
  root: {
    flexGrow: 1,
  },
}));