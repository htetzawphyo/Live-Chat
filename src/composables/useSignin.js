import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

let error = ref(null);

let loginAcc = async(email, password) => {
    try {
        let res = await signInWithEmailAndPassword(auth, email, password);
        if(!res) {
            throw new Error("Can't login account");
        }
        return res;
    } catch (err) {
        switch(err.code) {
            case 'auth/wrong-password': 
                error.value = 'Wrong your password.Try again!'
                break;
            case 'auth/user-not-found':
                error.value = 'This email was not found.'
                break;
            default:
                error.value = 'Something wrong!'
        }
    }
}

let useSignin = () => {
    return { error, loginAcc }
}

export default useSignin;