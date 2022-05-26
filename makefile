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

check: typecheck lint test

update:
	npm run update