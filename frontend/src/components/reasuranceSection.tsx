import reasuranceBigImage from "../assets/reasuranceBigImage.png"
import refresh from "../assets/refresh.png"
import engagment from "../assets/engagment.png"

const ReasuranceSection = () => {
    return (
            <div className="flex flex-row items-center gap-14 section">
                <div className="flex-20  ">
                    <img src={reasuranceBigImage} alt="" />
                </div>
                <div className="flex flex-col gap-14">
                    <div>
                        <h2 className="h2-title mb-4  leading-none tracking-tight text-gray-900  dark:text-white ">Éclairez votre trading, <span className="title-or">ouvrez votre futur</span></h2>
                        <p className=" text-lg font-normal text-gray-500 lg:text-xl  dark:text-gray-400">Un échange de devises et d'actifs à portée de main. Avec notre outil pour traders, achetez, vendez, et gérez vos investissements n'importe où, en toute simplicité.</p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-9">
                            <div className="reasurance-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="30" viewBox="0 0 36 30" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.7953 15.0973C23.7953 18.2983 21.1993 20.8925 17.9983 20.8925C14.7973 20.8925 12.2031 18.2983 12.2031 15.0973C12.2031 11.8945 14.7973 9.30029 17.9983 9.30029C21.1993 9.30029 23.7953 11.8945 23.7953 15.0973Z" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.9957 28.484C24.977 28.484 31.3625 23.4643 34.9577 15.097C31.3625 6.72963 24.977 1.70996 17.9957 1.70996H18.003C11.0217 1.70996 4.63618 6.72963 1.04102 15.097C4.63618 23.4643 11.0217 28.484 18.003 28.484H17.9957Z" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center "> 
                                
                                <h6 className="text-lg font-bold dark:text-white">Clarté</h6>
                                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Nous transformons la complexité des cryptomonnaies en opportunités claires : graphiques et fluctuations du marché deviennent accessibles et compréhensibles.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-9">
                            <div className="reasurance-button">
                                <img src={refresh} alt="" className="img-reasurance"/>
                            </div>
                            <div className="flex flex-col justify-center"> 
                                
                                <h6 className="text-lg font-bold dark:text-white">Actualisation</h6>
                                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Toujours à l'avant-garde, nos informations sur les marchés sont constamment actualisées, captivant votre intérêt avec une pertinence inégalée.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-9">
                            <div className="reasurance-button">
                                <img src={engagment} alt="" className="img-reasurance" />
                            </div>
                            <div className="flex flex-col justify-center "> 
                                
                                <h6 className="text-lg font-bold dark:text-white">Engagement</h6>
                                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Engagés envers la communauté crypto, nous démocratisons l'accès aux données essentielles pour ceux qui en tirent le plus de valeur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
  };
  
  export default ReasuranceSection;
  