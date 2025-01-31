# Snapshot report for `packages/build/tests/plugins/install/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## Install local plugin dependencies: already installed

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
    > Installing plugins dependencies␊
    > Loading plugins␊
       - @netlify/plugin-functions-core from build core␊
       - @netlify/plugin-cache-core from build core␊
       - netlify-plugin-test from /file/path␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 4 commands. Lets do this!␊
    ␊
    ┌────────────────────────────────────────────────────┐␊
    │ 1. Running onInit command from netlify-plugin-test │␊
    └────────────────────────────────────────────────────┘␊
    ␊
    1.5␊
    ␊
     √  netlify-plugin-test.onInit completed in 1ms␊
    ␊
    ┌───────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onPreBuild command from @netlify/plugin-functions-core │␊
    └───────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPreBuild completed in 1ms␊
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

## Install local plugin dependencies: no package.json

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
    ␊
    ┌─────────────────────────────┐␊
    │    Plugin internal error    │␊
    └─────────────────────────────┘␊
    ␊
    > Error message␊
      Error: Could not import plugin: Cannot find module 'math-avg'␊
    ␊
    > Error location␊
      While loading local plugin "/file/path"␊
    STACK TRACE␊
    ␊
    > Error properties␊
      { code: 'MODULE_NOT_FOUND' }␊
    ␊
    ┌─────────────────────────────┐␊
    │  END Plugin internal error  │␊
    └─────────────────────────────┘␊
    `

## Install local plugin dependencies: no root package.json

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
       - netlify-plugin-test from /file/path␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 4 commands. Lets do this!␊
    ␊
    ┌────────────────────────────────────────────────────┐␊
    │ 1. Running onInit command from netlify-plugin-test │␊
    └────────────────────────────────────────────────────┘␊
    ␊
    test␊
    ␊
     √  netlify-plugin-test.onInit completed in 1ms␊
    ␊
    ┌───────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onPreBuild command from @netlify/plugin-functions-core │␊
    └───────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPreBuild completed in 1ms␊
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

## Install local plugin dependencies: with npm

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
    > Installing plugins dependencies␊
    added packages␊
    > Loading plugins␊
       - @netlify/plugin-functions-core from build core␊
       - @netlify/plugin-cache-core from build core␊
       - netlify-plugin-test from /file/path␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 4 commands. Lets do this!␊
    ␊
    ┌────────────────────────────────────────────────────┐␊
    │ 1. Running onInit command from netlify-plugin-test │␊
    └────────────────────────────────────────────────────┘␊
    ␊
    1.5␊
    ␊
     √  netlify-plugin-test.onInit completed in 1ms␊
    ␊
    ┌───────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onPreBuild command from @netlify/plugin-functions-core │␊
    └───────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPreBuild completed in 1ms␊
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

## Install local plugin dependencies: with yarn

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
    > Installing plugins dependencies␊
    added packages␊
    > Loading plugins␊
       - @netlify/plugin-functions-core from build core␊
       - @netlify/plugin-cache-core from build core␊
       - netlify-plugin-test from /file/path␊
    ␊
    > Running Netlify Build Lifecycle␊
      Found 4 commands. Lets do this!␊
    ␊
    ┌────────────────────────────────────────────────────┐␊
    │ 1. Running onInit command from netlify-plugin-test │␊
    └────────────────────────────────────────────────────┘␊
    ␊
    1.5␊
    ␊
     √  netlify-plugin-test.onInit completed in 1ms␊
    ␊
    ┌───────────────────────────────────────────────────────────────────┐␊
    │ 2. Running onPreBuild command from @netlify/plugin-functions-core │␊
    └───────────────────────────────────────────────────────────────────┘␊
    ␊
    ␊
     √  @netlify/plugin-functions-core.onPreBuild completed in 1ms␊
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
