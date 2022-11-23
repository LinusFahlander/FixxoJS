import React from 'react'
import CustomerSuport from "../assets/static_images/customer-support-icon.svg"
import SecuredPayment from "../assets/static_images/secured-payment-icon.svg"
import FreeHomeDelivery from "../assets/static_images/free-home-delivery-icon.svg"
import DayReuters from "../assets/static_images/day-reuters-icon.svg"

const SupportBadgeSection = () => {
  return (
    <section className='support-badges container'>
        <div className='sup-badge'>
            <img src={CustomerSuport} alt='' />
            <h1>Customer Support</h1>
            <p>Village did removed enjoyed explain talking.</p>
        </div>
        <div className='sup-badge'>
            <img src={SecuredPayment} alt='' />
            <h1>Secured Payment</h1>
            <p>Village did removed enjoyed explain talking.</p>
        </div>
        <div className='sup-badge'>
            <img src={FreeHomeDelivery} alt='' />
            <h1>Free Home Delivery</h1>
            <p>Village did removed enjoyed explain talking.</p>
        </div>
        <div className='sup-badge'>
            <img src={DayReuters} alt='' />
            <h1>30 Day Reuters</h1>
            <p>Village did removed enjoyed explain talking.</p>
        </div>
    </section>
  )
}

export default SupportBadgeSection