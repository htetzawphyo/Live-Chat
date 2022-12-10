import { getAuth, signOut } from "firebase/auth";
import { ref } from '@vue/reactivity';

let error = ref(null)

let logOutUser = async() => {
    const auth = getAuth();
    try {
        await signOut(auth);
    } catch (err) {
        error.value = err
        console.log(error.value)
    }
}

let logout = () => {
    return { error, logOutUser }
}

export default logout;