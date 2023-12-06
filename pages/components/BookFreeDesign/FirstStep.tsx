import css from '../../../styles/bookfreedesign.module.scss';
import Selectbutton from '../../components/SelectButton/selectbutton';
import Radibutton from '../../components/SelectButton/RadiButton';
import Bookfreedropdown from '../../components/SelectButton/Bookfreedropdown';
function FirstStep() {
    const labels: string[] = ["Apartment", "Villa", "Independent Home"];
    const district: string[] = [
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
            <div className={css.getfree_Estimate_Content}>
                <div className={css.Book_heading_content}>
                    <p className={css.heading}>Basic Information</p>
                    <p className={css.step}> Step 1 0f 3</p>
                </div>
                <div className={css.book_Content}>
                    <Selectbutton labels={labels} heading="I own a..." />
                    <Radibutton />
                    <Bookfreedropdown district={district} heading="My Locality is" />
                </div>
            </div>
        </>
    )
}
export default FirstStep;