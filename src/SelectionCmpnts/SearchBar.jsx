//Farhan Khandaker

function SearchBar(){

    function filterPosts(){
        let posts = document.getElementsByClassName("postContainer");
        let regex = new RegExp(document.getElementById("search").value, "i");

        for (let post of posts){
            if(regex.test(post.children[0].innerText)){
                post.removeAttribute("hidden");
            }
            else{
                post.setAttribute("hidden", true);
            }
        }

    }


    return(
        <div>
            <input type="text" id="search" placeholder="Enter to search through the forum." onInput={filterPosts}/>
        </div>
    );

}
  
export default SearchBar;
  