import React from 'react'
import styles from '../styles/styles';

interface StatsData {
    id: string
    title: string
    value: string
}

export function Stats() {
    const stats: StatsData[] = [
        {
            id: "stats-1",
            title: "User Active",
            value: "3800+",
        },
        {
            id: "stats-2",
            title: "Trusted by Company",
            value: "230+",
        },
        {
            id: "stats-3",
            title: "Transaction",
            value: "$230M+",
        },
    ];

    return (
        <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
            {
                stats.map((stat: StatsData) => (
                    <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
                        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
                        <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
                    </div>
                ))
            }
        </section>
    )
}