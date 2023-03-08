import { airbnb, binance, coinbase, dropbox } from '../assets';
import styles from '../styles/styles';

interface ClientsData {
    id: string
    logo: string
}

const clients: ClientsData[] = [
    {
        id: 'client-1',
        logo: airbnb,
    },
    {
        id: 'client-2',
        logo: binance,
    },
    {
        id: 'client-3',
        logo: coinbase,
    },
    {
        id: 'client-4',
        logo: dropbox,
    },
];

export function Clients() {
    return (
        <section className={`${styles.flexCenter} my-4`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                {
                    clients.map((client) => (
                        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
                            <img src={client.logo} alt='client_logo' className='sm:w-[192px] w-[100px] object-contain' />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}