# Contributing Guidelines

Voila UI is close source, so every component in Voila UI is developed by your help. You too can help contribute to this project! This page describes how to setup the project on your computer for local development.

This project is bound by a [Code of Conduct](CODE_OF_CONDUCT.md).

## The Five Golden Rules

The simple steps of contributing to any GitHub project are as follows:

1. [Clone the repository](https://github.com/machtwatch/voila-ui)
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push -u origin my-new-feature`
5. Create a [Pull Request](https://github.com/machtwatch/voila-ui/pulls)!

## Prerequisites

### Windows, macOS and Linux

- [Git](http://git-scm.com/)
- [Node.js](http://nodejs.org/) (14.0.0+)
- [Yarn](https://yarnpkg.com/) (1.x)
- Text Editor with [EditorConfig](http://editorconfig.org/) & [Prettier](https://prettier.io/) support. (We recommend [Visual Studio Code](https://code.visualstudio.com/))

In general, contributors should use Node v14 and Yarn v1.x

#### Prerequisite Check

Run these commands inside the Terminal (PowerShell/Command Prompt for Windows).

**Git:** You should see the version number:

```sh-session
$ git version
git version 2.38.0
```

**Node.js:** You should see the version number:

> Note that we use `.nvmrc` in the root of this repository, to run `nvm use` automatically please kindly follow this [documentation](https://github.com/nvm-sh/nvm#nvmrc)

```sh-session
$ node -v
v14.7.0
```

**Yarn:** You should see the version number:

```sh-session
$ yarn -v
1.22.19
```

## Setting Up

First, you should clone the repository.

For example:

```sh-session
$ git clone https://github.com/machtwatch/voila-ui.git
```

After this repository has been cloned, `cd` into the repository:

```sh-session
$ cd voila-ui
```

Install the project's dependencies. Note that we use Yarn, not npm:

```sh-session
$ yarn
```

## Developing

To start developing components, you have to run the Storybook server.

```sh-session
$ yarn storybook
info Storybook started on => http://localhost:9001/
```

The storybook server is available at `http://localhost:9001`. Note that any new component needs to have at least one story as a demo, and _some_ tests.
