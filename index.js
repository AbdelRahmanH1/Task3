const countryWord = process.argv[2];
const geo = require("./geo");
const weather = require("./weather");
if(!countryWord ||countryWord.trim()===""){
    console.log("Enter a country Name");
    return;
}else{
    geo.getLocation(countryWord,(err,data)=>{
        
        if(err){
            console.log("Error on coordinates:",err);
        }else{
            console.log("coordinates:",data);
            weather.getWeather(data.latitude,data.longtitude,(err,data)=>{
                if(err){
                    console.log("Error On temp:",err);
                }else{
                    console.log("Weather",data);
                }
            })
        }
    })
}