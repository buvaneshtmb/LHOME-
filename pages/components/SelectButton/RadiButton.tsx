import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import css from './Selectbutton.module.scss';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: 'red',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: 'red',
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default function Radibutton() {
  return (
    <FormControl style={{width:"100%"}}>
      <p className={css.radio_button_Heading}>Your floorplan</p>
      <RadioGroup defaultValue="female" aria-labelledby="demo-customized-radios" name="customized-radios" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"0 0 0 0.5%"}}>
        <FormControlLabel value="1 BHK" control={<BpRadio />} label="1 BHK"/>
        <FormControlLabel value="2 BHK" control={<BpRadio />} label="2 BHK"/>
        <FormControlLabel value="3 BHK" control={<BpRadio />} label="3 BHK"/>
        <FormControlLabel value="4 BHK" control={<BpRadio />} label="4 BHK"/>
        <FormControlLabel value="5 BHK" control={<BpRadio />} label="5 BHK"/>
        <FormControlLabel value="6 BHK" control={<BpRadio />} label="6 BHK"/>
      </RadioGroup>
    </FormControl>
  );
}
