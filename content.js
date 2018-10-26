var elements = document.getElementsByTagName('*');
var word;
let array;
var badWords;
chrome.storage.local.get(['Words'], function(result){
    word = result.Words
    word = word.replace("[", "");
    word = word.replace("]", "");
    word = word.replace(/"/g, '');
    badWords = word.split(",");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];
            if (node.nodeType === 3) {
                var text = node.nodeValue;
                  for(var k = 0; k<badWords.length; k++) {
                    if(badWords.includes(text)) {
                      var replacedText = text.replace(badWords[k], 'GO0O0O0OD');
                      if (replacedText !== text) {
                          element.replaceChild(document.createTextNode(replacedText), node);
                      }
                  }
                }
            }
        }
    }
});

//
