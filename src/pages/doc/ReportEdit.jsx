import React, { useEffect, useState } from 'react'
import BACKPAPER from "/backPaper.png"
import Navbar from '../../utils/Navbar'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import TransitionPage from '../../animation/TransitionPage'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { SYSTEMSTRACT } from '../../db/systemStract'
import { BiSolidEdit } from 'react-icons/bi'
import useUser from '../../hooks/useUser'

const ReportEdit = ({ }) => {
  const navigation = useNavigate()
  const { isEdit, } = useUser()


  const handleStartReport = () => {

  }

  // <GiTowerFlag />

  const [searchParams] = useSearchParams()

  useEffect(() => {
    searchParams.get('s')
    searchParams.get('location')
    searchParams.get('startTime')
    searchParams.get('endTime')
  }, [searchParams])

  console.log(searchParams.get('s'));


  const counterOfEdit = 2


  const handleNavigation = (item) => {
    if (isEdit) {
      const params = new URLSearchParams({
        s: searchParams.get('s'),
        location: searchParams.get('location'),
        startTime: searchParams.get('startTime'),
        endTime: searchParams.get('endTime')
      }).toString();
      navigation(`/startReport/${item?.value}?${params}`);
    }
  }

  return (
    <TransitionPage>
      <div dir='rtl' className=" flex flex-col overflow-hidden pb-20 mx-auto w-full bg-white min-h-screen flex-1">

        <Navbar />
        <div className="flex gap-2 self-center px-5 mt-10 leading-5 text-center text-black">
          <BiSolidEdit className={`text-2xl mt-2 ${counterOfEdit == 1 ? "text-red-500" : counterOfEdit == 2 ? "text-amber-400" : "text-green-500"}`} />
          <div className="grow my-auto text-md">
            עריכת דיווח {" "}
            <span className="font-semibold text-black">{searchParams.get('s')}/{searchParams.get('location')}</span>{" "}
            <div className=" flex items-center justify-center gap-2">
              {"משעה "}<span className="font-semibold text-black">{searchParams.get('startTime')}</span>
              {"עד "}<span className="font-semibold text-black">{searchParams.get('endTime')}</span>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          srcSet={BACKPAPER}
          className="mt-20 max-w-[800px] max-h-[800px] object-cover w-full absolute top-[33vw] stroke-neutral-200 "
        />
        <div className=" z-40 flex flex-col pt-24 text-sm items-center leading-5 h-full flex-1 text-right mx-auto w-full text-zinc-500">
          <div className="flex flex-col text-center leading-[150%] pb-20">
            <div className="self-center text-lg font-bold text-black">
              עריכת דיווח
            </div>
            <div className="w-full text-sm text-zinc-500">
              נותרו עוד <span className={` font-bold ${counterOfEdit == 1 ? "text-red-500" : counterOfEdit == 2 ? "text-amber-400" : "text-green-500"}`}>{counterOfEdit}</span> מתוך 3 אפשריות לערוך
            </div>
          </div>

          {/* List option */}
          <div className=" grid grid-cols-2 gap-x-24 gap-y-20">
            {SYSTEMSTRACT?.map((item, index) => (
              <button onClick={() => { isEdit ? handleNavigation(item) : navigation(`/startReport/${item?.value}`) }} key={index} className=" flex flex-col items-center justify-center gap-2">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md shadow-[#0000003d] w-20 h-20 rounded-full flex items-center justify-center text-white text-4xl">{item?.icon}</div>
                <div className="text-lg font-bold">{item?.name}</div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </TransitionPage>
  )
}

export default ReportEdit