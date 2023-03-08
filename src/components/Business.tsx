import styles, { layout } from "../styles/styles";
import { Button } from "./Button";
import { star, shield, send } from "../assets";


interface BusinessData {
    id: string
    icon: string
    title: string
    content: string
}

const features: BusinessData[] = [
    {
        id: "feature-1",
        icon: star,
        title: "Rewards",
        content:
            "The best credit cards offer some tantalizing combinations of promotions and prizes",
    },
    {
        id: "feature-2",
        icon: shield,
        title: "100% Secured",
        content:
            "We take proactive steps make sure your information and transactions are secure.",
    },
    {
        id: "feature-3",
        icon: send,
        title: "Balance Transfer",
        content:
            "A balance transfer credit card can save you a lot of money in interest charges.",
    },
];

interface FeatureCardProps {
    icon: string
    title: string
    content: string
    index: number
}

const FeatureCard = ({ icon, title, content, index }: FeatureCardProps) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                {content}
            </p>
        </div>
    </div>
);

export function Business() {
    

    return (
        <section id='features' className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>You do the business, 
                <br className='sm:block hidden' /> 
                we'll handle the money.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
                </p>

                <Button styles="mt-10" />
            </div>

            <div className={`${layout.sectionImg} flex-col`} >
                {
                    features.map((feature: BusinessData, index: number) => (
                        <FeatureCard key={feature.id} {...feature} index={index} />
                    ))
                }
            </div>
        </section>
    )
}