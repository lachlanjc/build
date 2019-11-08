# Snapshot report for `packages/build/tests/config/template/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## {context:...}

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
      Found 1 step. Lets do this!␊
    ␊
    ┌──────────────────────────────────────────────────────────────────────────────────┐␊
    │ 1. Running build lifecycle from build.lifecycle.build in netlify.yml config file │␊
    └──────────────────────────────────────────────────────────────────────────────────┘␊
    ␊
    Running command "echo prod"␊
    prod␊
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

## {context:...} pointing to undefined path

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: '/file/path', context: 'invalid' } ␊
    ␊
    > Using config file: /file/path␊
    ␊
    No config attribute found to satisfy the '${self:context.invalid.testProp}' variable. Attempting fallback value␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 1 step. Lets do this!␊
    ␊
    ┌──────────────────────────────────────────────────────────────────────────────────┐␊
    │ 1. Running build lifecycle from build.lifecycle.build in netlify.yml config file │␊
    └──────────────────────────────────────────────────────────────────────────────────┘␊
    ␊
    Running command "echo {}"␊
    {}␊
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

## {context:...} with --context

> Snapshot 1

    `> Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    Options␊
     { config: '/file/path', context: 'development' } ␊
    ␊
    > Using config file: /file/path␊
    ␊
    > Installing plugins dependencies␊
    ␊
    > Loading plugins␊
      Loading plugin "@netlify/plugin-functions-core" from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 1 step. Lets do this!␊
    ␊
    ┌──────────────────────────────────────────────────────────────────────────────────┐␊
    │ 1. Running build lifecycle from build.lifecycle.build in netlify.yml config file │␊
    └──────────────────────────────────────────────────────────────────────────────────┘␊
    ␊
    Running command "echo dev"␊
    dev␊
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

## {env:...}

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
      Found 1 step. Lets do this!␊
    ␊
    ┌──────────────────────────────────────────────────────────────────────────────────┐␊
    │ 1. Running build lifecycle from build.lifecycle.build in netlify.yml config file │␊
    └──────────────────────────────────────────────────────────────────────────────────┘␊
    ␊
    Running command "echo test"␊
    test␊
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

## {secrets:...}

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
      Found 1 step. Lets do this!␊
    ␊
    ┌──────────────────────────────────────────────────────────────────────────────────┐␊
    │ 1. Running build lifecycle from build.lifecycle.build in netlify.yml config file │␊
    └──────────────────────────────────────────────────────────────────────────────────┘␊
    ␊
    Running command "echo shhhhhhh"␊
    shhhhhhh␊
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