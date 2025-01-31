# Snapshot report for `packages/build/tests/plugins/api/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## --site-id

> Snapshot 1

    `␊
    > Starting Netlify Build v1.0.0␊
      https://github.com/netlify/build␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
      siteId: test␊
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

## --token

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

## NETLIFY_AUTH_TOKEN environment variable

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
    [ { id: 'test' } ]␊
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

## api call

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
    [ { id: 'test' } ]␊
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

## default scopes

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
    ␊
    ┌─────────────────────────────┐␊
    │        Build failed         │␊
    └─────────────────────────────┘␊
    ␊
    > Error message␊
      Error: This plugin is not authorized to use "api.listSites". Please update the plugin scopes.␊
    ␊
    > Error location␊
      In "onInit" event in local plugin "/file/path"␊
    STACK TRACE␊
    ␊
    ┌─────────────────────────────┐␊
    │      END Build failed       │␊
    └─────────────────────────────┘␊
    `

## feature flag

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
    true␊
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

## scopes but no token

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
    │        Build failed         │␊
    └─────────────────────────────┘␊
    ␊
    > Error message␊
      Error: This plugin requires a Netlify API authentication token␊
    ␊
    > Error location␊
      While loading local plugin "/file/path"␊
    ␊
    ┌─────────────────────────────┐␊
    │      END Build failed       │␊
    └─────────────────────────────┘␊
    `

## star scopes

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
    [ { id: 'test' } ]␊
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

## wrong scopes

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
    ␊
    ┌─────────────────────────────┐␊
    │        Build failed         │␊
    └─────────────────────────────┘␊
    ␊
    > Error message␊
      Error: This plugin is not authorized to use "api.listSites". Please update the plugin scopes.␊
    ␊
    > Error location␊
      In "onInit" event in local plugin "/file/path"␊
    STACK TRACE␊
    ␊
    ┌─────────────────────────────┐␊
    │      END Build failed       │␊
    └─────────────────────────────┘␊
    `
