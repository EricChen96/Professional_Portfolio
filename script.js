$(function () {
    var projectList = [
        {
            title: "Marvel Hero Finder",
            description: "Search up your favorite Marvel character!",
            link: "https://anzelcapparelli.github.io/marvelHeroFinder/",
            github: "https://github.com/anzelcapparelli/marvelHeroFinder",
            image: "./Assets/Marvel_Screenshot.jpg"
        },
        {
            title: "Weather Dashboard",
            description: "Find out the weather of a city!",
            link: "https://ericchen96.github.io/Weather_Dashboard/",
            github: "https://github.com/EricChen96/Weather_Dashboard",
            image: "./Assets/Weather_Dashboard_Screenshot.png"
        },
        {
            title: "Code Quiz",
            description: "Play a quick code quiz game to refresh your Javascript knowledge!",
            link: "https://ericchen96.github.io/Code_Quiz/",
            github: "https://github.com/EricChen96/Code_Quiz",
            image: "./Assets/Code_Quiz_Screenshot.png"
        }
    ];
    var projectSearchList = ["Marvel Hero Finder", "Weather Dashboard", "Code Quiz"];
    //For autocomplete
    var projectSearchListCapital = ["Marvel Hero Finder", "Weather Dashboard", "Code Quiz"];;
    for (var i = 0; i < projectSearchList.length; i++) {
        projectSearchList[i] = projectSearchList[i].toLowerCase();
    }
    var projectSearchHistory = [];
    var lastSearched;

    function createProjectHistoryButtons() {
        $(".recentSearchesButtonsList").empty();
        for (var i = 0; i < projectSearchHistory.length; i++) {
            var projectButton = $("<a>").text(projectSearchHistory[i]);
            projectButton.attr("class", "btn btn-primary col-12 mx-auto mt-2 searchHistoryButtons");
            projectButton.attr("href", "./assets/searchProjectScreen.html");
            $(".recentSearchesButtonsList").prepend(projectButton);
        }
    }

    init();

    function init() {
        var storedProjectButtons = JSON.parse(sessionStorage.getItem("projectHistory"));
        if (storedProjectButtons !== null) {
            projectSearchHistory = storedProjectButtons;
            createProjectHistoryButtons();
        }
        var storedLastSearched = sessionStorage.getItem("lastSearched");
        if (storedLastSearched !== null) {
            lastSearched = storedLastSearched;
        }
    }

    function saveLastSearched(project) {
        lastSearched = project;
        sessionStorage.setItem("lastSearched", lastSearched);
    }

    function changeProjectDisplay(searchInput) {
        var indexTarget = projectSearchList.indexOf(searchInput);
        $(".projectTitlePanel").text(projectList[indexTarget].title);
        $(".projectDescriptionPanel").text(projectList[indexTarget].description);
        $(".projectLinkPanel").text(projectList[indexTarget].link).attr("href", projectList[indexTarget].link);
    }

    $(".recentSearchesButtonsList").on("click", ".searchHistoryButtons", function () {
        saveLastSearched($(this).text().toLowerCase());
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