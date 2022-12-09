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
        return res;
    } catch(err) {
        switch(err.code) {
            case 'auth/email-already-in-use': 
                error.value = 'This email is already taken.'
                break;
            case 'auth/weak-password':
                error.value = 'Password should be at least 6 characters.'
                break;
            default:
                error.value = 'Something wrong!'
        }
    }
}

let useSignUp = () => {
    return {error, createAccount}
}

export default useSignUp;