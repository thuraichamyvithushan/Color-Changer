var i=0;
function changeBackground(i){
    var colors=["red","blue","orange","brown","yellow" ,"pink", "puple", "black"];
    if (i==colors.length){
        i=0;
    }
    color=colors[i];
    document.body.style.backgroundColor = color;
    console.log(i);
    return i;
}
function altanation(){
    i=changeBackground(i);
    i++;
}