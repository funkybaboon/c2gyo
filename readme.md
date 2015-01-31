c2gyo
===
some dependencies of yeoman require npm >= 2. node is currently shipped with npm 1.4.x and won't be upgraded until node 0.12. the first npm install will choke and leave .lock files behind. hence we need to clean the cache and make a second npm install to complete installation.

  1. git clone https://github.com/funkybaboon/c2gyo.git
  2. cd c2gyo
  3. npm install -g grunt-cli bower
  4. npm install
  5. npm cache clean
  6. npm install
  7. bower update
  8. grunt serve