/* import external modules */
import { useDispatch, useSelector } from 'react-redux'
import { Step, Stepper, Button, StepLabel, Grid } from '@material-ui/core'

/* import internal modules */
import DataTurn from '../DataTurn'
import Logo from '../../atoms/Logo'
import { useStyles } from './styles'
import AlertDialog from '../AlertDialog'
import { setSaveDataUser } from '../../../redux/actions/user/user'
import UserDataFormLayout from '../../templates/UserDataFormLayout'
import { setHandleStepper } from '../../../redux/actions/common/common'

/** @description This is a functional component for stepper
 *  @version 1.0.0
 *  @since 29/04/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name Stepper
 *  @returns {Component} Returns the layout stepper
 **/

const getSteps = () => {
  const steps = [0]

  return steps
}

const getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return <UserDataFormLayout />
    default:
      return 'Unknown stepIndex'
  }
}

const HorizontalLabelPositionBelowStepper = () => {
  const steps = getSteps()
  const classes = useStyles()
  const dispatch = useDispatch()
  const currentStep = useSelector((state) => state.common.handleStepper)

  const handleNext = () => {
    // const next = currentStep < steps.length - 1 ? currentStep + 1 : currentStep

    // if (currentStep === 1) {
    dispatch(setSaveDataUser())
    // }

    // dispatch(setHandleStepper(next))
  }

  const handleBack = () => {
    dispatch(setHandleStepper(currentStep - 1))
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        className={classes.stepper}
        justifyContent="space-around"
      >
        <Grid item xs={6} md={3}>
          <div className={classes.logo}>
            <Logo />
          </div>
        </Grid>
        <Grid item xs={6} md={9}>
          <Stepper alternativeLabel activeStep={currentStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel />
              </Step>
            ))}
          </Stepper>
        </Grid>
      </Grid>

      <div>{getStepContent(currentStep)}</div>

      <AlertDialog showOpenButton={false} showCloseButton={false}>
        <DataTurn />
      </AlertDialog>

      <div className={classes.buttons}>
        <Button
          disabled={currentStep === 0}
          onClick={handleBack}
          className={classes.backButton}
        >
          Back
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={handleNext}
          className={classes.continueButton}
        >
          {currentStep === steps.length - 1 ? 'Accept' : 'Continue'}
        </Button>
      </div>
    </div>
  )
}

export default HorizontalLabelPositionBelowStepper
