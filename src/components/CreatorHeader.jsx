import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Background from "../assets/photos(exemples)/OIP (4).jpeg";

const Header = () => {

    const Slides = [
        {
            id: 1,
            background: Background,
            categories: [ "PG 13", "Sci-fi" ],
            title: "Net Box TV",
            description: "Avec Net Box TV, pour tous les goûts, pour toutes les langues. Avec plus de 35.000 chaînes, voyageons dans le temps!" 
        },

        {
            id: 2,
            background: Background,
            categories: [ "PG 13", "Sci-fi" ],
            title: "The Future",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus." 
        },

        {
            id: 3,
            background: Background,
            categories: [ "PG 13", "Sci-fi" ],
            title: "With Family",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus." 
        },

        {
            id: 4,
            background: Background,
            categories: [ "PG 13", "Sci-fi" ],
            title: "Let's go",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus." 
        }
    ];

  return (
    <div className="min-h-[350px] mt-3 rounded-2xl h-[65vh] relative shadow-boxShadow1 text-light">
        <div className="relative min-h-full h-full p-[5%] rounded-2xl w-full" style={
            { background: `url(${ Slides[0].background }) center no-repeat`, backgroundSize: "cover" }
        }>
           <div className='z-10 flex !items-start h-full justify-start flex-col'>
                <div className='flex items-center justify-cente whitespace-nowrapr gap-2 max-w-[200px] text-[14px] font-medium'>
                    <p className='bg-dark/20 p-1 rounded-lg'> Meubles</p>
                    <p className='bg-dark/20 p-1 rounded-lg'>Tabouret</p>
                </div>

                <h3>King Of Soto</h3>

                <span className='text-3xl whitespace-nowrap font-medium'>
                    Nom du produit
                </span>
                
                <p className=' text-[16 px] max-w-[600px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ut, dicta recusandae tenetur, neque qui magnam rerum reiciendis veritatis inventore aut atque architecto. santium?
                </p>



                <div className='flex items-center justify-center gap-[10%] whitespace-nowrap'>
                    <div>Button 1</div>
                    <div>Button 2</div>
                </div>
           </div>

            <div className='absolute z-0 top-0 left-0 h-full w-full bg-dark/20 rounded-2xl '></div>
        </div>
    </div>
  )
}

export default Header;