function changeURL() {
    // передаю через id значення url, яке визначається інпутом юзера
    var newURL = document.getElementById("new_url").value;

    // зміна url без перезавантаження
    history.pushState(null, null, "/" + newURL);
}
