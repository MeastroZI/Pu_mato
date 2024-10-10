import * as FileSystem from 'expo-file-system';

export default async function getImageBin(URI){
    try {
        const base64 = await FileSystem.readAsStringAsync(URI, {
            encoding: FileSystem.EncodingType.Base64,
          });
        return base64;
    }
    catch(err){
        console.log("something is wrong " , err) ;
        return "soomething is wrong"
    }
}