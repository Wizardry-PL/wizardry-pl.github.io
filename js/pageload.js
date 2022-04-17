function pgload() {
    var divprop1 = '<div id="pgname" style="height: 56px;"><div class="subheader"><b><a class="normcur hlink" style="font-size: 16px; color: var(--font-color);" HREF="">';
    var divprop2 = '</a></b></div><br><br></div>'
    if (name != '') {
        document.getElementById("title").outerHTML = '<title id="title">Wizardry: ' + name + '</title>';
        document.getElementById("pgname").outerHTML = divprop1 + '&nbsp;&nbsp;&nbsp;' + name + divprop2;
    } else {
        document.getElementById("title").outerHTML = '<title id="title">Wizardry</title>';
        document.getElementById("pgname").outerHTML = divprop1 + '<br>' + divprop2;
    }
    if (typeof disableTab === 'undefined' || disableTab != true) {document.getElementsByTagName('body')[0].outerHTML = document.getElementsByTagName('body')[0].outerHTML.replace(/<tb>/g, "&nbsp;&nbsp;&nbsp;&nbsp;");}
    if (document.getElementById("noload") != null) {document.getElementById("noload").outerHTML = '';}
}
pgload();
