var comic = $("div.s img[title]");
var title = $("div.s img[title]")[1].title;
var titleP = $("<p></p>");
titleP.css({"font-variant": "normal",
            "border": "1px solid yellow",
            "padding": "1em",
            "background-color": "#FFFFCC"});
titleP.text(title);
comic.after(titleP);
