import React, { useEffect, useState } from 'react';
import "./css/style.css"

const Tempapp = () => {
    //what user is typing in search
    //you can pass the initial state in useState and it will return the variable with current state
    const[city, setCity] = useState(null); //array destructuring--> const[city, currentCity]
    //whatever user writes in search it should go to api and get the data of it from api
    const[search, setSearch] = useState("Mumbai");

    //api link--> https://home.openweathermap.org/
    //api key --> 85ab946ae8ce39449ffecff8a22ffecd
    //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    //https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=85ab946ae8ce39449ffecff8a22ffecd

    //hooks are always used on functions
    //calls the functions when the page is rendered
    useEffect(() => {
        //fetching api
        const fetchApi = async() => {
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=85ab946ae8ce39449ffecff8a22ffecd`
            const response = await fetch(url);
            //converting the response into JSOn so that we can use it
            const response_json = await response.json();//await is used to wait till response comes
            console.log(response_json);
            setCity(response_json.main);
        }
        
        fetchApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" value={search} className="inputField" onChange={(event) => {
                        // whatever user writes to get that data use onchange
                        setSearch(event.target.value)//whatever we write in search bar it will keep on targeting
                    }}></input>
                </div>
                
                {!city?(
                        <p>No Data Found</p>
                    ):(
                        <div className="info">
                    <h2 className="location">
                    {/* <i class="fas fa-street-view"></i>Pune */}
                    <i className="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">{city.temp}</h1>
                    <h3 className="temp-min-max">min:40|max:20</h3>
                </div>
                    )
                }

                
            </div>
        </>
    );
};

export default Tempapp;