<template>
    <div class="w-full h-screen flex justify-center items-center bg-green-300">
        <CommonForm 
            type="register" 
            form-button-text="Register"
            v-model:name="name"
            v-model:email="email"
            v-model:password="password"
            v-model:confirmPassword="confirmPassword"
           @form-btn-click="formSubmit"
        />
    </div>
</template>

<script setup lang="ts">
import CommonForm from '@/components/CommonForm.vue';
import { ref, onMounted } from "vue";
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'vue-router';

const store = useUserStore();

// State
const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const router = useRouter();

onMounted(async () => {
    const user = store.getUser;

    if(user) {
        router.push("/");
    }
})

// Functions

/**
 * Function to validate all fields for Registration Page
 */
function validateFields() {
    if(!name.value) {
        alert("Please fill name");
        return false;
    }
    if(!email.value) {
        alert("Please fill email");
        return false;
    }
    if(!password.value) {
        alert("Please fill password");
        return false;
    }
    if(!confirmPassword.value) {
        alert("Please fill confirm password");
        return false;
    }
    if(password.value !== confirmPassword.value) {
        alert("Passwords Are not matching");
        return false;
    }

    return true;
}

/**
 * Method to register user
 */
async function formSubmit() {
    const isFormValidated = validateFields();

    if(isFormValidated) {
        console.log("Validated");

       await store.signUpUser({name: name.value, email: email.value, password: password.value});
       router.push("/")
    }
}
</script>
<style scoped>
</style>