import React from 'react';
import css from "./DynamicIterableComponent.module.scss";
import Image from 'next/image';
import Modal from 'react-bootstrap/Modal'
import { BsFillHeartPulseFill, BsHeart, BsHeartPulseFill } from "react-icons/bs";
import { FaRegShareFromSquare } from 'react-icons/fa6';
import { AiFillCloseCircle } from 'react-icons/ai';
import DetailsOfimg from '../../DetailsOfimg';
import { AxiosService } from '../../../services/ApiService';
import { getUserId } from '../../../services/sessionProvider';
import toast, { useToaster } from 'react-hot-toast';


interface properties {
    data: any ,
    categoryId : any
}



const DynamicIterableComponent: React.FC<properties> = ({ data , categoryId}) => {
    const toaster = useToaster();
    const [show, setShow] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [res , setRes] = React.useState([]);

    React.useEffect(()=>{
        let fetchData = async () => {
            try {
                 const response = await AxiosService.post('/wishes', {
                   loginId: getUserId(),
                   categoryId : categoryId
                 });
                 setRes(Array.isArray(response.data?.wishlist) ? response.data?.wishlist : []);
             
            } catch (error) {
              console.error('Error:', error.message);
            }
          };
      
          fetchData();
    },[])

     
    const handlelike = async(index) => {        
        try {
            if(getUserId()){
                const resp = await AxiosService.post(`/wish/${index}`, {loginId: getUserId() , categoryId : categoryId})
    
                if(resp?.status === 200){
                    const response = await AxiosService.post('/wishes', {
                        loginId: getUserId(),
                        categoryId : categoryId
                      });
                      setRes(Array.isArray(response.data?.wishlist) ? response.data?.wishlist : []);            }
            }else{
                alert('please login to use');
            }

        } catch (error) {
            console.log(error)
        }
    }

    const updatedData = data.map((element, index) => {
        const matchingItem = res.find(item => item.index === index);
        if (matchingItem) {
          return { ...element, liked: true };
        }
        return element;
      });


    const handlePopup = (item) => {
        setSelectedItem(item);
        setShow(true);
    };
    

    const handleClose = () => {
        setShow(false);
    }

    return (
        <React.Fragment>
            <div>
                <div className="w-full">
                    <div className={"container-fluid " + css.mainBlock}>
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
                            {
                                updatedData.map((item, index) => (
                                    <div className={"p-3 w-full h-full " + css.divCard} key={index} 
                                    >
                                        {item?.image ?
                                            <div className={css.customdivisionchild}  >
                                                <div className={css.customimage} >
                                                    <img loading="lazy" className='' src={item.image} onClick={() => handlePopup(item) } alt='images' />
                                                    <div className={" w-full flex grid-cols-5 "} style={{padding:"2% 0 3%"}}>
                                                        <div className="w-full col-span-3 " onClick={() => handlePopup(item) }>
                                                            <span className={css.customname + " sm:text-[8px] md:text-[12px]"}>{item.name}</span>
                                                            <span className={css.customtext}>
                                                                {item.size}
                                                            </span>
                                                        </div>
                                                        <div  className={css.dynamicIcons_content}>
                                                        <div className={'col-span-1 ' + css.com_icons} >
                                                            <span className={css.wishlistholder} >
                                                            <div onClick={()=>handlelike(index)}>
                                                            {
                                                                    item?.liked ? <BsFillHeartPulseFill /> : <BsHeart /> 
                                                            }
                                                        </div> 
                                                            </span>
                                                        </div>
                                                        <div className={'col-span-1 ' + css.com_icons} >
                                                            <span className={css.shareholder}>
                                                                <FaRegShareFromSquare />
                                                            </span>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div className={css.customdivisionchild}>
                                                <div className={css.customGrey + " grid grid-rows-3"}>
                                                <div className='flex flex-column gap-2 items-center'>
                                                    <div className={css.custom_icons}>
                                                        <img src={item.icon} alt="icon" className={css.icon_image} />
                                                    </div>
                                                    <div className='row '>
                                                        <div className='col-lg-2 '></div>
                                                        <div className='col-lg-8 '><p className={css.content} 
                                                        dangerouslySetInnerHTML={{ __html: item.content }}></p></div>
                                                        <div className='col-lg-2 '></div>
                                                    </div>
                                                    </div>
                                                    <div className='flex w-full justify-center'>
                                                        {item.btn && <button className={css.btnStyle}>{item.btn}</button>}
                                                    </div>
                                                </div>
                                            </div>
                                        }

                                    </div>
                                ))
                            }
                            <Modal show={show} onHide={handleClose} className={css.Modal_Popup}>
                                <Modal.Header >
                                    <AiFillCloseCircle onClick={handleClose} />
                                </Modal.Header>
                                <DetailsOfimg data={data} selectedItem={selectedItem}/>

                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DynamicIterableComponent;
