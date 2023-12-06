
import RestAPI from "./restAPI";
const ApiCallInit = (DataProperties:any,id:any,resultRows:string,checkCount:string,evalue:object,apiewhere:any,Status:string,statevalues:any) => {
    if (DataProperties &&  DataProperties[0]){
       const headers = new Headers();
       headers.append("Content-Type", "application/json");
       let params:any = {};
       params.url = DataProperties[0].tablelink;
       params.headers = headers;
       params.method = "POST";   
       params.data = {};
       params.data.table = DataProperties[0].tableupdate;         
       let napifields = {};
       Object.keys(DataProperties[0].tablefields).forEach((fld)=>{
          if (DataProperties[0].tablefields[fld].toUpperCase().indexOf("G#") < 0 && DataProperties[0].tablefields[fld].toUpperCase().indexOf("S#")){
              napifields[fld] = DataProperties[0].tablefields[fld];
          }
          if (DataProperties[0].tablefields[fld].toUpperCase().indexOf("G#") > -1)   {

          } 
          if (DataProperties[0].tablefields[fld].toUpperCase().indexOf("S#") > -1){
              let sfld = DataProperties[0].tablefields[fld].split("#");
              if (evalue[sfld[1]]){
                  napifields[fld] = evalue[sfld[1]];
              }
          }
       });
       params.data.fields = napifields;
       params.data.queryfields = {};
       params.data.group = DataProperties[0].tablegroup;
       params.data.order = DataProperties[0].tableorder;
       params.data.types = DataProperties[0].tabletypes;
       params.data.subtypes = DataProperties[0].tablesubtypes;
       params.data.emailsend = DataProperties[0].emailsend; 
       params.data.emailheader = DataProperties[0].emailheader;
       params.data.emailsubject = DataProperties[0].emailsubject;
       let nwhere = {};
       Object.keys(DataProperties[0].tablewhere).forEach((fld)=>{
          if (DataProperties[0].tablewhere[fld].toUpperCase().indexOf("G#") < 0 && DataProperties[0].tablewhere[fld].toUpperCase().indexOf("S#")){
              nwhere[fld] = DataProperties[0].tablewhere[fld];
          }
          if (DataProperties[0].tablewhere[fld].toUpperCase().indexOf("G#") > -1)   {

          }
          if (DataProperties[0].tablewhere[fld].toUpperCase().indexOf("S#") > -1){
              let sfld = DataProperties[0].tablewhere[fld].split("#");
              if (evalue[sfld[1]]){
                  nwhere[fld] = evalue[sfld[1]];
              }else{
                if (statevalues[sfld]){
                    nwhere[fld] = statevalues[sfld];
                }
              }
          }
      });   
      params.data.where = nwhere;
     nwhere = {};
      Object.keys(apiewhere).forEach((fld)=>{
         if (apiewhere[fld].toUpperCase().indexOf("G#") < 0 && apiewhere[fld].toUpperCase().indexOf("S#") < 0){
             nwhere[fld] = apiewhere[fld];
         }
         if (apiewhere[fld].toUpperCase().indexOf("G#") > -1){
  
         }
         if (apiewhere[fld].toUpperCase().indexOf("S#") > -1){
             let sfld = apiewhere[fld].split("#"); 
             if (sfld[1] === id){
                 nwhere[fld] = evalue[sfld[1]];
             }
             if (statevalues[sfld[1]]){
                 nwhere[fld] = statevalues[sfld[1]];
             }
         }
      });
      params.data.ewhere = nwhere;  
      params.data.apigetvalues = DataProperties[0].apigetvalues;    
      if (DataProperties[0].tableprocess){
          params.data.method = DataProperties[0].tableprocess;
      }else{
          params.data.method = DataProperties[0].apitype;
      }    
      params.data.method = Status;
      params.data.mainmethod = "";      
      params.data.resultrows = resultRows;
      params.data.checkcount = checkCount; 
      params.data.mainmethod = Status;
      let data = {};
      let api = new Promise((resolve, reject) => { return resolve(RestAPI(params)) });
      return api;  
   }
}      

