import { defineStore } from 'pinia'
import {ref, computed} from "vue"
import {User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged} from "firebase/auth"
import {auth} from "@/scripts/firebase"

export const useUserStore = defineStore('user', () => {

    // state
    const authReady = ref(false);
    const user = ref<null|User>(null);


    // getters
    const isAuthReady = computed(() => authReady);

    const getUser = computed(() => user);

    // mutations
    const setUser = (userData: User | null) => {
        user.value = userData;
    }

    const setAuthIsReady = (isReady: boolean) => {
        authReady.value = isReady;
    }
   

    // actions

    /**
     * Method to signup user with it's info
     * 
     * @param {object} - object contains name, email and password
     */
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

    /**
     * Method to sign in user
     * 
     * @param {object} - the object contains email and password
     */
    const signInUser  =  async ({email, password}) => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
           
            user.value = res.user;
            
        } catch (error) {
            console.log("Error in signin", error);
        }
    }

    /**
     * Method to sign out current user
     */
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


/**
 * Watcher to update state as per auth load first time
 */
const authSwitcher = onAuthStateChanged(auth, (user) => {
    const store = useUserStore();
    
    store.setAuthIsReady(true);   
    store.setUser(user);

    // runs this watcher once and after that remove it from call stack
    authSwitcher();
})