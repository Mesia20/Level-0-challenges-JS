function convertToTime(x){
    
    //Dealing with numbers less than 60 that represent minutes.
    if(x<60){
        if(x===1){
            console.log(x+" minute.")

        }else{
            console.log(x+" minutes.")
        }

        //Dealing with numbers greater 60
    }else if(x>=60){
        var hours = Math.floor(x/60);
        var minutes = ((x%60));

        //Handling singular and plural forms of "hours" & "minutes"
        if(hours===1&&minutes<=1){
            console.log(hours+" hour, "+minutes+" minute")
        }else if(hours<=1&& minutes>2){ 
            console.log(hours+" hour, "+minutes+" minutes")

        }
        else{
            console.log(hours+" hours, "+ minutes+" minutes") 
        }
        

        
    }
}convertToTime(171)