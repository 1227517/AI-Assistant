const data = JSON.stringify({
	prompts: [
		{
			role: 'user',
			content: 'Hello'
		}
	]
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('POST', 'https://rapid-ai-bridge.p.rapidapi.com/');
xhr.setRequestHeader('x-rapidapi-key', '');
xhr.setRequestHeader('x-rapidapi-host', 'rapid-ai-bridge.p.rapidapi.com');
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send(data);