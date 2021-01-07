# Professional_Portfolio

![Marvel Character Finder](./Images/mainScreenshot.jpg)
![Marvel Character Finder](./Images/mainScreenshotPart2.jpg)

[Link to site](https://anzelcapparelli.github.io/marvelHeroFinder/) <br>
[Link to Github repository](https://github.com/anzelcapparelli/marvelHeroFinder/) <br>

## Installation

Go to Github and download

---

## Description

The following project would create a more professional portfolio than the previous ones. It still has the same things as the previous version but more! The new portfolio contains a project page, and a resume tab. 

## Features

1. Autocomplete 

The project search bar has an autocomplete function which let's the user know the correct name to be searched up. This uses JQuery UI 

```
    $(".projectSearchBar").autocomplete({
        source: projectSearchListCapital,
        autoFocus: true
    });
```
2. Collapse Buttons

For the new sidebar, clicking the "main profile" button collapses the button to reveal the options available.

3. Project Display HTML

Made a new HTML page just for the projects to be shown. It'll display a title, image, description, link URL, github repository URL

4. Session Storage

The following uses session storage because there are multiple HTML pages. The computer saves your last searched projects and stores them as buttons or loads them for your convenience. 
## Technologies Used

Framework
- Bootstrap

## License

MIT License

Copyright (c) [2021] [Eric's Profressional Portfolio]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
