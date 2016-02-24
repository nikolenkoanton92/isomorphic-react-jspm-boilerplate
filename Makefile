build:
	rm -rf dist
	mkdir dist
	jspm bundle-sfx main.js dist/app.min.js --minify
