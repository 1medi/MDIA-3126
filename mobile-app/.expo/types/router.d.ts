/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/caesar-salad` | `/(tabs)/cheese` | `/_sitemap` | `/caesar-salad` | `/cheese`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
