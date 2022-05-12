import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async(key, value) => {
    try{
        await AsyncStorage.setItem(key.toString(), value)
    } catch(error) {
        console.log('error : ' + error)
    }
}

export const retrieveData = async(key) => {
    try{
        const value = await AsyncStorage.getItem(key.toString());
        if(value !== null) return value
        else return null
    } catch(error){
        console.log('error : ' + error)
    }
}

export const eraseData = async(key) => {
    try{
        await AsyncStorage.removeItem(key.toString())
    } catch(error){
        console.log('error : ' + error)
    }
}

export const getTeam = async() => {
    try{
      const keys = await AsyncStorage.getAllKeys();
      const results = await AsyncStorage.multiGet(keys);
      return results
    } catch(e){
      console.log('error : ' + error)
    }
  }