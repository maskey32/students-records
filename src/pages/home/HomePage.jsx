import React from 'react';
import Nav from '../../components/nav/Nav';
import SideBar from '../../components/sidebar/SideBar';
import HomeLayout from '../../components/Home-layout/HomeLayout';
import StudentMain from '../../components/student-main/StudentMain';

const HomePage = () => {
  return (
    <HomeLayout
        nav={<Nav />}
        sidebar={<SideBar />}
        main={<StudentMain />}
    />    
  )
}

export default HomePage;