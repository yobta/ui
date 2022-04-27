build:
	npm run build
	rm -rf ./lib/tailwind-preset
	cp -R ./src/tailwind-preset ./lib/tailwind-preset

dev:
	npm run storybook

lint:
	npm run lint

test:
	npm run jest

typecheck:
	npm run typecheck

check: typecheck lint test