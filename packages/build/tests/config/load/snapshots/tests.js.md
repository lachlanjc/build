# Snapshot report for `packages/build/tests/config/load/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## --config with a Node module

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: 'netlify-config-test' } ␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 steps. Lets do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## --config with a relative path

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: '/file/path' } ␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 steps. Lets do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## --config with a scoped Node module

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: '@netlify/config-test' } ␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 steps. Lets do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## --config with an absolute path

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: '/file/path' } ␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 steps. Lets do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## --config with an invalid Node module

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: 'invalid' } ␊
    ␊
    ␊
    ┌─────────────────────────────┐␊
    │     Netlify Build Error     │␊
    └─────────────────────────────┘␊
    ␊
    Error: Configuration file does not exist: invalid␊
    Cannot find module 'invalid' from 'internal'␊
    STACK TRACE␊
    `

## --config with an invalid relative path

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: '/file/path' } ␊
    ␊
    ␊
    ┌─────────────────────────────┐␊
    │     Netlify Build Error     │␊
    └─────────────────────────────┘␊
    ␊
    Error: Configuration file does not exist: /file/path␊
    STACK TRACE␊
    `

## --config with an invalid scoped Node module

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: '@netlify/invalid' } ␊
    ␊
    ␊
    ┌─────────────────────────────┐␊
    │     Netlify Build Error     │␊
    └─────────────────────────────┘␊
    ␊
    Error: Configuration file does not exist: @netlify/invalid␊
    Cannot find module '@netlify/invalid' from 'internal'␊
    STACK TRACE␊
    `

## Can define configuration as environment variables

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: '/file/path' } ␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 2 steps. Lets do this!␊
    ␊
    ┌──────────────────────────────────────────────────────────────────────────────────────┐␊
    │ 1. Running install lifecycle from build.lifecycle.install in netlify.yml config file │␊
    └──────────────────────────────────────────────────────────────────────────────────────┘␊
    ␊
    Running command "echo install"␊
    install␊
    ␊
     √  build.lifecycle.install completed in 1ms␊
    ␊
    ┌──────────────────────────────────────────────────────────────────────────────────┐␊
    │ 2. Running build lifecycle from build.lifecycle.build in netlify.yml config file │␊
    └──────────────────────────────────────────────────────────────────────────────────┘␊
    ␊
    Running command "echo build"␊
    build␊
    ␊
     √  build.lifecycle.build completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## Empty configuration

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: '/file/path' } ␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 steps. Lets do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## No --config

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 0 steps. Lets do this!␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## No --config but none found

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    ␊
    ┌─────────────────────────────┐␊
    │     Netlify Build Error     │␊
    └─────────────────────────────┘␊
    ␊
    Error: No netlify configuration file was found␊
     Please add a "netlify.yml", "netlify.toml", or "netlify.json" file and try again␊
    ␊
    STACK TRACE␊
    `