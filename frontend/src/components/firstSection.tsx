


const FirstSection = () => {
  return (
    <div className='text-center	section'>
      <h1 className="h1-title mb-4 text-4xl  leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><span className="title-or">Investissez </span>en toute confiance</h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Trouvez des actions sûres, évitez les actions risquées et devenez un investisseur confiant en 14 jours ou moins.</p>
      <div>
        <div>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 bg-colorPrimary text-white mt-5">
            Oui, je veux un essai gratuit
            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
        <div className="flex flex-row justify-center pt-14 items-center gap-24 flex-wrap reasurance-first-row">

          <div className="flex justify-center flex-col items-center">
            <div className="reasurance-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="37" viewBox="0 0 30 37" fill="none">
                <path d="M23.3175 13.4041V9.42808C23.3175 4.77425 19.5812 1.00008 14.974 1.00008C10.3669 0.979712 6.61587 4.73536 6.5957 9.39104V9.42808V13.4041" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M21.9605 35.2596H7.952C4.113 35.2596 1 32.1169 1 28.2372V20.2944C1 16.4146 4.113 13.272 7.952 13.272H21.9605C25.7995 13.272 28.9125 16.4146 28.9125 20.2944V28.2372C28.9125 32.1169 25.7995 35.2596 21.9605 35.2596Z" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.9557 22.21V26.323" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <span>Aucune carte de crédit requise</span>
          </div>
          <div className="flex justify-center flex-col items-center">
            <div className="reasurance-button">
              <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.0852 9.39378C35.8863 9.67428 36.4217 10.4296 36.4217 11.2784V23.6956C36.4217 27.1661 35.1603 30.4789 32.9328 33.0456C31.8127 34.3381 30.3955 35.3446 28.8903 36.1586L22.3673 39.6823L15.8333 36.1568C14.3263 35.3428 12.9073 34.3381 11.7853 33.0438C9.55602 30.4771 8.29102 27.1624 8.29102 23.6883V11.2784C8.29102 10.4296 8.82635 9.67428 9.62752 9.39378L21.6945 5.15328C22.1235 5.00294 22.591 5.00294 23.0182 5.15328L35.0852 9.39378Z" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.5898 21.8492L21.0585 25.3197L28.2048 18.1733" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>

            <span>Gratuit pendant 30 jours</span>
          </div>
          <div className="flex justify-center flex-col items-center">
            <div className="reasurance-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="35" viewBox="0 0 38 35" fill="none">
                <path d="M36.672 22.3924H29.2501C26.525 22.3907 24.3161 20.1836 24.3145 17.4584C24.3145 14.7333 26.525 12.5261 29.2501 12.5244H36.672" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M30.0899 17.3452H29.5185" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M11.2047 1.5H27.051C32.3643 1.5 36.6717 5.80744 36.6717 11.1207V24.2786C36.6717 29.5919 32.3643 33.8993 27.051 33.8993H11.2047C5.89142 33.8993 1.58398 29.5919 1.58398 24.2786V11.1207C1.58398 5.80744 5.89142 1.5 11.2047 1.5Z" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.89844 9.8198H19.7965" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <span>Annulez à tout moment</span>
          </div>
        </div>
      </div>


    </div>
  );
};

export default FirstSection;
