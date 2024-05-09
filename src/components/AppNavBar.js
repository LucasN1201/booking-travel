import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, Typography} from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import { makeStyles } from '@mui/styles';
import RadiusButton from './RadiusButton'
import RadiusToolbar from './RadiusToolbar'
import { Label } from 'reactstrap'
import BlueAppbar from './BlueAppbar'

const useStyles = makeStyles({
  navBarBtn: {
    backgroundColor: '#fff !important',
    borderRadius: 20,
    color: '#000 !important',
    fontSize: 20
  },
});


const AppNavBar = () => {
  const dispatch = useDispatch()
  const styles = useStyles()

  return (
      <BlueAppbar>
        <RadiusToolbar>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <AccessAlarmIcon/>
            </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <label> Bookai.travel</label>
           
          </Typography>
          <RadiusButton children="Sign-up" className={styles.navBarBtn}>
          </RadiusButton>
          <RadiusButton 
            color="inherit" children="Log-in">
          </RadiusButton>
        </RadiusToolbar>
      </BlueAppbar>
  )
}

export default AppNavBar
