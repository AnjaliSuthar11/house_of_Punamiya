import React from 'react'
import InvitationCard from './InvitationCard'
import VenueSection from './VenueSection'
import MenuSection from './MenuSection'
import ThankYouSection from './ThankYouSection'
import NewInvitationCard from './NewInvitationCard'
import InvitationThree from './InvitationThree'


const ScreenThree = () => {
  return (
    <div className="bg-[linear-gradient(135deg,#F7D7A7_0%,#E7B97D_35%,#C6884F_70%,#A25F2C_100%)] pt-10">
      <InvitationThree/>
      {/* <InvitationCard/> */}
      {/* <NewInvitationCard/> */}
      <VenueSection/>
     <MenuSection/>
  
     <ThankYouSection/>
    </div>
  )
}

export default ScreenThree
