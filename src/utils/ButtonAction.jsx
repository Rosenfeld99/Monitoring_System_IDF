import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonAction = ({ title, route, disabledBtn, doAPI }) => {
    const navigation = useNavigate()

    const handleClickBtn = () => { 
       
        doAPI && doAPI()
        navigation(route)
    }

    return (
        <button  disabled={disabledBtn} onClick={handleClickBtn} className={`justify-center w-full items-center self-stretch px-4 py-1.5 text-xl active:scale-90 duration-150 font-medium leading-7 text-center text-light_primary dark:text-dark_primary rounded-lg dark:bg-dark_accent_content bg-light_accent_content  ${disabledBtn && "opacity-50 cursor-not-allowed"}`}>
            {title}
        </button>)
}

export default ButtonAction