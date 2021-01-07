$(function () {
    var projectList = [
        {
            title: "Marvel Hero Finder",
            description: "Search up your favorite Marvel character!",
            link: "https://anzelcapparelli.github.io/marvelHeroFinder/",
            github: "https://github.com/anzelcapparelli/marvelHeroFinder",
            projectImage: "./Marvel_Screenshot.jpg"
        },
        {
            title: "Weather Dashboard",
            description: "Find out the weather of a city!",
            link: "https://ericchen96.github.io/Weather_Dashboard/",
            github: "https://github.com/EricChen96/Weather_Dashboard",
            projectImage: "./Weather_Dashboard_Screenshot.png"
        },
        {
            title: "Code Quiz",
            description: "Play a quick code quiz game to refresh your Javascript knowledge!",
            link: "https://ericchen96.github.io/Code_Quiz/",
            github: "https://github.com/EricChen96/Code_Quiz",
            projectImage: "./Code_Quiz_Screenshot.png"
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

    $(".projectSearchBar").autocomplete({
        source: projectSearchListCapital,
        autoFocus: true
    });

    function changeProjectDisplay(searchInput) {
        var indexTarget = projectSearchList.indexOf(searchInput);
        $(".projectTitlePanel").text(projectList[indexTarget].title);
        $(".projectScreenshotPanel").attr("src", projectList[indexTarget].projectImage)
        $(".projectDescriptionPanel").text(projectList[indexTarget].description);
        $(".projectLinkPanel").text("Link to Site").attr("href", projectList[indexTarget].link);
        $(".projectGithubPanel").text("Link to Github").attr("href", projectList[indexTarget].github);
    }

    function createProjectHistoryButtons() {
        $(".recentSearchesButtonsList").empty();
        for (var i = 0; i < projectSearchHistory.length; i++) {
            var projectButton = $("<a>").text(projectSearchHistory[i]);
            projectButton.attr("class", "btn btn-primary col-12 mx-auto mt-2 searchHistoryButtons");
            projectButton.attr("href", "./searchProjectScreen.html");
            $(".recentSearchesButtonsList").prepend(projectButton);
        }
    }

    init();

    function init() {
        var storedProjectButtons = JSON.parse(sessionStorage.getItem("projectHistory"));
        var storedLastSearched = sessionStorage.getItem("lastSearched");
        if (storedProjectButtons !== null) {
            projectSearchHistory = storedProjectButtons;
        }
        createProjectHistoryButtons();
        if (storedLastSearched !== null) {
            lastSearched = storedLastSearched;
            changeProjectDisplay(lastSearched);
        }
    }

    $(".recentSearchesButtonsList").on("click", ".searchHistoryButtons", function (event) {
        changeProjectDisplay($(this).text().toLowerCase());
        saveLastSearched($(this).text().toLowerCase());
    })

    function saveLastSearched(project) {
        lastSearched = project;
        sessionStorage.setItem("lastSearched", lastSearched);
    }

    $(".projectSearchForm").on("submit", function (event) {
        event.preventDefault();
        var userInput = $(".projectSearchBar").val().trim().toLowerCase();
        $(".projectSearchBar").val("");
        if (projectSearchList.includes(userInput)) {
            changeProjectDisplay(userInput);
            var indexNum = projectSearchList.indexOf(userInput);
            saveLastSearched(userInput);
            if (!projectSearchHistory.includes(projectList[indexNum].title)) {
                projectSearchHistory.push(projectList[indexNum].title);
                createProjectHistoryButtons();
                // console.log(projectSearchHistory[0]);
                sessionStorage.setItem("projectHistory", JSON.stringify(projectSearchHistory));
            }
        }
    })
})