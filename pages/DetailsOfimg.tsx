import React from 'react';
import css from '../styles/detailsOfimg.module.scss';
import * as config from "../next.config.js";
import { simpleCallInitAPI } from '../services/ApicallInit';
import { BsHeart } from 'react-icons/bs';
import {FaFacebookF,FaInstagram,FaTwitter,FaTelegramPlane,FaWhatsapp,FaLinkedinIn,FaYoutube} from 'react-icons/fa';

interface properties {
    data: any;
    selectedItem: any;
}


const DetailsOfimg: React.FC<properties> = ({ data, selectedItem }) => {

    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const [socialMediaList, setSocialMediaList] = React.useState([]);

    React.useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let socialMediaIcons = [];
            data.data.settings.socialMediaIcons.forEach((datas: any) => {
                let lc: any = {};
                lc.image = `${assetpath}${datas.iconsList1}`;
                socialMediaIcons.push(lc);
            });

            setSocialMediaList(socialMediaIcons);

        })
            .catch(error => {
                console.log(error);
            });
    }, [assetpath]);
    return (
        <React.Fragment>
            <div className={css.detailOff}>
                {/* Displaying selectedItem details */}
                <div className={css.imageContent}>
                    <div className={css.imageOfcon}>
                        <img src={selectedItem.image} alt='description of the content' />
                    </div>
                    <div className={css.contentOfimg}>
                        <div className={css.wording}>
                            <h4 className={css.heading}>{selectedItem.name}</h4>
                            <div className={css.Type_size}>
                                <span>{selectedItem.size}</span>|<span>{selectedItem.type}</span>
                            </div>
                            <p className={css.paragraph}>{selectedItem.para}</p>
                            <div className={css.shareIcon}>
                                <span className={css.shareText}>Share this design</span>
                                <div className={css.Socailmedia_icons}>
                                    <div className={css.Social_Content_icons}><FaFacebookF className={css.Social_icons} /></div>
                                    <div className={css.Social_Content_icons}><FaInstagram className={css.Social_icons} /></div>
                                    <div className={css.Social_Content_icons}><FaTwitter className={css.Social_icons} /></div>
                                    <div className={css.Social_Content_icons}><FaYoutube className={css.Social_icons} /></div>
                                    <div className={css.Social_Content_icons}><FaTelegramPlane className={css.Social_icons} /></div>
                                    <div className={css.Social_Content_icons}><FaWhatsapp className={css.Social_icons} /></div>
                                    <div className={css.Social_Content_icons}><FaLinkedinIn className={css.Social_icons} /></div>
                                </div>
                            </div>
                        </div>
                        <div className={css.btndivision}>
                            <button className={css.bookBtn}>BOOK FREE DESIGN SESSION</button>
                            <button className={css.wishBtn}><div className={css.wishBtn_content}><BsHeart className={css.Bs_heart} />WISHLIST</div></button>
                        </div>
                    </div>
                </div>

                {/* Displaying related images */}
                <div className={`${css.RelatedImg} container`}>
                    <p className={`${css.headingRelated} w-100`}>Related Design</p>
                    <div className={window.innerWidth <= 1000 ? `${css.Relatedimgtag_x}` : `row ${css.Relatedimgtag}`}>
                        {data.filter(item => item !== selectedItem).map((item, index) => (
                            <div key={index} className={item.image ? (window.innerWidth <= 1000 ? "col-3 m-3 " : "col-6 mb-3") : "d-none"}>
                                {item.image ?
                                    <img src={item.image} alt='remaining images' className={css.img_fluid} />
                                    : ''}
                            </div>
                        ))}
                    </div>
                </div>

                <div>

                </div>
            </div>
        </React.Fragment>
    )

}

export default DetailsOfimg;