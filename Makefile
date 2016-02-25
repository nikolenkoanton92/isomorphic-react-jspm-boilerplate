build:
	rm -rf public
	mkdir public
	jspm bundle-sfx main.js public/app.min.js --minify
