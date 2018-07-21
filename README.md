
# Categorize App
The Categorize App enables you to assign categories to items, organize the categories in a tree and browse through the items via the category tree.
## Demo
[https://petervanthof.github.io/categorise/](https://petervanthof.github.io/categorise/)
## Background
I have build this app primarily to get hands-on experience with Angular. In my opinion, doing some tutorials or reading a book about a language or framework isn't enough: you should build an application in the language or with the framework yourself to really prove to yourself you understand (the basics of) the language or framework.

The Categorize App started off as a bookmark manager where you could assign multiple labels to a single bookmark, because I was missing this functionality in the default Chrome bookmark manager.

Along the way, I generalized the application to a generic Categorize App, which enables you to assign categories to items, organize the categories in a tree and browse through the items via the category tree.
## Frameworks / Components Used
The application uses the following frameworks / components:
* Angular (5)
* semantic-ui

From semantic-ui.com: "Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML."
I used semantic-ui to provide the CSS.
See [https://semantic-ui.com/](https://semantic-ui.com/)
* angular2-tree

A tree component for Angular. I used this for the category tree.
See https://angular2-tree.readme.io
* ngx-contextmenu

A context menu for Angular. Used inside the category tree.
See https://github.com/isaacplmann/ngx-contextmenu

The following challenges took me some time, and I think the application nicely showcases how to achieve them:
* Integrating semantic-ui within the angular2-tree and ngx-contextmenu
* Integrating ngx-contextmenu within the angular2-tree

The application is probably far from perfect, but I learned a lot and had a lot of fun building it :-)

See [https://petervanthof.github.io/categorise/](https://petervanthof.github.io/categorise/) for the results!

If you have any questions, feel free to ask! If you have any ideas or feedback to improve this app, feel free to create a new issue.

Have fun!
Peter
