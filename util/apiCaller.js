import axios from 'axios';
export default function callApi(method,url,params)
{
    return axios({
        method:method,
        url:url,
        data:params
    }).catch(err=>console.log(err))
}