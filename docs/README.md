# docs_test

My playground for [just-the-docs](https://github.com/just-the-docs/just-the-docs).  
This repo is on public just for using github pages with my free account.  

## How to use just-the-docs with Git Bash on Windows

1.  Install `Ruby+Devkit` from [here](https://rubyinstaller.org/downloads/)
2.  Choose `MSYS2 and MINGW development tool chain` in the installer.

3.  Install gems and create a new folder on Git Bash

    ```bash
    gem update
    gem isntall jekyll bundler
    bundle exec jekyll new . --force
    ```

4.  Edit _config.yml

    ```yml
    # My custom branch
    remote_theme: matyalatte/just-the-docs@add_group_option

    plugins:
    - jekyll-feed
    - jekyll-remote-theme

    # github
    github: [metadata]
    ```

5.  Edit Gemfile

    ```
    # gem "jekyll", "~> 3.9.3"
    gem "github-pages", "~> 228", group: :jekyll_plugins
    ```

6.  Install gems and run jekyll serve on Git Bash to see the result on a local machine

    ```bash
    bundle isntall
    bundle add webrick
    bundle exec jekyll serve
    ```