const simpleCallInitAPI = (apicheck:string) =>{
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    interface param {
      url:string;
      headers:object;
      method:string;
      data:string;
    }
    let params : param = {
       url : apicheck,
       headers : headers,
       method : "GET",
       data : JSON.stringify({})
    }
    const api: Promise<any> = new Promise<any>((resolve, reject) => { return resolve(RestAPI(params)) });
    return api;
}

const apiCallInitInput = (id:any,value:any,pattern:any,name:any,errormessage:any,apicheck:any,apigroup:any,apiorder:any,apiwhere:any,apitable:any,apiqueryfields:any,apitype:any,apifields:any,apiresultrows:any,apicheckcount:any,apimessage:any,sametag:any,updateErrorMessage:any,apicheckexisting:any,apitypes:any,apisubtypes:any,apiewhere:any,Status:string,apigetvalues:any,statevalues:any) =>{
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    let params:any = {};
    params.url = apicheck;
    params.headers = headers;
    params.method = "POST";
    params.data = {};
    params.data.table = apitable;
    let napifields = {};
    Object.keys(apifields).forEach((fld)=>{
       if (apifields[fld].toUpperCase().indexOf("G#") < 0 && apifields[fld].toUpperCase().indexOf("S#") < 0){
           napifields[fld] = apifields[fld];
       }
       if (apifields[fld].toUpperCase().indexOf("G#") > -1){

       }
       if (apifields[fld].toUpperCase().indexOf("S#") > -1){
           let sfld = apifields[fld].split("#");
           napifields[fld] = value;
       }
    });
    params.data.fields = napifields;     
    params.data.queryfields = apiqueryfields;
    params.data.group = apigroup;
    params.data.order = apiorder;
    params.data.types = apitypes;
    let nwhere = {};
    Object.keys(apiwhere).forEach((fld)=>{
       if (apiwhere[fld].toUpperCase().indexOf("G#") < 0 && apiwhere[fld].toUpperCase().indexOf("S#") < 0){
           nwhere[fld] = apiwhere[fld];
       }
       if (apiwhere[fld].toUpperCase().indexOf("G#") > -1){

       }
       if (apiwhere[fld].toUpperCase().indexOf("S#") > -1){
           let sfld = apiwhere[fld].split("#"); 
           if (sfld[1] === id){
               nwhere[fld] = value;
           }
           if (statevalues[sfld[1]]){
               nwhere[fld] = statevalues[sfld[1]];
           }              
       }
    });
    params.data.where = nwhere;
    nwhere = {};
    Object.keys(apiewhere).forEach((fld)=>{
       if (apiewhere[fld].toUpperCase().indexOf("G#") < 0 && apiewhere[fld].toUpperCase().indexOf("S#") < 0){
           nwhere[fld] = apiewhere[fld];
       }
       if (apiewhere[fld].toUpperCase().indexOf("G#") > -1){

       }
       if (apiewhere[fld].toUpperCase().indexOf("S#") > -1){
           let sfld = apiewhere[fld].split("#"); 
           if (sfld[1] === id){
               nwhere[fld] = value;
           }
           if (statevalues[sfld[1]]){
               nwhere[fld] = statevalues[sfld[1]];
           }           
       }
    });
    params.data.ewhere = nwhere;
    params.data.apigetvalues = apigetvalues;
    params.data.resultrows = apiresultrows;
    params.data.checkcount = apicheckcount;
    params.data.checkexisting = apicheckexisting;
    params.data.subtypes = apisubtypes;
    params.data.method = apitype;
    params.data.mainmethod = Status;
    params.data.emailsend = "No";
    params.data.emailheader = "";
    params.data.emailsubject = "";
    let data = {};
    let api = new Promise((resolve, reject) => { return resolve(RestAPI(params)) });
    return api
}

export  {ApiCallInit,apiCallInitInput,simpleCallInitAPI};