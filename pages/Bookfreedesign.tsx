import React from 'react';
import '../styles/bookfreedesign.module.scss'
import PageHeader from "./components/PageHeader";
import * as config from "./../next.config.js";
import css from '../styles/bookfreedesign.module.scss'
import Selectbutton from './components/SelectButton/selectbutton';
import { MdApartment,MdOutlineHolidayVillage,MdHome  } from "react-icons/md";
import Radibutton from './components/SelectButton/RadiButton';
import  Bookfreedropdown  from './components/SelectButton/Bookfreedropdown';


interface homeproperties {
    screenwidth: number;
    screenheight: number;

}
const Bookfreedesign: React.FC<homeproperties> = ({ screenwidth, screenheight }) => {
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
    
//     const labels: string[] = [
//         { label: "Apartment", icon: <MdApartment/> },
//         { label: "Villa", icon: <MdOutlineHolidayVillage /> },
//         { label: "Independent Home", icon: <IndependentHomeIcon /> }
// ];
const labels:string[] = ["Apartment","Villa","Independent Home"];
const district: string[]=[
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kanchipuram",
    "Kanniyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivagangai",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar"
  ];
   

    return (
        <>
            <div>
                <div className={hidden ? "hidden" : ""}>
                    <PageHeader screenwidth={screenwidth} screenheight={screenheight} assetpath={assetpath} hidden={true} />
                </div>
                <div className={css.Book_heading_content}>
                <p className={css.heading}>Basic Information</p>
                <p className={css.step}> Step 1 0f 3</p>
                </div>
                <div className={css.book_Content}>
                    <Selectbutton labels={labels}/>
                    <Radibutton/>
                    <Bookfreedropdown district={district} heading="My Locality is"/>
                </div>
                <div className={css.Bookfreedesign_Button_content}><button className={css.Bookfreedesign_Button}>NEXT</button></div>
            </div>
        </>
    )
}
export default Bookfreedesign;