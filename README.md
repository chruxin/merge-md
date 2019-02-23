# merge-md 	![npm](https://img.shields.io/npm/dt/merge-md.svg)

[![NPM](https://nodei.co/npm/merge-md.png?compact=true)](https://www.npmjs.com/package/merge-md)

<a href="https://yarnpkg.com/en/package/merge-md">
  <img alt="Yarn" src="https://i.imgur.com/HxYZTl8.png" width="300">
</a>


Once upon a time there is a computer science student. She has been taking notes in markdown for a summer course. Now it's almost final time, and she wants to merge all of her markdown notes into a single file.

Because she is a computer science student, instead of doing it in 5 mins by copying and pasting, she chooses to spend 30 minutes writing a package to do the work (and ~~possibly~~ another ~~10~~ 30 minutes publishing on npm). Ah, a computer science student.

## Installation

### Install from npm/yarn

```bash
$ npm install -g merge-md
```

or

```bash
$ yarn global add merge-md
```

to install globally.

### Clone to local

Clone this repo, `cd` into it, and then run

```bash
$ npm link
```

## Usage

This package will merge all the files in a directory into one file called `merged.md` or `merged.mdx`.

It now works for markdown files, but should really work for plain text and code files.

### Provide directory

```bash
$ merge path/to/directory
```

This merges all the files in `path/to/directory`.

Don't know what directory you want? Try running `$ pwd` inside the folder you want.

### No provided directory

```bash
$ merge
```

This merges all the files in the directory where this command is run.

### Options

```bash
$ merge -mdx
```
This changes output file extension from '.md' to '.mdx'

```bash
$ merge -no-file-info
```
This disables file info comments of merged files in output file
## License

Copyright 2017 Mandy Chen

Licensed under [MIT](./license)
