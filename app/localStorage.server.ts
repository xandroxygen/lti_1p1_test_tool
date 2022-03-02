import NodeCache from "node-cache";
import { LtiLaunchParams } from "./ltiLaunchParams";

let launchStorage: NodeCache;

declare global {
  var __launchStorage: NodeCache | undefined;
}

const init = () => {
  console.log("init cache");
  return new NodeCache({
    stdTTL: 60,
    checkperiod: 120,
  });
};

// avoid re-defining this in dev every single request
// thanks to live reload
if (process.env.NODE_ENV === "production") {
  launchStorage = init();
} else {
  if (!global.__launchStorage) {
    global.__launchStorage = init();
  }
  launchStorage = global.__launchStorage;
}

export const storeLaunch = (key: string, params: LtiLaunchParams) =>
  launchStorage.set(key, params);

export const retrieveLaunch = (id: string): LtiLaunchParams =>
  launchStorage.take(id) as LtiLaunchParams;
