import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

let useCollection = (collectionName) => {
    let error = ref(null);

    let addDocument = async(doc) => {
        try {
            // await db.collection(collectionName).addDoc(doc);
            // let setCollection = collection(db, collectionName);
            await addDoc(collection(db, collectionName), doc)
        } catch (err) {
            error.value = err;
        }
    }

    return { error, addDocument }
}

export default useCollection;