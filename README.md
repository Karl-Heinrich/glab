
# glab

```sh
             ,--,
           ,--.'|                ,---,
           |  | :              ,---.'|
  ,----._,.:  : '              |   | :
 /   /  ' /|  ' |     ,--.--.  :   : :
|   :     |'  | |    /       \ :     |,-.
|   | .\  .|  | :   .--.  .-. ||   : '  |
.   ; ';  |'  : |__  \__\/: . .|   |  / :
'   .   . ||  | '.'| ," .--.; |'   : |: |
 `---`-'| |;  :    ;/  /  ,.  ||   | '/ :
 .'__/\_: ||  ,   /;  :   .'   \   :    |
 |   :    : ---`-' |  ,     .-./    \  /
  \   \  /          `--`---'   `-'----'  
   `--`-'
```

An interactive gitlab-cli to manage issues from the command line.

---

`'\_[ X _ x ]_/'`  
This document is under construction

---

## Setup

```sh
git clone git@github.com:Karl-Heinrich/glab.git
npm i
```

Add a `.env` file your root folder and add:

```sh
GLAB_HOST=gitlab.com
GLAB_PRIVATE_TOKEN=y0urUs3rT0k3n
GLAB_NAMESPACE=m1ghtB3userN4m3
GLAB_PROJECT_PATH=pr0j3ctN4m3
GLAB_USERNAME=userN4m3
```

Alternatively, you could set environmental variables, to use
glab globally.
E.g. in your `.bashrc` or `.zshrc`:

```sh
# Export global variables for glab
export GLAB_HOST=gitlab.com
export GLAB_PRIVATE_TOKEN=y0urUs3rT0k3n
export GLAB_NAMESPACE=m1ghtB3userN4m3
export GLAB_PROJECT_PATH=pr0j3ctN4m3
export GLAB_USERNAME=userN4m3
```

Try

```sh
npm run try
glab
```

## Development

In order to automatically reload glab, use `npm run start` and add
an option.

E.g.

```sh
npm run start -- -i
```

to test and automatically reload `glab -i`.
