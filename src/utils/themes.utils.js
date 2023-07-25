
export const setMode = (darkMode) =>{
    if(darkMode){
        document.documentElement.style.setProperty("--mainColor", "hsl(209, 23%, 22%)")
        document.documentElement.style.setProperty("--background", "hsl(207, 26%, 17%)" )
        document.documentElement.style.setProperty("--textColor", "hsl(0, 0%, 100%)" )
        document.documentElement.style.setProperty("--inputColor", "hsl(209, 23%, 22%)")
    }else{
        document.documentElement.style.setProperty("--mainColor", "hsl(0, 0%, 100%)")
        document.documentElement.style.setProperty("--background", "hsl(0, 0%, 98%)")
        document.documentElement.style.setProperty("--textColor", "hsl(200, 15%, 8%)")
        document.documentElement.style.setProperty("--inputColor", "hsl(0, 0%, 52%)")
    }
}