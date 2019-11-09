# About

Glab is an interactive cli to help you manage issues.
Right now, the following options are implemented:

**Options**:

```sh
-i, --issues, Show all issues with state "open" you have access to
-a, --assigned-to-me, Show issues assigned to you including labels and their iid
-d, --description-iid <iid>, iid of the issue to show the description for
-b, --about, about this cli
```

## Setup

Add a `.env` file your root folder and add:

```sh
GLAB_HOST=gitlab.com
GLAB_PRIVATE_TOKEN=y0urUs3rT0k3n
GLAB_NAMESPACE=m1ghtB3userN4m3
GLAB_PROJECT_PATH=pr0j3ctN4m3
GLAB_USERNAME=userN4m3
```

Alternatively, you could set environmental variables.
E.g. in your `.bashrc` or `.zshrc`:

```sh
# Export global variables for glab
export GLAB_HOST=gitlab.com
export GLAB_PRIVATE_TOKEN=y0urUs3rT0k3n
export GLAB_NAMESPACE=m1ghtB3userN4m3
export GLAB_PROJECT_PATH=pr0j3ctN4m3
export GLAB_USERNAME=userN4m3
```
