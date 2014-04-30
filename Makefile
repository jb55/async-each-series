
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

test:
	npm test

clean:
	rm -fr build components template.js

.PHONY: clean test
