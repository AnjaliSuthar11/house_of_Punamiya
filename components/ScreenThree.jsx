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
  className="relative  bg-cover   bg-no-repeat bg-[url('/3rdAugustbg.png')]"
>
  {/* bg-[url('/BG.jpg')] */}

  <div 
   className="">
    {/* <InvitationThree /> */}
    {/* <InvitationCard /> */}
    {/* <NewInvitationCard /> */}

    <MenuSection />
  
    <VenueSection />
    <ThankYouSection />
  </div>
</div>
  )
}

export default ScreenThree
