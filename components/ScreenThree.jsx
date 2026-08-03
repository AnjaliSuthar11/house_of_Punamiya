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
  className="relative  bg-cover   bg-no-repeat"
>
  {/* bg-[url('/BG.jpg')] */}

  <div 
   className="bg-[radial-gradient(circle_at_top,#D88D55_0%,#E8BE88_40%,#D88D55_70%,#E8BE88_100%)]">
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
