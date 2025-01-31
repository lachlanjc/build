# Snapshot report for `packages/build/tests/core/config/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## --baseRelDir

> Snapshot 1

    `{␊
      "configPath": "/file/path",␊
      "buildDir": "/file/path",␊
      "config": {␊
        "plugins": [],␊
        "build": {␊
          "environment": {},␊
          "base": "base",␊
          "lifecycle": {␊
            "onInit": "echo onInit",␊
            "onBuild": "echo onBuild"␊
          }␊
        }␊
      },␊
      "context": "production",␊
      "branch": "branch"␊
    }`

## --branch

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      branch: testContext␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Loading plugins␊
       - @netlify/plugin-functions-core from build core␊
       - @netlify/plugin-cache-core from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 4 commands. Lets do this!␊
    ␊
    ┌───────────────────────────────────────────────────────────────────┐␊
    │ 1. Running onPreBuild command from @netlify/plugin-functions-core │␊
    └───────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPreBuild completed in 1ms␊
    ␊
    ┌─────────────────────────────────────────────────────────────────────────┐␊
    │ 2. Running build.lifecycle.onBuild command from netlify.yml config file │␊
    └─────────────────────────────────────────────────────────────────────────┘␊
    ␊
    Running command "echo onBuildTest"␊
    onBuildTest␊
    ␊
     √  build.lifecycle.onBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────────┐␊
    │ 3. Running onPostBuild command from @netlify/plugin-functions-core │␊
    └────────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPostBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────┐␊
    │ 4. Running onPostBuild command from @netlify/plugin-cache-core │␊
    └────────────────────────────────────────────────────────────────┘␊
    ␊
    > Caching artifacts␊
    ␊
     √  @netlify/plugin-cache-core.onPostBuild completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## --cachedConfig

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Loading plugins␊
       - @netlify/plugin-functions-core from build core␊
       - @netlify/plugin-cache-core from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 4 commands. Lets do this!␊
    ␊
    ┌───────────────────────────────────────────────────────────────────┐␊
    │ 1. Running onPreBuild command from @netlify/plugin-functions-core │␊
    └───────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPreBuild completed in 1ms␊
    ␊
    ┌─────────────────────────────────────────────────────────────────────────┐␊
    │ 2. Running build.lifecycle.onBuild command from netlify.yml config file │␊
    └─────────────────────────────────────────────────────────────────────────┘␊
    ␊
    Running command "echo onBuild"␊
    onBuild␊
    ␊
     √  build.lifecycle.onBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────────┐␊
    │ 3. Running onPostBuild command from @netlify/plugin-functions-core │␊
    └────────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPostBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────┐␊
    │ 4. Running onPostBuild command from @netlify/plugin-cache-core │␊
    └────────────────────────────────────────────────────────────────┘␊
    ␊
    > Caching artifacts␊
    ␊
     √  @netlify/plugin-cache-core.onPostBuild completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## --config

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      config: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Loading plugins␊
       - @netlify/plugin-functions-core from build core␊
       - @netlify/plugin-cache-core from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 3 commands. Lets do this!␊
    ␊
    ┌───────────────────────────────────────────────────────────────────┐␊
    │ 1. Running onPreBuild command from @netlify/plugin-functions-core │␊
    └───────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPreBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onPostBuild command from @netlify/plugin-functions-core │␊
    └────────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPostBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────┐␊
    │ 3. Running onPostBuild command from @netlify/plugin-cache-core │␊
    └────────────────────────────────────────────────────────────────┘␊
    ␊
    > Caching artifacts␊
    ␊
     √  @netlify/plugin-cache-core.onPostBuild completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## --context

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      context: testContext␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Loading plugins␊
       - @netlify/plugin-functions-core from build core␊
       - @netlify/plugin-cache-core from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 4 commands. Lets do this!␊
    ␊
    ┌───────────────────────────────────────────────────────────────────┐␊
    │ 1. Running onPreBuild command from @netlify/plugin-functions-core │␊
    └───────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPreBuild completed in 1ms␊
    ␊
    ┌─────────────────────────────────────────────────────────────────────────┐␊
    │ 2. Running build.lifecycle.onBuild command from netlify.yml config file │␊
    └─────────────────────────────────────────────────────────────────────────┘␊
    ␊
    Running command "echo onBuildTest"␊
    onBuildTest␊
    ␊
     √  build.lifecycle.onBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────────┐␊
    │ 3. Running onPostBuild command from @netlify/plugin-functions-core │␊
    └────────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPostBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────┐␊
    │ 4. Running onPostBuild command from @netlify/plugin-cache-core │␊
    └────────────────────────────────────────────────────────────────┘␊
    ␊
    > Caching artifacts␊
    ␊
     √  @netlify/plugin-cache-core.onPostBuild completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## --cwd

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      cwd: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Loading plugins␊
       - @netlify/plugin-functions-core from build core␊
       - @netlify/plugin-cache-core from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 3 commands. Lets do this!␊
    ␊
    ┌───────────────────────────────────────────────────────────────────┐␊
    │ 1. Running onPreBuild command from @netlify/plugin-functions-core │␊
    └───────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPreBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onPostBuild command from @netlify/plugin-functions-core │␊
    └────────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPostBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────┐␊
    │ 3. Running onPostBuild command from @netlify/plugin-cache-core │␊
    └────────────────────────────────────────────────────────────────┘␊
    ␊
    > Caching artifacts␊
    ␊
     √  @netlify/plugin-cache-core.onPostBuild completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## --defaultConfig

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Loading plugins␊
       - @netlify/plugin-functions-core from build core␊
       - @netlify/plugin-cache-core from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 5 commands. Lets do this!␊
    ␊
    ┌────────────────────────────────────────────────────────────────────────┐␊
    │ 1. Running build.lifecycle.onInit command from netlify.yml config file │␊
    └────────────────────────────────────────────────────────────────────────┘␊
    ␊
    Running command "echo onInit"␊
    onInit␊
    ␊
     √  build.lifecycle.onInit completed in 1ms␊
    ␊
    ┌───────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onPreBuild command from @netlify/plugin-functions-core │␊
    └───────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPreBuild completed in 1ms␊
    ␊
    ┌─────────────────────────────────────────────────────────────────────────┐␊
    │ 3. Running build.lifecycle.onBuild command from netlify.yml config file │␊
    └─────────────────────────────────────────────────────────────────────────┘␊
    ␊
    Running command "echo onBuild"␊
    onBuild␊
    ␊
     √  build.lifecycle.onBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────────┐␊
    │ 4. Running onPostBuild command from @netlify/plugin-functions-core │␊
    └────────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPostBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────┐␊
    │ 5. Running onPostBuild command from @netlify/plugin-cache-core │␊
    └────────────────────────────────────────────────────────────────┘␊
    ␊
    > Caching artifacts␊
    ␊
     √  @netlify/plugin-cache-core.onPostBuild completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## --repository-root

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Loading plugins␊
       - @netlify/plugin-functions-core from build core␊
       - @netlify/plugin-cache-core from build core␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 3 commands. Lets do this!␊
    ␊
    ┌───────────────────────────────────────────────────────────────────┐␊
    │ 1. Running onPreBuild command from @netlify/plugin-functions-core │␊
    └───────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPreBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onPostBuild command from @netlify/plugin-functions-core │␊
    └────────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPostBuild completed in 1ms␊
    ␊
    ┌────────────────────────────────────────────────────────────────┐␊
    │ 3. Running onPostBuild command from @netlify/plugin-cache-core │␊
    └────────────────────────────────────────────────────────────────┘␊
    ␊
    > Caching artifacts␊
    ␊
     √  @netlify/plugin-cache-core.onPostBuild completed in 1ms␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
     √  Netlify Build completed in 1ms␊
    ␊
    Have a nice day!␊
    `

## User error

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      config: /file/path␊
    ␊
    ␊
    ┌─────────────────────────────┐␊
    │     Configuration error     │␊
    └─────────────────────────────┘␊
    ␊
    > Error message␊
      When resolving config file /file/path␊
      Configuration file does not exist␊
    ␊
    ┌─────────────────────────────┐␊
    │   END Configuration error   │␊
    └─────────────────────────────┘␊
    `
