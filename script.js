const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const container = document.querySelector(".container");
const warning = document.querySelector(".warning");
const btn = document.querySelector("#search");

btn.addEventListener("click", () => {
    const pokeName = document.querySelector("#pokeName").value;

    fetch(apiUrl + pokeName).then((response) => {
        return response.json();
    }).then((data) => {
        container.style.display = "block";
        warning.style.display = "None";

        container.querySelector(".title").innerHTML = data["name"];
        container.querySelector(".img").setAttribute("src", data["sprites"]["front_default"])
    
        const table = `<table>
                            <tr>    
                                <th>Hp</th>
                                <th>Attack</th>
                                <th>Defense</th>
                            </tr>
                            <tr>
                                <td>${data["stats"][0]["base_stat"]}</td>
                                <td>${data["stats"][1]["base_stat"]}</td>
                                <td>${data["stats"][2]["base_stat"]}</td>
                            </tr>
                        </table>
                        <table>
                            <tr>    
                                <th>SAttack</th>
                                <th>SDefense</th>
                                <th>Speed</th>
                            </tr>
                            <tr>
                                <td>${data["stats"][3]["base_stat"]}</td>
                                <td>${data["stats"][4]["base_stat"]}</td>
                                <td>${data["stats"][5]["base_stat"]}</td>
                            </tr>
                        </table>`
    
        container.querySelector(".stats").innerHTML = table;
    }).catch((error) =>{
        container.style.display = "None";
        warning.style.display = "block";
    })
});

