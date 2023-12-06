import css from '../../../styles/bookfreedesign.module.scss';
import Selectbutton from '../../components/SelectButton/selectbutton';
import Bookfreedropdown from '../../components/SelectButton/Bookfreedropdown';
function SecondStep() {
    const Planinglabels: string[] = ["Move In", "Rent Out", "Renovate"];
    const Lookinglabels: string[] = ["End-to-end Interiors", "Kitchen and Wardrobes", "Only Kitchen"];
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
                    <p className={css.step}> Step 2 0f 3</p>
                </div>
                <div className={css.book_Content}>
                    <Selectbutton labels={Planinglabels} heading="I am planning to..." />
                    <div style={{ paddingTop: "4%" }}><Selectbutton labels={Lookinglabels} heading="I am looking for..." /></div>
                    <div className={css.NextBook_page}>
                        <div className={css.Dropdown_list}><Bookfreedropdown district={district} heading="I have a budget of..." /></div>
                        <div className={css.Dropdown_list}><Bookfreedropdown district={district} heading="Possession in..." /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SecondStep;