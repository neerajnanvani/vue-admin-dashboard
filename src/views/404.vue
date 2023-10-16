<template>
    <div class="bg-green-300 h-screen w-full flex justify-center items-center space-x-6">

        <RouterLink 
            to="/login" 
            class="border border-gray-200 bg-white p-2 rounded-xl hover:bg-green-100"
        >
            Go to Login Page
        </RouterLink>

        <RouterLink 
            to="/register"
            class="border border-gray-200 bg-white p-2 rounded-xl hover:bg-green-100"
        >
            Go to Register Page
        </RouterLink>

    </div>
</template>