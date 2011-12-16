// I like DMs to be 1 click away
var navBarDms = '<li class="people" data-global-action="connect"><a class="js-hover" href="/#!/messages" data-component-term="connect_nav"> <span class="new-wrapper"><i class="nav-people"></i><i class="nav-new"></i></span> DMs </a></li>';
// and I want a "toggle all tweets" button.
var toggleAllButton = '<a href="#" onclick="$(\'.js-open-close-tweet\').click()" original-title="Close all open Tweets" style="display: inline; ">toggle all tweets</a>';

$(".js-global-actions").append(navBarDms);
$(".container").append(toggleAllButton);
