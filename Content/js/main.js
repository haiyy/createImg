function ajax(url){
    return new Promise((resolve,reject)=>{
        let xml=new XMLHttpRequest();
        xml.open("GET",url);
        xml.onreadystatechange=function(){
            if(xml.readyState!=4) return;
            if(xml.status===200){
                resolve(xml.responseText);
            }else{
                reject("error");
            }
        }
        xml.send(null);
    });
}