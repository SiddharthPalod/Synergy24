import {bgmi, bidbuild, cipherChase, codeQuest2, codm, cr, deepReality,
    eafc, lensFlare, lockoutDuel, mernify, mlFiesta, pitchingPixels,
    pixelFlow, reelRiot, synMun, valo, dapp, triviaVerse} from '../assets/event_timeline';

const images1 = [
    {
        name: "Pitching Pixels 2.0",
        timeline: "1-5 Nov + 10 Nov",  
        prize: "10k | 6k | 4k",        
        image: pitchingPixels
    },
    {
        name: "Code Quest 3.0",
        timeline: "16 Nov 8pm - 10pm",  
        prize: "10k | 6k | 4k",         
        image: codeQuest2
    },
    {
        name: "Bid and Build",
        timeline: "8 Nov 1pm onwards",  
        prize: "20K",          
        image: bidbuild
    },
    {
        name: "MERNify",
        timeline: "7 Nov 9pm - 8 Nov 9pm",  
        prize: "14k | 9k | 7k",             
        image: mernify
    },
    {
        name: "Deep Reality",
        timeline: "8 Nov 11:00am onwards",  
        prize: "3k | 2k",                   
        image: deepReality
    }
];
      

const images2 = [
    {
      name: "Dappathon",
      timeline: "9 Nov 9am-9pm",
      prize: "$1k",
      image: dapp
    },
    {
      name: "Cipher Chase",
      timeline: "9 Nov 9pm-10 Nov 9pm",
      prize: "₹15k (7k | 5k | 3k)",
      image: cipherChase
    },
    {
      name: "Valorant",
      timeline: "9 Nov 24",
      prize: "5k",
      image: valo
    },
    {
      name: "BGMI",
      timeline: "9 Nov 24",
      prize: "5k",
      image: bgmi
    },
    {
      name: "CODM",
      timeline: "9 Nov 24",
      prize: "5k",
      image: codm
    },
    {
      name: "Clash Royale",
      timeline: "9 Nov 24",
      prize: "3k",
      image: cr
    },
    {
      name: "EA FC",
      timeline: "9 Nov 24",
      prize: "3k",
      image: eafc
    },
    {
      name: "SYNPD",
      timeline: "9 Nov 24",
      prize: "30k",
      image: synMun
    },
    {
      name: "Lockout Duel 2.0",
      timeline: "9 Nov 24",
      prize: "15k",
      image: lockoutDuel
    }
  ];
  
const images3 = [
{
    name: "Trivia Verse",
    timeline: "10 Nov",
    prize: "₹10k (Prize distribution not decided)",
    image: triviaVerse
},
{
    name: "Lens Flare 3.0",
    timeline: "10 Nov",
    prize: "₹15k (Prize distribution TBD)",
    image: lensFlare
},
{
    name: "ML-Fiesta",
    timeline: "Not specified",
    prize: "₹60k (30k | 20k | 10k)",
    image: mlFiesta
},
{
    name: "Reel Riot",
    timeline: "8-10 Nov",
    prize: "₹10k (6k | 3k | 1k)",
    image: reelRiot
},
{
    name: "Pixel Flow 2.0",
    timeline: "15-17 Nov",
    prize: "₹20k (10k | 6k | 4k)",
    image: pixelFlow
}
// {
//   name: "Sands of Time",
//   timeline: "In future",
//   prize: "Not revealed",
//   image: '' // Placeholder for future image
// }
];
  

const dateSize = [0, images1.length, images1.length + images2.length];

export { images1, images2, images3, dateSize };
