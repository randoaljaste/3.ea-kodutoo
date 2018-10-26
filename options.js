	var Words = []
	
	document.getElementById('Save').addEventListener('click', function(){
		let word = document.getElementById('WordInput').value;
		Words.push(word);
		var myJSON = JSON.stringify(Words);
		chrome.storage.local.set({"Words": myJSON}, function(){
		});
	});


	