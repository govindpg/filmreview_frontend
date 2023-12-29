import { commonApi } from "./commonApi"
import { baseUrl } from "./serverUrl"


//upload firstmovie daatas
export const uploadreview = async(reqBody)=>{
    return   await commonApi('POST',`${baseUrl}movies`,reqBody)
}

//fn to set the watchlater 
//fn to upload dats to the watchlater
export const watchlaterAPI = async(reqBody)=>{
    return   await commonApi('POST',`${baseUrl}watchlater`,reqBody)
}


//fn to see the watchlater id
export const seewatchlater = async()=>{
    return await commonApi('GET',`${baseUrl}watchlater`)
}


//fn to remove from watchlater
export const removewatchlaterAPI= async(id)=>{
    return await commonApi('DELETE',`${baseUrl}watchlater/${id}`,);
}

//fn to view all review

export const seereview1 = async()=>{
    return await commonApi('GET',`${baseUrl}movies`)
}

// fn to delete the movie review

export const deletevideoApi =async(id)=>{
    return await commonApi('DELETE',`${baseUrl}movies/${id}`)
}

