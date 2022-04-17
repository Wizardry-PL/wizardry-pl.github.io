function pgload() {
    var divprop1 = '<div id="pgname" style="height: 56px;"><a class="subheader normcur hlink" style="display: block; color: var(--font-color);" HREF=""><b style="font-size: 16px;">';
    var divprop2 = '</b></a><br><br></div>'
    if (name != '') {
        document.getElementById("title").outerHTML = '<title id="title">Wizardry: ' + name + '</title>';
        document.getElementById("pgname").outerHTML = divprop1 + '&nbsp;&nbsp;&nbsp;' + name + divprop2;
    } else {
        document.getElementById("title").outerHTML = '<title id="title">Wizardry</title>';
        document.getElementById("pgname").outerHTML = divprop1 + '<br>' + divprop2;
    }
    if (document.getElementById("noload") != null) {document.getElementById("noload").outerHTML = '';}
    customTag("tb", instb);
}
function customTag(tagName, fn){
    document.createElement(tagName);
    var tagInstances = document.getElementsByTagName(tagName);
    for (var i = 0; i < tagInstances.length; i++) {
        fn(tagInstances[i]);
    }
}
function instb(elem) {
    document.getElementsByTagName('html')[0].innerHTML = document.getElementsByTagName('html')[0].innerHTML.replace(/<tb>/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
}
pgload();
