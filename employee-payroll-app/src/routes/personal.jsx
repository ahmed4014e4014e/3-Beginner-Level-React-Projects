/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { PageWrapper } from '../components/styles/PageWrapper'
// personal
import PersonalList from '../components/personal/PersonalList'
import PersonalDetails from '../components/personal/PersonalDetails'
// utilites 
import Title from "../components/utilites/Title"
// dp
import data from "../db/personal-data.json"
// Pages
import Footer from '../components/pages/Footer'



export default function Personal() {

  // STATES
  //const [personalDetials, setPersonalDetails] = useState(data);
  const [searchPerson, setSearchPerson] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const searchName = (e) => {
    setSearchPerson(e.target.value);
  };

  const filteredNames = data.filter(
    (person) => `${person.first_name} ${person.last_name}`.toLowerCase().includes(searchPerson.toLowerCase())
  );
  const displaySelectedPerson = (person) => {
    setSelectedPerson(person);
  };

  return (
    <PageWrapper className='animate-left'>
      <Title text='Personal' />
      <div className="d-flex" style={{ gap: 30 }}>

        <PersonalList personal={filteredNames} searchName={searchName} handlePersonClick={displaySelectedPerson} />
        {selectedPerson && <PersonalDetails selectedPerson={selectedPerson} />}
      </div>
      <Footer />
    </PageWrapper>
  )
}
