import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children  }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [currentColor, setCurrentColor] = useState('#2563eb');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [loginInfo, setLoginInfo] = useState('');
    const [success, setSuccess] = useState();

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true });
    }
    const [screenSize, setScreenSize] = useState(undefined);

    return (
        <StateContext.Provider value={{ 
            activeMenu: activeMenu,
            setActiveMenu: setActiveMenu,
            isClicked: isClicked,
            setIsClicked: setIsClicked,
            handleClick: handleClick,
            screenSize: screenSize, 
            setScreenSize: setScreenSize,
            currentColor: currentColor,
            currentMode: currentMode,
            themeSettings: themeSettings,
            setThemeSettings: setThemeSettings,
            setMode: setMode,
            setColor: setColor,
            loginInfo: loginInfo, 
            setLoginInfo: setLoginInfo,
            success: success,
            setSuccess: setSuccess
         }}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);