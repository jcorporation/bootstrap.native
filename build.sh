#!/bin/sh

npm run custom INPUTFILE:src/index-mympd.js,OUTPUTFILE:dist/bootstrap-mympd.js,MIN:false,FORMAT:umd
npm run custom INPUTFILE:src/index-mympd.js,OUTPUTFILE:dist/bootstrap-mympd.min.js,MIN:true,FORMAT:umd

cp dist/bootstrap-mympd.js ../myMPD/dist/htdocs/js/bootstrap-native.js
cp dist/bootstrap-mympd.min.js ../myMPD/dist/htdocs/js/bootstrap-native.min.js
