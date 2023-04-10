const fetchID=document.querySelector('#fetch-data');

async function fetchData(){
    const response=await fetch("http://localhost:3001/data",{
        method:"PUT"
    });

    const data=await response.json();

    console.log(data);
}

fetchID.addEventListener('click',fetchData)
