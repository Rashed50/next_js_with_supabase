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


export default function FirstPage() {

  console.log(supabase);
  const [owner_name, setOwnerName] = useState('user1');
  const [email, setEmail] = useState('demo@gmail.com');
  const [number_of_pet, setNumberOfPet] = useState(1);
  const [formError, setFormError] = useState(null);
 

 



  

    const handleClick  = async () => {
      alert(owner_name + " " + email + " " + number_of_pet);
       const { data, error } = await supabase.from('pet_owners').insert([{owner_name,email,number_of_pet}]);
     
    };
 
   
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
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Hast du Haustiere?</h1>
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="col-md-2"></div>
                    <div className="col-md-8  col-sm-3 col-lg-12">
                        <button className="btn btn-secondary max-w-50  min-w-40" onClick={handleClick} >Ja</button> <br /><br />
                        <button   className="btn btn-primary max-w-50  min-w-40"  >Nein</button>
                    </div>                  
                <div className="col-md-2">
                  
                    
                </div>
            </div>
        </div>            
    </div>
        
 
  <div className="footer">
    <button>&larr; Zurück</button>
    <button> <Link href="/second_page">Weiter</Link></button>
  </div>
 </div>

    
  );
}
