test:
	./node_modules/.bin/mocha \
		--reporter spec

test-w:
	./node_modules/.bin/mocha \
		--reporter spec \
		--watch

.PHONY: test test-w