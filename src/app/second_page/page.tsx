import Image from "next/image";
'use client'
import { useState,useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';
 import Link from "next/link";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "../custom2.css";
import React from "react";
import  "bootstrap/dist/css/bootstrap.min.css"

import supabase from "@/config/supabaseClient";


export default function SecondPage() {

  console.log(supabase);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [petTypes, setPetTypes] = useState<any[]>([]);
 

  useEffect(() => {

    const fetchPetTypeData = async () => {
       const { data, error } = await supabase.from('pet_types').select('id, pet_type_name, remarks').order('id', { ascending: true });
      if (error) {
        console.error('Error fetching pet types:', error);
        setPetTypes([]) 
        setFetchError('Could not fetch pet types');
      } else {
       
        
        console.log('Fetched pet types is :', data);
        //debugger; // This will pause the execution in the browser's debugger
        setPetTypes(data);
        setFetchError(null);
         
      }
    };

    fetchPetTypeData();
  }, []);
   
  return (
     
       
 <div className="row" style={{ height: '100vh', padding: '0' }}>
   <div className="header">
    <h1 >tierlich.</h1>
    <div className="container px-1">
      <div className="progress">
        <div className="progress-bar" role="progressbar"  ></div>
      </div>
    </div>
  </div>   
  <div className="content">
        <div className="container">
            {/* <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Hast du Haustiere?</h1>
                </div>
            </div> */}
            <br /><br />
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8  col-sm-3 col-lg-12">

                  {petTypes.length > 0 ? (
                    <ul>
                      {petTypes.map((pet) => (
                        <li key={pet.id}>
                          {pet.pet_type_name} - {pet.remarks}
                        </li>
                      ))}
                    </ul> 
                  ) : (
                    <p>{fetchError || 'No pet types available.'}</p>
                  )}  
                         
                </div>                  
                <div className="col-md-2">
                  
                    
                </div>
            </div>
        </div>            
    </div>
        
 
  <div className="footer">
    <button>  <Link href="/first_page"> &larr; Zurück</Link></button>
    <button> <Link href="/page1">Weiter</Link></button>
  </div>
 </div>

    
  );
}
