import list from '../icons/calendar.png';
import man from '../icons/man.png';
import worker from '../icons/worker.png';


export default function Body() {
    return(
        <div className={'flex flex-col gap-10'}>
            <ul className="xl:flex-row flex-col flex flex-wrap xl:justify-between justify-center items-center ">
                <li className="xl:w-96 w-full gap-10 flex items-center justify-center hover:shadow-2xl transition ease-in-out delay-200 ">
                    <div className={'flex items-center flex-col'}>
                        <img className="" src={list} alt="list"/>
                        <h2 className="font-railwayBold text-lg text-black mt-5">Title Goes Here</h2>
                        <div className={'w-4/5'}>
                            <p className="text-center text-gray-400 opacity-60 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="xl:w-96 w-full gap-10 flex items-center justify-center hover:shadow-2xl transition ease-in-out delay-200 ">
                    <div className={'flex items-center flex-col'}>
                        <img className="" src={man} alt="list"/>
                        <h2 className="font-railwayBold text-lg text-black mt-5">Title Goes Here</h2>
                        <div className={'w-4/5'}>
                            <p className="text-center text-gray-400 opacity-60 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="xl:w-96 w-full gap-10 flex items-center justify-center hover:shadow-2xl transition ease-in-out delay-200 ">
                    <div className={'flex items-center flex-col'}>
                        <img className="" src={worker} alt="list"/>
                        <h2 className="font-railwayBold text-lg text-black mt-5">Title Goes Here</h2>
                        <div className={'w-4/5'}>
                            <p className="text-center text-gray-400 opacity-60 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <div className={'flex items-center justify-center'}>
                <a className={'bg-nteal p-3 rounded shadow-lg opacity-40 hover:opacity-100 ease-in-out transition delay-150'} href={'#'}>
                    <span className={'text-white font-railwayBold  '}>{`get started`.toUpperCase()}</span>
                </a>
            </div>
        </div>
    )
}