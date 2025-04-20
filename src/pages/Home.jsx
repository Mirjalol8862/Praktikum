import React from 'react'
import Banner from '../companets/Banner'
import Statistics from '../companets/Statistics'
import Courses from '../companets/Courses'
import WhyUs from '../companets/Why'
import BannerBottom from '../companets/BannerBottom'
import OpinionList from '../companets/OpinionList'
import Mentors from '../companets/Mentors'
import Answer from '../companets/Answer'
import Questions from '../companets/Questions'
import Connections from '../companets/Connections'

function Home() {
    return(
        <>
        <Banner/>
        <Statistics/>
        <Courses/>
        <WhyUs/>
        <BannerBottom/>
        <OpinionList/>
        <Mentors/>
        <Answer/>
        <Questions/>
        <Connections/>
        </>
    )
}

export default Home