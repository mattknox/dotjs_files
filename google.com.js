function googPostLoad() {
  $("#gbi1").css("visibility", "hidden");
  $("#gbi1a").css("visibility", "hidden");
  $("#gbgs1").css("visibility", "hidden");
}

window.googPostLoad = googPostLoad;
setTimeout('window.googPostLoad()', 6000);
