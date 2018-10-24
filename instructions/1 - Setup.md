# Overview

## Setup

### Installation

1. Install Node - brew install node
1. Install NPM - brew install npm (we'll be using v8.9.4)
1. Install Yarn - brew install yarn

### Setup

#### Initial Project Setup

1. git clone mini-puppet
1. yarn init
  1. name: <PRESS ENTER>
  1. version: 0.0.1
  1. Puppet in a tmp directory
  1. entry point: <PRESS ENTER>
  1. repository url: <PRESS ENTER>
  1. author: You <your@email>
  1. license: <PRESS ENTER>
  1. private: yes
1. mkdir lib
1. mkdir bin

After setting this up, you should see a package.json file with the following contents:

``` json
{
  "name": "mini-puppet",
  "version": "0.0.1",
  "description": "A mini version of puppet",
  "main": "index.js",
  "author": "Arman Elahi <npm@elahi-arman.me>",
  "license": "MIT",
  "private": true
}
```

#### Folder Structure

1. lib - this is where all the JS files will go
1. bin - installed binaries will go in here

