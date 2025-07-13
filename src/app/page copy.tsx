import Image from "next/image";
'use client'
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // ✅ correct in App Router


export default function Home() {
   const router = useRouter();

        const goToNextPage = () => {
            router.push('/first_page');
        };

  return (
     
         
        // <div className="row">
        //     <div className="dropdown mt-4">
        //         <button className="btn btn-secondary dropdown-toggle" type="button" onClick={toggleDropdown}>
        //             {selectedLanguage} <FaCaretDown />
        //         </button>
        //         {isOpen && (
        //             <ul className="dropdown-menu show">
        //             {languages.map((language) => (
        //                 <li key={language} onClick={() => handleSelect(language)}>
        //                 <a className="dropdown-item" href="#">{language}</a>
        //                 </li>
        //             ))}
        //             </ul>
        //         )}
        //     </div>
        // </div>
       
        
        <div className="container">
            <div className="row pb-0">
                <div className="col-12 pb-0">
                    <h1 className="text-center">Welcome to My App</h1>
                </div>
            </div>
            <br /><br />
            <div className="row mb-0">
                <div className="col-md-2"></div>
                    <div className="col-md-8  col-sm-3 col-lg-12">
                        <button className="btn btn-secondary" onClick={goToNextPage}>Ja</button> <br /><br />
                        <button   className="btn btn-primary"  onClick={() => router.push('/first_page')}>Nein</button>
                    </div>
                     

           
                <div className="col-md-2"></div>

            
            </div>
        </div>  
    
  );
}
