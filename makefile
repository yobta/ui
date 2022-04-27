build:
	npm run build
	rm -rf ./lib/tailwind-preset
	cp -R ./src/tailwind-preset ./lib/tailwind-preset

dev:
	npm run storybook

lint:
	npm run lint:fix

test:
	npm run test

typecheck:
	npm run typecheck