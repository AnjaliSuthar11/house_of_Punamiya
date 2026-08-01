import React from 'react'
import InvitationCard from './InvitationCard'
import VenueSection from './VenueSection'
import MenuSection from './MenuSection'
import ThankYouSection from './ThankYouSection'
import NewInvitationCard from './NewInvitationCard'
import InvitationThree from './InvitationThree'


const ScreenThree = () => {
  return (
   <div
  className="relative bg-[url('/Background01_compressed.png')] bg-cover bg-center bg-no-repeat"
>
  <div className=" ">
    {/* <InvitationThree /> */}
    {/* <InvitationCard /> */}
    {/* <NewInvitationCard /> */}

    <VenueSection />
    <MenuSection />
    <ThankYouSection />
  </div>
</div>
  )
}

export default ScreenThree
