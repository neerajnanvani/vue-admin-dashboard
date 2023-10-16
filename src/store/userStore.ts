import { defineStore } from 'pinia'
import {ref, computed} from "vue"
import {User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged} from "firebase/auth"
import {auth} from "@/scripts/firebase"

export const useUserStore = defineStore('user', () => {

    const authReady = ref(false);

    const isAuthReady = computed(() => authReady);

    const user = ref<null|User>(null);

    const getUser = computed(() => user);

    const setUser = (userData: User | null) => {
        user.value = userData;
    }

    const setAuthIsReady = (isReady: boolean) => {
        authReady.value = isReady;
    }
   

    const signUpUser = async ({name, email, password}) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(res.user, {displayName: name})
    
            user.value = {...res.user};

            user.value = {... user.value, displayName: name};
            
        } catch (error) {
            console.log("Error in signup", error);
        }
    }

    const signInUser  = async ({email, password}) => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
           
            user.value = res.user;
            
        } catch (error) {
            console.log("Error in signin", error);
        }
    }

    const signOutUser = async()  => {
        try {
            await signOut(auth);

            user.value = null;
            
        } catch (error) {
            console.log("Error in signout", error);
        }
    }

    return {isAuthReady, setAuthIsReady, getUser, signUpUser, signInUser, signOutUser, setUser};
})

onAuthStateChanged(auth, (user) => {
    const store = useUserStore();
    
    store.setAuthIsReady(true);   
    store.setUser(user);
})