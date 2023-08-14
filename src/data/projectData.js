import turkey_timer_project from "../assets/turkey_timer_project.png"
import colorway_generator_project from  "../assets/colorway_generator_project.png"
import global_warming_map_project from "../assets/global_warming_map_project.png"
import bulbs_project from "../assets/bulbs_project.png"

export const projectData = [
    {
        projectName: "Bulbs",
        projectDescription: `Bulbs is designed to help you transform text messages into captivating patterns of 
            bulbs using binary code, providing an interactive learning experience along the way. Type in a message,
            convert it to binary, send it to a friend, and they can convert it back to plain text! There is also
            a learning page which is designed to help you understand how binary and unicode work together.`,
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
    },
    {
        projectName: "Colorway Generator",
        projectDescription: `Colorway Generator is a web application that helps users 
            generate beautiful color schemes that work together harmoniously. The app 
            fetches data from The Color API and allows users to input a color of their 
            choice and select a color scheme type, such as complementary, triadic, or 
            analogous. Once the user has selected a color and color scheme type, the app 
            generates a range of colors. This is the perfect tool for anyone who struggles 
            with choosing colors that work well together.`,
        projectLiveLink: "https://colors.aburke.dev",
        projectGitLink: "https://github.com/AndyTBurke/colorpicker",
        projectImg: colorway_generator_project
    }
]