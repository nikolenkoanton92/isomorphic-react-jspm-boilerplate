install:
	npm install
	jspm install

build:
	rm -rf public
	mkdir public
	jspm bundle-sfx main.js public/app.min.js --minify

clean:
	rm -rf public
	rm -rf node_modules
	rm -rf app/jspm_packages
