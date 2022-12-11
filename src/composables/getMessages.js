import { db } from "../firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { ref } from '@vue/reactivity';

let getMessages = () => {

    let messages = ref([]);

    let msgQuery = query(collection(db, 'messages'), orderBy('created_at'));
    onSnapshot(msgQuery, (querySnapshot) => {
        let rawMsg = [];
        querySnapshot.forEach((doc) => {
            let document = {...doc.data(), id: doc.id};

            // timestamp ပါမှ အလုပ် လုပ်ခိုင်းထား။ မဟုတ်ရင် timestamp ကို wait ရလို့ ၂ခါ run ပြီး error တက်
            doc.data().created_at && rawMsg.push(document); 
        });
        messages.value = rawMsg;
    });

    return { messages }
}

export default getMessages;