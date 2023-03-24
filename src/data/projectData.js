import turkey_timer_project from "../assets/turkey_timer_project.png"
import colorway_generator_project from  "../assets/colorway_generator_project.png"
import global_warming_map_project from "../assets/global_warming_map_project.png"

export const projectData = [
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
    },
    {
        projectName: "Global Warming Heat Map",
        projectDescription: `The Global Warming Heat Map is a web application that allows 
            users to visualize temperature data on a grid. The data is displayed in a range 
            of years between 1754 and 2015, with each cell representing a specific month 
            and year of data. Users can mouse over each cell to display a tooltip that 
            contains more information about that particular area, including the corresponding 
            data-year property. The application is built using HTML, CSS, JavaScript, and 
            the D3 visualization library.`,
        projectLiveLink: "https://temp-chart.aburke.dev",
        projectGitLink: "https://github.com/AndyTBurke/Heat-Map-D3",
        projectImg: global_warming_map_project
    }
]