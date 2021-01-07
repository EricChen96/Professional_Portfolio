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
    ];
    var projectSearchList = ["Marvel Hero Finder", "Weather Dashboard", "Code Quiz"];
    //For autocomplete
    var projectSearchListCapital = ["Marvel Hero Finder", "Weather Dashboard", "Code Quiz"];;
    for (var i = 0; i < projectSearchList.length; i++) {
        projectSearchList[i] = projectSearchList[i].toLowerCase();
    }
    var projectSearchHistory = [];

    $(".projectSearchBar").autocomplete({
        source: projectSearchListCapital,
        autoFocus: true
    });

    function changeProjectDisplay(searchInput) {
        var indexTarget = projectSearchList.indexOf(searchInput);
        $(".projectTitlePanel").text(projectList[indexTarget].title);
        $(".projectDescriptionPanel").text(projectList[indexTarget].description);
        $(".projectLinkPanel").text(projectList[indexTarget].link).attr("href", projectList[indexTarget].link);
    }

    function createProjectHistoryButtons() {
        $(".recentSearchesButtonsList").empty();    
        for (var i = 0; i < projectSearchHistory.length; i++) {
            var projectButton = $("<a>").text(projectSearchHistory[i]);
            projectButton.attr("class","btn btn-primary col-12 mx-auto mt-2 searchHistoryButtons");
            // projectButton.attr("href","./searchProjectScreen.html");
            $(".recentSearchesButtonsList").prepend(projectButton);
        }
    }

    init();

    function init() {
        var storedProjectButtons = JSON.parse(sessionStorage.getItem("projectHistory"));
        if (storedProjectButtons !== null) {
            projectSearchHistory = storedProjectButtons;
        }
        createProjectHistoryButtons();
    }

    $(".recentSearchesButtonsList").on("click", ".searchHistoryButtons", function() {
        // changeProjectDisplay($(this));
        changeProjectDisplay($(this).text().toLowerCase());
    })


    $(".projectSearchForm").on("submit", function (event) {
        event.preventDefault();
        var userInput = $(".projectSearchBar").val().trim().toLowerCase();
        $(".projectSearchBar").val("");
        if (projectSearchList.includes(userInput)) {
            changeProjectDisplay(userInput);
            var indexNum = projectSearchList.indexOf(userInput);
            if (!projectSearchHistory.includes(projectList[indexNum].title)) {
                projectSearchHistory.push(projectList[indexNum].title); 
                createProjectHistoryButtons();
                // console.log(projectSearchHistory[0]);
                sessionStorage.setItem("projectHistory", JSON.stringify(projectSearchHistory));
            }
        }
    })
})