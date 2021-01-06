$(function () {
    var projectList = [
        {
            title: "Marvel Hero Finder",
            description: "Search up your favorite Marvel character!",
            link: "https://anzelcapparelli.github.io/marvelHeroFinder/"
        },
        {
            title: "Weather Dashboard",
            description: "Find out the weather of a city!",
            link: "https://ericchen96.github.io/Weather_Dashboard/"
        },
        {
            title: "Code Quiz",
            description: "Play a quick code quiz game to refresh your Javascript knowledge!",
            link: "https://ericchen96.github.io/Code_Quiz/"
        }
    ]


    $(".projectPortfolioButton").on("click", function () {
        console.log("hi");
    })

    $(".projectSearchForm").on("submit", function(event) {
        event.preventDefault();
        var userInput = $(".projectSearchBar").val().trim().toLowerCase();
        console.log(userInput);
        $(".projectSearchBar").val("");

        //https://anzelcapparelli.github.io/marvelHeroFinder/
        //https://ericchen96.github.io/Weather_Dashboard/
        //https://ericchen96.github.io/Code_Quiz/

    })
    
})