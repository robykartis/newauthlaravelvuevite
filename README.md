npm install
npm i @vitejs/plugin-vue
install vue@next vue-loader@next
npm i vue-router@next

SET VITE.CONFIG.JS
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue(),
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
        ]),
    ],
});


1. SETTING TEMPLATE WECLOME.BLADE.PHP
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
    </head>
    <body class="antialiased">
      <div id="app"></div>
      @vite('resources/js/app.js')
    </body>
</html>

2. SETTING ROUTES WEB.PHP
<?php

use Illuminate\Support\Facades\Route;


Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');

3. SET RESOURCE /APP.JS
import './bootstrap';
import { createApp } from 'vue'
import router from './router/router.js'

import app from './layouts/App.vue'

createApp(app).use(router).mount("#app")

4. SET CONTROLLER/KERNEL.PHP

        'api' => [
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],

5. BUAT ROUTER VUE JS RESOURCE/JS/ROUTER/ROUTER.JS
import { createWebHistory, createRouter } from "vue-router";
import login from '../pages/login.vue'
import register from '../pages/register.vue'
import home from '../pages/home.vue'
import dashboard from '../pages/dashboard.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '/login',
        name: 'Login',
        component: login,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: register,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: dashboard,
        meta: {
            requiresAuth: true
        }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !localStorage.getItem('token')) {
        return { name: 'Login' }
    }
    if (to.meta.requiresAuth == false && localStorage.getItem('token')) {
        return { name: 'Dashboard' }
    }
})
export default router
6.

