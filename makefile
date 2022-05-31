i:
	npm i --legacy-peer-deps

build:
	npm run build
	rm -rf ./lib/tailwind-preset
	cp -R ./src/tailwind-preset ./lib/tailwind-preset

docs:
	npm run build-storybook
	npm run deploy-storybook

dev:
	npm run storybook

lint:
	npm run lint

test:
	npm run test

typecheck:
	npm run typecheck

spellcheck:
	npm run spellcheck

check: typecheck test lint spellcheck

update:
	npm run update

bump:
	npm version patch
	git add .
	git push

publish: check build docs bump
	npm publish