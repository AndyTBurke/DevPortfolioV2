import turkey_timer_project from "../assets/turkey_timer_project.png"
import raceblueprint_project from "../assets/raceblueprint_project.png"
import colorway_generator_project from  "../assets/colorway_generator_project.png"
import global_warming_map_project from "../assets/global_warming_map_project.png"
import bulbs_project from "../assets/bulbs_project.png"

export const projectData = [
    {
        projectName: "Race BluePrint",
        projectDescription: `A digital utility designed to modernize race training, RaceBlueprint 
            empowers users to create, modify, and share training plans for events like 5ks, 10ks, and marathons. 
            Built using Python and Django, this web app blends backend programming with an intuitive user 
            interface, allowing for easy plan adjustments and day-to-day tracking. For those keen to experience its capabilities 
            firsthand, Race Blueprint is hosted on Heroku, showcasing not just its functionality but also its scalability 
            and adaptability in a live environment.`,
        projectLiveLink: "https://raceblueprint-6f3d1aad9898.herokuapp.com/",
        projectGitLink: "https://github.com/AndyTBurke/",
        projectImg: raceblueprint_project
    },
    {
        projectName: "Bulbs",
        projectDescription: `Bulbs is designed to help you transform text messages into captivating patterns of 
            bulbs using binary code, providing an interactive learning experience along the way. Type in a message,
            convert it to binary, send it to a friend, and they can convert it back to plain text! There is also
            a learning page which is designed to help you understand how binary and unicode work together. This project was 
            built using Pythong and Flask.`,
        projectLiveLink: "https://andytburke.pythonanywhere.com/",
        projectGitLink: "https://github.com/AndyTBurke/Bulbs",
        projectImg: bulbs_project
    },
    {
        projectName: "Turkey Timer",
        projectDescription: `Turkey Timer is a React-based front-end web 
            project that estimates the cooking time for a turkey based on 
            input such as weight, cooking method, and stuffing/frozen status. 
            The tool is designed to help users better plan their Thanksgiving 
            meals, by reducing the stress of keeping track of multiple recipes 
            at once. The project was inspired by my experience of spatchcocking 
            a turkey, and the difficulty of remembering how long it takes to cook.`,
        projectLiveLink: "https://turkeycooktime.aburke.dev",
        projectGitLink: "https://github.com/AndyTBurke/TurkeyCookTime",
        projectImg: turkey_timer_project
    }
]