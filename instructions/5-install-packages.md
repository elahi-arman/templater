# Installing Packages

NPM's real power comes from its super large community. There's tons of really cool packages out there, as well as some really garbage packages. Be careful not to use too many node packages, once you start installing them, you may start to see a real mess.

## Installing 3rd Party Packages

To install a package from a Node registry:

```
yarn add faker
```

This will create a dependencies section in the nearest package.json where you'll see a new entry with faker + a version for it is created

``` json
"dependencies": {
    "faker": "^4.1.0"
}
```

This is the best way to manage dependencies. Each dependency is locked to a version range using semver. In addition, you'll see that a yarn.lock file has been created. This file is how we ensure that dependencies pulled from two different places match versions.

### Installing Developer Packages

To install a package for development, you can use the following command

```
yarn add eslint -D
```

Once completed, you'll see that the devDependencies section in your package.json was updated. When a user installs your package, these dependencies won't get installed by default if the environment variable NODE_ENV is set to "production".

### Installing all packages listed in a package.json

If you've just cloned a repo, since a lot of times node_modules aren't pushed to Git, you can type the command

```
yarn install
```

from a directory with a package.json in order to install all dependencies into a node_modules folder adjacent to the package.json file.

## Importing Packages

We've already imported or required standard library packages. Importing 3rd party packages is done in the exact same way.

``` js
const fs = require('fs');       // standard library
const chalk = require('chalk'); // 3rd party
```

Non-local, non-standard packages (things that you've had to yarn add) are resolved by going from the current directory all the way up to the root and looking for a node_modules directory. If the package is found in the node_modules directory, it's used, but if it's not, then the parent directory will be checked. After reaching the root, globally installed packages will also be searched.

### Importing Local Modules

So we want to have modular code because we're not savages. How do we import and export local files?

``` js
// answer-to-life.js - exporting a NUMBER (or any thing)
module.exports = 42

//hitchiker.js - importing a local file
const answer = require('./answer-to-life');
```

Node.js will resolve anything that's a relative path as a local file.

### Linking packages

Sometimes, you'll want to link local dev versions of packages before publishing to a Node repository. To do that, we use the ```yarn link``` command inside the local package. Then in the package you want to call the local package from, you type ```yarn link <package>```.

```
cd ~/my-unpublished-module
yarn link
cd ~/my-other-module
yarn link my-unpublished-module
```

SIDE NOTE:

Since JS is an ever evolving language, you may see some new syntax introduced such as

``` js
import React from 'react'
```

This is essentially saying

``` js
const React = require('react');
```

