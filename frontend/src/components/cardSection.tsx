import cardimg1 from "../assets/card1.png";


const CardSection = () => {

  return (
    <div className='text-center	section'>
        <h1 className="h2-title mb-4  leading-none tracking-tight text-gray-900  dark:text-white"><span className="title-or">Découvrez ProTrade :</span>  Votre Atout Stratégique dans le Trading</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Rejoignez la communauté ProTrade dès aujourd'hui et transformez votre façon de trader ! </p>
        

        <div className="card-container">


        <div className="card card-one w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-8 pb-1à">
    
            <div className="flex flex-col items-center pb-10 card">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={cardimg1} alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Gestionnaire de portfeuille</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Achetez et vendez des devises numériques populaires, suivez-les en un seul endroit.</span>
            </div>

        </div>

        
        <div className="card card-two w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-8 pb-1à">
    
            <div className="flex flex-col items-center pb-10 card">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={cardimg1} alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Application mobile</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Achetez et vendez des devises numériques populaires, suivez-les en un seul endroit.</span>
            </div>

        </div>


        
        <div className="card card-three w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-8 pb-1à">
            <div className="flex flex-col items-center pb-10 card">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={cardimg1} alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Protection du coffre-fort</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Achetez et vendez des devises numériques populaires, suivez-les en un seul endroit.</span>
            </div>
        </div>

        </div>
    </div>
      );
};

export default CardSection;
