import React from "react";
import css from "../styles/bathroom.module.scss";
import * as config from "../next.config.js";
import { simpleCallInitAPI } from "../services/ApicallInit";
import PageHeader from "./components/PageHeader";
import Link from "next/link";
import Ideas from "./components/MeetDesigner/ideas";
import Autoplay from "./components/Autoplayslider/Autoplayslider";
import ReferNowPage from "./components/ReferNow/ReferNowPage";
import Warranty from "./components/warranty/Warranty";
import FAQPage from "./components/Faq/FAQPage";
import Guranted from "./components/Guranted/Guranted";
import Footer from "./components/Footer/Footer";
import DynamicIterableComponent from "./components/IterableComponent/DynamicIterableComponent";
import BathroomBaner from "./components/bathroom/bathroombanner";


const HomeOffice: React.FC = () => {

  const [homeOffice, setHomeoffice] = React.useState([])

  const living = React.useRef(null);
  const [screenwidth, setWidth] = React.useState(window.innerWidth);
  let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
  let hgtt = 0;
  if (window.innerWidth < 600) {
    hgtt = window.innerHeight - 210;
    if (window.innerWidth > 490 && window.innerWidth < 512) {
      hgtt += 10;
    }
  } else {
    hgtt = window.innerHeight - 160;
  }
  const [screenheight, setHeight] = React.useState(hgtt);


  const handleResize = React.useCallback(() => {
    setWidth(window.innerWidth);
    let hgtt = 0;
    if (window.innerWidth < 600) {
      hgtt = window.innerHeight - 210;
      if (window.innerWidth > 490 && window.innerWidth < 512) {
        hgtt += 10;
      }
      if (window.innerWidth > 571 && window.innerWidth < 599) {
        hgtt += 50;
      }
      if (window.innerWidth > 570 && window.innerWidth < 572) {
        hgtt += 45;
      }
      if (window.innerWidth > 509 && window.innerWidth < 571) {
        hgtt += 25;
      }
      if (window.innerWidth > 500 && window.innerWidth < 510) {
        hgtt += 15;
      }
      if (window.innerWidth < 500) {
        hgtt -= 10;
      }
    } else {
      hgtt = window.innerHeight - 160;
    }
    setHeight(hgtt);
  }, []);

  const handleResized = React.useCallback(() => {
    setTimeout(() => {
      handleResize();
    }, 1000);
  }, [handleResize]);

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResized);
  }, [assetpath, handleResize, handleResized])

  React.useEffect(() => {
    let api = simpleCallInitAPI(`${assetpath}/assets/bathroom.json`);
    api.then((data: any) => {
      setHomeoffice(data.data.bathroom);
    });
  });

  return (

    <React.Fragment>
      <div className="animate-fade-in">
        <div className={css.lhomePage}>
          <PageHeader screenwidth={screenwidth} screenheight={screenheight} assetpath={assetpath} hidden={false} />
          <div className={css.LhomeBottom}>
            <div><BathroomBaner /></div>

            <div className={css.bgclr}>
              <div className={css.filter_home}>
                <div className="pt-4">
                  <span className={css.filter_link_span1}><Link href={{ pathname: "/" }} className={css.kitchen_filter_link}>Home</Link></span>
                  <span className={css.filter_slash}>/</span>
                  <span className={css.filter_link_span2}><Link href={{ pathname: "/bathroom" }} className={css.kitchen_filter_link}>bathroom</Link></span>
                </div>
              </div>
              <p className={css.filter_header_content}>Bathroom</p>
              <div className="row ">
                <div className="col-lg-4 "> </div>
                <div className={"col-lg-4 " + css.filter_content}><p className={css.filter_additional_content}>Transform your kitchen to the heart of your home with the help of LHome.
                  From coffee dates to dinner parties, our end-to-end design and installation
                  services will turn your kitchen into a stylish and functional space.</p></div>
                <div className="col-lg-4 "> </div>
              </div>
            </div>

            <div className={css.mainIdea}>
              <Ideas prop="Bath Room" color="red" />
            </div>
            <div><DynamicIterableComponent data={homeOffice} /></div>
            <div><Autoplay living={living} /></div>
            <div><ReferNowPage /></div>
            <div><Warranty /></div>
            <div><FAQPage /></div>
            <div><Guranted /></div>
            <div><Footer /></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default HomeOffice;