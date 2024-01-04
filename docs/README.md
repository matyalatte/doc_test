# docs_test

My playground for [just-the-docs](https://github.com/just-the-docs/just-the-docs).  
This repo is on public just for using github pages with my free account.  
You can see the built pages [here](https://matyalatte.github.io/doc_test/)

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
    baseurl: "/doc_test" # the subpath of your site, e.g. /blog
    url: "https://matyalatte.github.io" # the base hostname & protocol for your site, e.g. http://example.com
    repository: matyalatte/doc_test

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

6.  Install gems and run `jekyll serve` on Git Bash to see the result on a local machine

    ```bash
    bundle isntall
    bundle add webrick
    bundle exec jekyll serve --baseurl=""
    ```

 ## How to deploy docs

 1.  Go to `Settings -> Pages -> Build and deployment -> Branch`.
 2.  Select a branch and the `/docs` folder.
 3.  Click the `save` button.
 4.  Github Actions will build docs with jekyll.
 5.  Built html files are available on `https://{user_name}.github.io/{repo_name}`
