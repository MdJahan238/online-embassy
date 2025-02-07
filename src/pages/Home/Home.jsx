import React from 'react';
import Banner from './Banner/Banner';
import InfoCard from './InfoCard/InfoCard';
import Reviews from './Testmonial/Reviews';
import VisaAppointment from './VisaAppointment/VisaAppointment';
import EducationVisa from './EducationVisa/EducationVisa';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <EducationVisa></EducationVisa>
            <VisaAppointment></VisaAppointment>
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;