const video = [
    {
        url: 'SpiderMan_No_way_home.mp4',
        title: 'Spider-Man No Way Home',
        description: 'When his identity is exposed, with Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.'
    },
    {
        url: 'Venom_the_last_dance.mp4',
        title: 'Venom: The Last Dance',
        description: 'Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie last dance.'
    },
    {
        url:'Godzilla_vs_kong_the_new_empire.mp4',
        title:'Godzilla x Kong: The New Empire',
        description:'Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins and connection to Skull Islands mysteries.'

    },
    {
            url:'Kingdom_of_the_Planet_of_the_Apes.mp4',
            title:'Kingdom of the Planet of the Apes',
            description:'Many years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything he been taught about the past and make choices that will define a future for apes and humans alike.' 
    },
    {
        url:'STRANGER_THINGS_Season_5.mp4',
        title:'Stranger Things Season-5',
        description:'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.'

    },
    {
        url:'The_Boys_Season_4.mp4',
        title:'The Boys Season-4',
        description:'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.'

    },
    {
        url:'Marvel_Iron_Man_3_Domestic_Trailer_2.mp4',
        title:'Iron Man 3',
        description:'When Tony Starks world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.'
    },
    {
        url:'Marvel_Studios_Avengers_Infinity_War.mp4',
        title:'Avengers: Infinity War',
        description:'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.'
    },
    {
        url:'Marvel_Studios_Avengers_Endgame.mp4',
        title:'Avengers: Endgame',
        description:'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.'
    }
];

function randomvideo() {
    const ran = Math.floor(Math.random() * video.length);
    return video[ran];
}

function setContent() {
    const videocard = document.getElementById('background-video');
    const videoSource = document.getElementById('VideoSource');
    const titles = document.getElementById('Title');
    const descriptions = document.getElementById('Description');

    if (videocard && videoSource && titles && descriptions) {
        const { url, title, description } = randomvideo();
        videoSource.src = url;
        videocard.load();
        titles.textContent = title;
        descriptions.textContent = description;
    }
}

document.addEventListener('DOMContentLoaded', setContent);




