# merge.md

Once upon a time there is a computer science student. She has been taking notes in markdown for a summer course. Now it's almost final time, and she wants to merge all of her markdown notes into a single file.

Because she is a computer science student, instead of doing it in 5 mins by copying and pasting, she chooses to spend 30 minutes writing a package to do the work (and possibly another 10 minutes publishing on npm). Ah, computer science student.

## Usage

Clone this repo, `cd` into it, and then run

```bash
$ node merge path/to/folder
```

and this package will merge all the files into one file called `merged.md`.

It now works for markdown files, but should really work for plain text and code files.

It's very simple for now. Will probably publish on npm just for fun.
