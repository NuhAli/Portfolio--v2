// Images imported
import portfolioImage from '../../images/projects/hero2.png'
import gymImage from '../../images/projects/gym.jpg'
import hfImage from '../../images/projects/hellofresh.jpg'
import tdImage from '../../images/projects/todo.jpg'
import calcImage from '../../images/projects/arkveg.jpg'
import nsImage from '../../images/projects/night.jpg'
import countriesImage from '../../images/projects/React Countries.jpg'
import fireTunesImage from '../../images/projects/FireTunes.jpg'

const portfolio = [
    {
        name: 'Portfolio v1',
        image: portfolioImage,
        description: 'The first version of my portfolio, I used HTML5, SASS/SCSS and Javascript. The icons were taken from the font awesome CDN and I used the GSAP library for all the animations',
        liveUrl: 'https://nuhali.github.io/Portfolio---Source-Code/index.html',
        github: 'https://github.com/NuhAli/Portfolio---Source-Code',
        id: 10
    },
    {
        name: 'Insanity Gym',
        image: gymImage,
        description: 'A fully responsive landing page for an imaginary gym, I used HTML5, SASS/SCSS and Javascript. The icons were taken from the font awesome CDN and I used the GSAP library for all the animations',
        liveUrl: 'https://nuhali.github.io/Insanity-Gym--Project1/home.html',
        github: 'https://github.com/NuhAli/Insanity-Gym--Project1/tree/master',
        id: 11
    },
    {
        name: 'Hellofresh Clone',
        image: hfImage,
        description: 'I recreated the offical Hellofresh 2019 - 2020 hompage, this page is fully responsive. I used HTML5, SASS/SCSS and Javascript. The icons were taken from the font awesome CDN.',
        liveUrl: 'https://nuhali.github.io/Hello-Fresh-Clone---Project-4/home.html',
        github: 'https://github.com/NuhAli/Hello-Fresh-Clone---Project-4',
        id: 12
    },
    {
        name: 'Todo List App',
        image: tdImage,
        description: 'I created a to do list app to test my knowledge of basic state managment and prop passing. The features include, adding a task, removing a task and editing a task. I used class based react components, Javascript and CSS.',
        liveUrl: 'https://nuhali.github.io/ReactTodoList--Project-2',
        github: 'https://github.com/NuhAli/ReactTodoList--Project-2',
        id: 13
    },
    {
        name: 'Macronutrient Calculator',
        image: calcImage,
        description: 'I created a calculator using React to determine my daily caloric and macronutrient intake. I used the Harris-Benedict equations for men and women. This app was built using class components and functional components, Javascript and CSS.',
        liveUrl: 'https://nuhali.github.io/ArkFitnessCalculator--Project-3/',
        github: 'https://github.com/NuhAli/ArkFitnessCalculator--Project-3/tree/gh-pages',
        id: 14,
    },
    {
        name: 'Nightscenz Photograpghy',
        image: nsImage,
        description: 'A landing page for an imaginary night sky photographer, this app has a cart function that allows the user to remove and add items. The items in the cart are all stored in local storage, I used this feature so the carts contents continue to persist after the browser has been closed or refreshed. I used React, React-router, React-hooks, Javascript, CSS and local storage.',
        liveUrl: 'https://nuhali.github.io/NightScenz--Project-5/',
        github: 'https://github.com/NuhAli/NightScenz--Project-5',
        id: 15
    },
    {
        name: 'React Countries',
        image: countriesImage,
        description: 'A React app that uses functional components and the restful API "Rest Countries". This app allows the user to search for specific countries, sort countries by population and alphabetical order and switch the theme from dark mode to light mode. In this project I used React, React-hooks, React-router, React-context, Javascript and SASS/SCSS.',
        liveUrl: 'https://nuhali.github.io/CountryApi--Project-9/#/',
        github: 'https://github.com/NuhAli/CountryApi--Project-9',
        id: 16
    },
    {
        name: 'FireTunes',
        image: fireTunesImage,
        description: 'A React application that uses class based components and the Spotify API. This app allows the user to view all their pre existing playlists and also create new playlists by searching the spotify song database by track name. I used React, React-router, Javascript and SASS/SCSS.  ',
        liveUrl: 'https://nuhali.github.io/FireTunes--Project-6/',
        github: 'https://github.com/NuhAli/FireTunes--Project-6',
        id: 17
    }
]

export default portfolio