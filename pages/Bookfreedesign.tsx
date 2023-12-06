import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as config from "./../next.config.js";
import Typography from '@mui/material/Typography';
import css from '../styles/bookfreedesign.module.scss';
import PageHeader from "./components/PageHeader";
import SecondStep from './components/BookFreeDesign/SecondStep';
import ThirdStep from './components/BookFreeDesign/ThirdStep';
import FirstStep from './components/BookFreeDesign/FirstStep';
const steps = [
    'Select campaign settings',
    'Create an ad group',
    'Create an ad'
    // Add more steps as neededkk
];
interface homeproperties {
    screenwidth: number;
    screenheight: number;

}
const Bookfreedesign: React.FC<homeproperties> = ({ screenwidth, screenheight }) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const living = React.useRef(null);

    const page = React.useRef(null);
    const [prevPosition, setPrev] = React.useState(0);
    const [hidden, setHidden] = React.useState(false);

    const pageheaderMonitor = () => {
        if (page.current.scrollTop > prevPosition) {
            setPrev(page.current.scrollTop)
            setHidden(true)
        } else {
            setHidden(false)
            setPrev(page.current.scrollTop)

        }
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleComplete = () => {
        const newCompleted = { ...completed };
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };
    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <Typography>
                        <FirstStep/>
                    </Typography>
                );
            case 1:
                return (
                    <Typography>
                        <SecondStep/>
                    </Typography>
                );
            case 2:
                return (
                    <Typography>
                        <ThirdStep/>
                    </Typography>
                );
            default:
                return (
                    <Typography>
                        No content for this step
                    </Typography>
                );
        }
    };

    const isLastStep = activeStep === steps.length - 1;

    return (
        <>
            <div className={hidden ? "hidden" : ""}>
                <PageHeader screenwidth={screenwidth} screenheight={screenheight} assetpath={assetpath} hidden={true} />
            </div>
            <Box sx={{ width: '100%' }}>
                <div>
                    <div className={css.getfree_Estimate_Content}>
                        {getStepContent(activeStep)}
                    </div>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 2 ,width:'85%'}}>
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={css.Bookfreedesign_Button_Back}
                        >
                            Back
                        </Button>
                        {isLastStep ? (
                            <Button
                                onClick={handleComplete}
                                className={css.Bookfreedesign_Button}
                            >
                                Book free design session
                            </Button>
                        ) : (
                            <Button
                                onClick={handleNext}
                                className={css.Bookfreedesign_Button}
                            >
                                Next
                            </Button>
                        )}
                    </Box>
                </div>
            </Box>
        </>
    );
}

export default Bookfreedesign;
