c2gyo
===
some dependencies of yeoman require npm >= 2. node is currently shipped with npm 1.4.x and won't be upgraded until node 0.12. the first npm install will choke and leave .lock files behind. hence we need to clean the cache and make a second npm install to complete installation.

git clone https://github.com/funkybaboon/c2gyo.git
cd c2gyo
npm install -g grunt-cli bower
npm install
npm cache clean
npm install
bower update
grunt serve