import React from "react";
import css from "./Customersupport.module.scss";
import Button from 'react-bootstrap/Button';
import Image from "next/image";
import { AxiosService } from "../../../services/ApiService";
import { getUserId } from "../../../services/sessionProvider";
import { useRouter } from "next/router";

const RaiseIssue = () => {
    const [issue , setIssue ] = React.useState<string>('');
    const [error , setError ] = React.useState<string>('');
    const router = useRouter();


    const handleSubmit = async(e) => {
        e.preventDefault();
        if(issue=='' || issue == ' '){
            setError(`You can't submit empty value as issue`);
        }else if(issue.length <=20){
            setError(`Issue can't be this much short. Please elaborate your issue`);
            router.replace({pathname: "/CustomersupportPage" , query:{tab : 1}} );
            router.reload();
        }else{
            setError('');
        }
        if(issue!='' && error ==''){
            const response = await AxiosService.post('/postissue' , {
                userId : getUserId(),
                issue
            })
            if( response && response.status == 200){
            }
            
        }
        
    }
    return (
        <>
            <div className={"container "+css.containerForLG}>
                <div className={css.Customersupportpage}>
                    <h5 className={css.head}>Reach out us</h5>
                    <div className={css.customlogo}>
                        <Image src={require("../../../public/assets/Tabimage/email.png")} alt="Email" className={css.referearn_socialicon} />
                        <Image src={require("../../../public/assets/Tabimage/WhatsAppicon.webp")} alt="WA" className={css.referearn_socialicon} />
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className={css.customertext}>
                        <textarea className={css.texthere} placeholder="texthere..." onChange={(e)=>setIssue(e.target.value)}></textarea>
                    </div>
                    <span className="text-red-500">{error}</span>
                    <div> <Button className={css.btncontrol} type="submit">Submit</Button></div>
                    </form>
                </div>
            </div>


        </>
    )
}
export default RaiseIssue;





















































































