"use client"
import React from 'react'
import { Provider } from 'react-redux'
import Navbar from '../components/Navbar'
import store from '@/redux/store'
import SideNav from '@/components/SideNav'


export default function ProviderBody({ children }) {
    return (
        <Provider store={store}>
            <Navbar />
            <SideNav />
            {children}
        </Provider>
    )
}
