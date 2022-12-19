import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Sidebar, ThemeSettings } from './components';
import { Registration, Management, Courses, View, Details, Employees, Customers } from './pages'
import { useStateContext } from './contexts/ContextProvider';

import { checkLogin } from './api/account';

import './App.css'

const App = () => {
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode, loginInfo, setLoginInfo } = useStateContext();
    const login = 'admin';
    // HARD CODED LOGIN ------------------------------------------------------------------------------
    useEffect(() => {
        async function fetchData() {
            let res = await checkLogin({ username: login, password: login });
            setLoginInfo(res.data[0]);
        }
        fetchData();
    }, [login, login]);
    // HARD CODED LOGIN ------------------------------------------------------------------------------

    return (
        <section className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settings" position="Top">
                            <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" onClick={() => setThemeSettings(true)} style={{ background: currentColor, borderRadius: '50%' }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar />
                        </div>
                    )}
                    <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar />
                        </div>
                        <div>
                            {themeSettings && <ThemeSettings />}

                            <Routes>
                                <Route path="/" element={ <Registration /> } />
                                <Route path="/registration" element={ <Registration /> } />
                                <Route path="/management" element={ <Management /> } />
                                <Route path="/Courses" element={ <Courses /> } />
                                <Route path="/View" element={ <View /> } />

                                <Route path="/details" element={ <Details /> } />
                                <Route path="/employees" element={ <Employees /> } />
                                <Route path="/customers" element={ <Customers /> } />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </section>
            
    )
}

export default App