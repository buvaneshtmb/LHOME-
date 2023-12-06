import css from '../../../styles/bookfreedesign.module.scss';
import Bookfreedropdown from '../../components/SelectButton/Bookfreedropdown';
function ThirdStep() {
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
                    <p className={css.heading}>USAGE</p>
                    <p className={css.step}> Step 3 0f 3</p>
                </div>
                <div className={css.book_Content}>
                    <Bookfreedropdown district={district} heading="Pick the nearest experience centre" />
                    <div className={css.NextBook_page}>
                        <div className={css.Dropdown_list}><Bookfreedropdown district={district} heading="Book a meeting with our Design Expert" /></div>
                        <div className={css.Dropdown_list}><Bookfreedropdown district={district} heading="Possession in..." /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ThirdStep;