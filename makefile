i:
	npm i --legacy-peer-deps

build:
	make check
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
	npm run test:watch

typecheck:
	npm run typecheck

spellcheck:
	npm run spellcheck

check: 
	npm run typecheck
	npm run test
	npm run lint
	npm run spellcheck

ncu:
	npm run ncu
	make i

bump:
	npm version patch
	git add .
	git push

publish:
	make build
	make docs
	make bump
	npm publish