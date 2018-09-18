function displayNewItems() {
    var item = document.getElementById('new');
    var newItems = [
        'BROOKLYN NINE-NINE BLACK',
        'BROOKLYN NINE-NINE TEAL',
        'BROOKLYN NINE-NINE YELLOW',
        'NOICE SMORT',
        'COOL NO DOUBT',
        'DONT POOP'
    ];
    
    for(var i=0; i<newItems.length; i++){
        var name = newItems[i];
        item.innerHTML += '<div id="item'+i+'">'+
                        '<img id="item" src="img/bnn'+(i+1)+'.jpg">'+
                        '<h3>'+name+'</h3>'+
                        '<div>';
    }
}