import house from '../icons/house.png';
import download from '../icons/download.png';
import person from '../icons/person.png';


export default function Footer() {
    return(
        <ul className={'flex md:flex-row flex-col flex-wrap items-center w-full'}>
            <li className={'lg:w-1/4 w-full pl-20 pr-20 pt-10 pb-10 bg-sky-400 flex items-center justify-center gap-3 cursor-pointer hover:scale-95 transition ease-in-out delay-200'}>
                <div className={'bg-white w-12 flex items-center justify-center p-3 rounded-full'}>
                    <img className={'object-cover'}  src={house} alt={'house'} />
                </div>
                <div className={'flex flex-col text-white font-railwayBold'}>
                    <span>12000+</span>
                    <span>Business</span>
                </div>
            </li>
            <li className={'lg:w-1/4 w-full pl-20 pr-20 pt-10 pb-10 bg-sky-700 flex items-center justify-center gap-3 cursor-pointer hover:scale-95 transition ease-in-out delay-200'}>
                <div className={'bg-white w-12 flex items-center justify-center p-3 rounded-full'}>
                    <img  src={download} alt={'house'} />
                </div>
                <div className={'flex flex-col text-white font-railwayBold'}>
                    <span>60000+</span>
                    <span>Downloads</span>
                </div>
            </li>
            <li className={'lg:w-1/4 w-full pl-20 pr-20 pt-10 pb-10 bg-purple-600 flex items-center justify-center gap-3 cursor-pointer hover:scale-95 transition ease-in-out delay-200'}>
                <div className={'bg-white w-12 flex items-center justify-center p-3 rounded-full'}>
                    <img  src={person} alt={'house'} />
                </div>
                <div className={'flex flex-col text-white font-railwayBold'}>
                    <span>40000+</span>
                    <span>Pro Users</span>
                </div>
            </li>
            <li className={'lg:w-1/4 w-full pl-20 pr-20 pt-10 pb-10 bg-pink-400 flex items-center justify-center gap-3 cursor-pointer hover:scale-95 transition ease-in-out delay-200'}>
                <div className={'bg-white w-12 flex items-center justify-center p-3 rounded-full'}>
                    <img className={'w-5'} src={download} alt={'house'} />
                </div>
                <div className={'flex flex-col  text-white font-railwayBold'}>
                    <span>30000+</span>
                    <span>Free Instals</span>
                </div>
            </li>
        </ul>
    )
}