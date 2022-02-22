const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        search();
    }
});

function search (){
const input = searchInput.value;

window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C1PNBB_enTR983TR983&oq=" + input + "&aqs=chrome..69i57j46i433i512l2j0i433i512j46i131i433i512j0i512j46i131i175i199i433i512j0i433i512l2j0i271.2212j0j7&sourceid=chrome&ie=UTF-8"
}