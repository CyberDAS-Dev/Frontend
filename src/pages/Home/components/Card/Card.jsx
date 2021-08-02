import React from 'react'
import s from '@pages/Home/Home.module.scss'

export default function Card({ isPrimary, heading, order, children, image }) {
    return (
        <div className={`col-12 col-lg-6 order-lg-${order}`}>
            <div className={`${s.landingCard} ${isPrimary ? s.cardPrimary : ''}`}>
                <div className={`row ${s.flexCc} ${s.card_h3}`}>
                    <h3 className={isPrimary ? 'text-light' : ''}>{heading}</h3>
                </div>
                <div className="row align-items-center">
                    <div className="col-4">
                        <img className="landing-card-img" src={image} alt="" />
                    </div>
                    <div className="col-8">
                        <p className={`text-large text-right ${isPrimary ? 'text-light' : ''}`}>
                            {children}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
