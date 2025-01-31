import React from 'react';
import css from '../styles/Contentchatbox.module.scss';
import Modal from 'react-bootstrap/Modal';
import { BsChevronDown,BsEmojiSmile } from 'react-icons/bs'
import {IoSendSharp} from  'react-icons/io5'
interface ChildProps {
    onDataReceived: (data: string) => void;
}
const Contentchatbox = (props: ChildProps) => {
    const [chatConversation, setChatConversation] = React.useState(false);

    const generateWavyClipPath = () => {
        const N = 100;
        let clipPath = "";

        for (let i = 0; i < N + 1; i++) {
            clipPath +=
                `${(100 / N) * i}% ${100 * (0.5 + 0.20 * Math.sin((2 * Math.PI * i) / N))
                }%,`;
        }

        clipPath = clipPath + "100% 100%,0 100%";
        return `polygon(${clipPath})`;
    };

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleOpenModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
        const data = 'Hi there !';
        props.onDataReceived(data);
        setChatConversation(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <React.Fragment>
            <div className={css.maindivchatbot}>
                <div style={{ clipPath: generateWavyClipPath() }} className={css.chatboxback}>
                    {/* <div className={css.contentOfchatbox}></div> */}

                </div>

                    <section className={css.sectionbg}>
                    {!chatConversation ?
                        <form>
                            <input type='text' className={css.SInput_1} placeholder='Enter your name' />
                            <input type='text' className={css.SInput_2} placeholder='Enter your email address' />
                            <input type='text' className={css.SInput_3} placeholder='Enter your mobile number ' />
                            <div className={css.withIconin}>
                                <button>
                                    <BsChevronDown className={css.BsChevronDown} />
                                </button>
                                <input type='text' className={css.SInput_4} placeholder="Select Your city " />
                            </div>
                            <textarea className={css.SI_textarea} placeholder='Type your message here and click submit ' ></textarea>
                            <div className={css.btnDiv}>
                                <button className={css.formBtn} onClick={handleOpenModal} >Submit</button>
                            </div>
                        </form>:
                        <div>
                        <div className={css.chatHistory}>hi</div>
                        <div className={css.type_Chat_Area}>
                            <input type='text' placeholder='Enter your message' className={css.TypeText}/>
                            <div className={css.bottom_chat_Icon}>
                            <div className={css.emojiIcon}><BsEmojiSmile/></div>
                            <div className={css.sendIcon}><IoSendSharp  className={css.sendIcon_content}/>
                            </div>
                            </div>
                        </div>
                        </div>
                        }
                    </section> 
                

            </div>

            {isModalOpen && <Modal onClose={handleCloseModal} />}
        </React.Fragment>
    )
}

export default Contentchatbox;