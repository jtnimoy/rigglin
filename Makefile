local:
	cd blockly/local_build;\
	java -jar closure-compiler-v20190819.jar --js='main.js' \
	  --js='../blocks/**.js' \
	  --js='../core/**.js' \
	  --js='../generators/**.js' \
	  --js='../msg/js/**.js' \
	  --js='../../closure-library/closure/goog/**.js' \
	  --js='../../closure-library/third_party/closure/goog/**.js' \
	  --generate_exports \
	  --externs ../externs/svg-externs.js \
	  --compilation_level ADVANCED_OPTIMIZATIONS \
	  --dependency_mode=PRUNE --entry_point=Main \
	  --js_output_file main_compressed.js; \
	cp *_compressed.js ../appengine/static	

all:
	cd blockly;\
	gulp
	cp *_compressed.js ../appengine/static	

deploy:
	cd blockly/appengine;\
	cp ../*_compressed.js ./static;\
	gcloud app deploy


run:
	open blockly/appengine/static/index.html

