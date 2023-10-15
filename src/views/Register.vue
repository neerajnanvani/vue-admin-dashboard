<template>
    <div class="w-full h-screen flex justify-center items-center bg-green-300">
        <CommonForm 
            type="register" 
            form-button-text="Register" 
            v-model:email="email"
            v-model:password="password"
            v-model:confirmPassword="confirmPassword"
           @form-btn-click="formSubmit"
        />
    </div>
</template>

<script setup lang="ts">
import CommonForm from '@/components/CommonForm.vue';
import {ref, watch} from "vue";


// State
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

// Functions

function validateFields() {
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
function formSubmit() {
    const isFormValidated = validateFields();

    if(isFormValidated) {
        console.log("Validated")
    }
    
}

watch(() => email, () => {
    console.log("Hello")
});
</script>
<style scoped>
</style>