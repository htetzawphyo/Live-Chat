import { ref } from '@vue/reactivity';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/config';

let error = ref(null);

let createAccount = async(name,email, password) => {
    try{
        let res = await createUserWithEmailAndPassword(auth, email, password )
        if(!res){
            throw new Error("Could not create account!");
        }
        await updateProfile(res.user, { displayName: name })
        // return res;
    } catch(err) {
        error.value = err.message;
    }
}

let useSignUp = () => {
    return {error, createAccount}
}

export default useSignUp;