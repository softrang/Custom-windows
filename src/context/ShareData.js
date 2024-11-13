import React, { createContext, useContext } from 'react';

import Zilly from '../image/zilly.PNG'
import Dagdoom from '../image/dagdoom.PNG'
import Html5 from '../image/html5.png'
import CSS3 from '../image/css3.png'
import Bootstrap5 from '../image/bootstrap.png'
import Twlind from '../image/twlind.png'


const ShareData = createContext();

export const useDeta = () => useContext(ShareData);


export const DetaProvider = ({ children }) => {

const skill =[
    {
        image:Html5 ,title:"HTML5" , dic:"I am Creating Any Markup or layout with HTML5 Language"

    },
    {
        image:CSS3 ,title:"CSS3" , dic:"I am Visulaizing any markup or layout with CSS3 Language"

    },
    {
        image:Bootstrap5 ,title:"Bootstrap5" , dic:"I am  Responsive Any Markup or layout with Bootstrap5 Language"

    },
    {
        image:Twlind ,title:"TwlindCSS" , dic:"I am  Responsive Any Markup or layout with Twlindcss Language"

    },

];



    const project=[
        {
            image: Zilly , title:"ZillyClone", dic:"This is Zilly e-commarce Website it is publist on themeforest. I am just clone it here is Theamforest link",
            lang:"This website created with react js",

        },
        {
            image: Dagdoom , title:"DagdoomClone", dic:"This is Dagdoom e-commarce Website This website ownar is Md Kamrul islam .  I am just clone it here is main link",
            lang:"This website created with react js",

        },

    ]


    return (
        <ShareData.Provider value={{project, skill}}>
          {children}
        </ShareData.Provider>
      );
    };