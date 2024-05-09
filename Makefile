install:
	npm ci

build:
	npx run build

start:
	npx run serve

lint:
	npx eslint .

fix:
	npx eslint --fix .
