import * as React from "react";
import css from '../../styles/PageHeader.module.scss';
import DropDownMenu from './DropDownMenu';
import CitiesDropDownMenu from './CitiesDropDown';
import { simpleCallInitAPI } from '../../services/ApicallInit'
import Link from 'next/link';
import OtherDropDownMenu from './OtherDropDown';
import { BsHeadset } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal';
import LoginRegisterPage from '../loginRegisterPage';
import { AiFillCloseCircle } from 'react-icons/ai'
import { getToken } from "../../services/sessionProvider";
import Cookies from 'js-cookie';


interface pageheaderproperties {
  screenwidth: number;
  screenheight: number;
  assetpath: string;
  hidden: boolean;
  headerVisible?: boolean;
}

let menuoptions: any = [];
let smallmenuoptions: any = [];
let menuoptionsstringed: string = "";
let smallmenuoptionsstringed: string = "";
let cities: string[] = [];
let other: string[] = [];
let menuGaps = [];
let smallmenuGaps = [];
let Lhome: string = "";

const PageHeader: React.FC<pageheaderproperties> = ({ screenwidth, screenheight, assetpath, hidden }) => {
  // const navigate = Router.useNavigate(); 
  const [height, setHeight] = React.useState(screenheight);
  const [width, setWidth] = React.useState(screenwidth);
  const [updatemenu, setUpdateMenu] = React.useState(0);
  const [updatesmallmenu, setUpdateSmallMenu] = React.useState(0);
  const menuOptions = ["Home", "Design Gallery", "Modular Kitchen", "Wardrobe", "Bedroom", "Living Room", "Bath Room", "Space Saving Furniture", "Home Office", "Others"];
  const smallMenuOptions = ["Partner With LHome", "Refer and Earn", "Join Us", "Citiea", "Visit Us", "Customer Support"];
  const smallmenuOptions = ['']
  const [menuoptionsstring, setMenuOptionsString] = React.useState("");
  const [smallmenuoptionsstring, setSmallMenuOptionsString] = React.useState("");
  const [citiesdropdown, setCitiesDropDown] = React.useState(false);
  const [otherDropDown, setOtherDropDown] = React.useState(false);
  const logo = React.useRef(null);
  const [homeLogo, sethomeLogo] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [chatBoxShow, setChatBoxShow] = React.useState(false);
  const [receivedData, setReceivedData] = React.useState('');
  const [isAuth , setAuth] = React.useState(false);

  React.useEffect(() => {
    function getsettings() {
      let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
      api.then((data: any) => {
        menuoptions = data.data.settings.menuoptions
        smallmenuoptions = data.data.settings.smallmenuoptions;
        cities = data.data.settings.cities;
        other = data.data.settings.other
        menuGaps = data.data.settings.menuGaps;
        smallmenuGaps = data.data.settings.smallmenuGaps;
        Lhome = data.data.settings.logo;
        let totalwidth = 0;
        if (screenwidth < 500) {
          totalwidth = screenwidth - (document.querySelector("#logo") as HTMLDivElement).offsetWidth - 135;
        } else {
          totalwidth = screenwidth - (document.querySelector("#logo") as HTMLDivElement).offsetWidth - 350;
        }
        let residuewidth = 0;
        let newoptions = [];
        menuoptions.forEach((option: any, index: number) => {
          if (residuewidth + Number(menuGaps[index]) > totalwidth) {
            newoptions.push(option);
          } else {
          }
          residuewidth += Number(menuGaps[index]);
        });
        menuoptions = newoptions;
        menuoptionsstringed = menuoptions.join(",") + ',';
        setMenuOptionsString(menuoptionsstringed);
        setUpdateMenu(Math.random())
        totalwidth = screenwidth - (screenwidth * .6) - 100;
        residuewidth = 0;
        newoptions = [];
        smallmenuoptions.forEach((option: any, index: number) => {
          if (residuewidth + Number(smallmenuGaps[index]) > totalwidth) {
            newoptions.push(option);
          } else {
          }
          residuewidth += Number(smallmenuGaps[index]);
        });
        smallmenuoptions = newoptions;
        smallmenuoptionsstringed = smallmenuoptions.join(",") + ',';
        setSmallMenuOptionsString(smallmenuoptionsstringed);
        setUpdateSmallMenu(Math.random());
        setCitiesDropDown(true);
        sethomeLogo(`${assetpath}${data.data.settings.logo}`);
      })
        .catch(error => {
          console.log(error);
        });
    }
    getsettings();
    setAuth(getToken()? true : false);
  }, [screenwidth, assetpath , show]);


  const handlePopup = () => {
    setShow(true);
  }
  const handleClose = () => setShow(false);
  const handleCloseBox = () => setChatBoxShow(false);
  const handleChatBox = () => {
    setChatBoxShow(true);
  }
  const handleChildData = (data) => {
    setReceivedData(data);
  };

  const handleLogout = ()=>{
    Cookies.remove('token');
    Cookies.remove('userId');
    console.log('Cookies deleted successfully:', Cookies.get());
    setAuth(false)
  }


  return (
    <React.Fragment>
        <div className={`stickly transition-all duration-500`}>
          <div className={hidden ? `${css.headerHidden}` : `${css.headerOuter}`}>
            <div className={css.headerLeft}>
              <div id="logo" className={`${css.lhomelogoholder}`}>
                <div className={css.lhomelogo}>
                  {/* <div ref={logo} className={`${css.lhomelogomask}`} /> */}
                  <img src={homeLogo} alt='homeLogo' key={"UniqueKey"} />
                </div>
              </div>
            </div>

            {!hidden && (
              <div className={css.headerRight}>
                <div className={css.smallMenuButtons}>
                  <div className={css.emptyBand}>
                  {smallmenuoptionsstring.indexOf("Partner With LHome,") < 0 ?
                    <Link href={{ pathname: '/partnership' }}><div className={`${css.smallMenuBand} ${css.customWidthpx_14}`}>
                      Partner With LHome
                    </div>
                    </Link>
                    : ""}
                  {smallmenuoptionsstring.indexOf("Refer and Earn,") < 0 ?
                    <Link href={{ pathname: '/referandearn' }}> <div className={`${css.smallMenuBand} ${css.customWidthpx_14}`}>
                      Refer and Earn
                    </div>
                    </Link>
                    : ''}
                  {smallmenuoptionsstring.indexOf("Join Us,") < 0 ?
                    <Link
                      href="/joinuspage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${css.smallMenuBand} ${css.customWidthpx_14}`}
                    >
                      Join Us
                    </Link>
                    : ''}

                  {smallmenuoptionsstring.indexOf("Cities,") < 0 ?
                    <div className={`${css.smallMenuBand} ${css.customWidthpx_14}`}>
                      <div className={`${css.cityText} ${css.textpaddingleft}`}>Cities</div>
                      <div className={css.citiesDropdown}>
                        {citiesdropdown ?
                          <CitiesDropDownMenu options={cities} positionmove={"1px"} />
                          : ''
                        }
                      </div>
                    </div>
                    : ''}
                  {smallmenuoptionsstring.indexOf("Visit Us,") < 0 ?
                    <Link href={{ pathname: "/visitus" }} > <div className={`${css.smallMenuBand} ${css.customWidthpx_14}`} >

                      Visit Us
                    </div>
                    </Link>
                    : ''}


                  {smallmenuoptionsstring.indexOf(",Customer Support") < 0 ?
                    <Link href={{ pathname: "/CustomersupportPage" }} style={{ display: 'flex', alignItems: "center" }}>
                      <BsHeadset color="black" size={window.innerWidth > 2500 ? 30 : 15} />
                      <div className={`${css.smallMenuBand} ${css.customWidthpx_100}`}>
                        Customer Support
                      </div>
                    </Link>
                    : ''}

                  {smallmenuoptions.length > 0 && screenwidth && screenwidth < 1250 ?
                    <div id="dropdownoptions" rel="smalloptions" className={`${css.smallMenuBand} ${css.customWidthpx_6}`}>
                      <DropDownMenu updatesmallmenu={updatesmallmenu} options={smallmenuoptions} fontclass={"yes"} cities={cities} />
                    </div>
                    : ''
                  }
                </div>
                </div>
                <div className={css.largeMenuButtons} id="largeoptions">
                  <div className={css.menuHolder}>
                    {menuoptionsstring.indexOf("Home,") < 0 ?
                      <Link href={{ pathname: '/' }}><div id="home" rel="largeoptions" className={`${css.largeMenuBand} ${css.customWidthpx_14}`}>
                        Home</div>
                      </Link>
                      : ''
                    }
                    {menuoptionsstring.indexOf("Design Gallery,") < 0 ?
                      <Link href={{ pathname: '/designgallery' }}><div id="designgallery" rel="largeoptions" className={`${css.largeMenuBand} ${css.customWidthpx_14}`}>
                        Design Gallery</div>
                      </Link>
                      : ''
                    }
                    {menuoptionsstring.indexOf("Modular Kitchen,") < 0 ?
                      <Link href={{ pathname: '/modularkitchen' }}><div id="modularkitchen" rel="largeoptions" className={`${css.largeMenuBand} ${css.customWidthpx_14}`}>
                        Modular Kitchen</div>
                      </Link>
                      : ''
                    }
                    {menuoptionsstring.indexOf("Wardrobe,") < 0 ?
                      <Link href={{ pathname: '/wardrobe' }}><div id="wardrobe" rel="largeoptions" className={`${css.largeMenuBand} ${css.customWidthpx_14}`}>
                        Wardrobe</div>
                      </Link>
                      : ''
                    }
                    {menuoptionsstring.indexOf("Bedroom,") < 0 ?
                      <Link href={{ pathname: '/bedroom' }}><div id="bedroom" rel="largeoptions" className={`${css.largeMenuBand} ${css.customWidthpx_14}`}>
                        Bedroom</div>
                      </Link>
                      : ''
                    }
                    {menuoptionsstring.indexOf("Living Room,") < 0 ?
                      <Link href={{ pathname: '/livingroom' }}><div id="livingroom" rel="largeoptions" className={`${css.largeMenuBand} ${css.customWidthpx_14}`}>
                        Living Room</div>
                      </Link>
                      : ''
                    }
                    {menuoptionsstring.indexOf("Bath Room,") < 0 ?
                      <Link href={{ pathname: '/bathroom' }}> <div id="bathroom" rel="largeoptions" className={`${css.largeMenuBand} ${css.customWidthpx_14}`}>
                        Bath Room</div>
                      </Link>
                      : ''
                    }
                    {menuoptionsstring.indexOf("Space Saving Furniture,") < 0 ?
                      <Link href={{ pathname: '/spacesavingfurniture' }}><div id="spacesavingfurniture" rel="largeoptions" className={`${css.largeMenuBand} ${css.customWidthpx_14}`}>
                        Space Saving Furniture</div>
                      </Link>
                      : ''
                    }
                    {menuoptionsstring.indexOf("Home Office,") < 0 ?
                      <Link href={{ pathname: '/homeoffice' }}> <div id="homeoffice" rel="largeoptions" className={`${css.largeMenuBand} ${css.customWidthpx_14}`}>
                        Home Office</div>
                      </Link>
                      : ''
                    }
                    {menuoptionsstring.indexOf("Customer stories,") < 0 ?
                      <div id="others" rel="largeoptions" className={`${css.largeMenuBand} ${css.customWidthpx_6} + d-flex`}>
                        <div>Other</div>
                        <div className={css.otherDropDown}>
                          {citiesdropdown ?
                            <OtherDropDownMenu options={other} positionmove={"1px"} />
                            : ''
                          }
                        </div>
                      </div>
                      : ''
                    }
                    {menuoptions.length > 0 ?
                      <div id="dropdownoptions" rel="largeoptions" className={`${css.largeMenuBand} ${css.customWidthpx_6}`}>
                        <DropDownMenu updatemenu={updatemenu} fontclass={""} options={menuoptions} />
                      </div>
                      : ''
                    }
                   {isAuth ?<button className={css.userLoginRegister} onClick={handleLogout}> Logout </button> :  <div className={css.userLoginRegisterHolder}>
                      <button className={css.userLoginRegister} onClick={handlePopup}>
                        Login / Register
                      </button>
                      <Modal show={show} onHide={handleClose} className={css.Modal_Popup}>
                        <Modal.Header  >
                          <AiFillCloseCircle onClick={handleClose} />
                        </Modal.Header>
                        <LoginRegisterPage setShow={setShow}/>
                      </Modal>

                    </div>}
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      
      {/* chat bot div  */}
      {/* <div className={css.chat_Box}>
        <HiOutlineChatAlt2 className={css.Chat} onClick={handleChatBox} />
        <Modal show={chatBoxShow} onHide={handleCloseBox} className={css.ChatBox_Popup}>
          <Modal.Header >
            <div className={css.white_bg}>
              <img src={homeLogo} alt="homeLogo" className={css.round_image} />
            </div>
            <p className={css.chat_Box_Heading}>{receivedData ? receivedData : "Chat with us now"}</p>
            <BsThreeDotsVertical className={css.bs_fonts} />
            <BsChevronDown onClick={handleCloseBox} className={css.bs_fonts} />
          </Modal.Header>
          <Contentchatbox onDataReceived={handleChildData} />
        </Modal>
      </div> */}
    </React.Fragment>
  )
}
export default PageHeader;
