build:
	pnpm run build
	rm -rf ./lib/tailwind-preset
	cp -R ./src/tailwind-preset ./lib/tailwind-preset

docs:
	pnpm run build-storybook
	pnpm run deploy-storybook

dev:
	pnpm run storybook

lint:
	pnpm run lint

test:
	pnpm run test

typecheck:
	pnpm run typecheck

check: typecheck test lint
	pnpm run spellcheck

update:
	pnpm run update

bump:
	pnpm version patch
	git add .
	git push

publish: check build docs bump
	pnpm publish