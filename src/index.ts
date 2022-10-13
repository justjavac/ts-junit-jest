export * from "./decrator";
import { data } from "./decrator";

interface TestDefined {
  desc: string;
  fn: () => void;
  skip?: boolean;
  skipReason?: string;
}

export default function (fn: any) {
  const instance = new fn();
  const suite = data()[fn.name];
  const { hook, ...tests } = suite;

  describe(fn.name, () => {
    if (hook?.before) beforeAll(hook.before.bind(instance));
    if (hook?.after) afterAll(hook.after.bind(instance));
    if (hook?.["before.each"]) beforeEach(hook["before.each"].bind(instance));
    if (hook?.["after.each"]) afterEach(hook["after.each"].bind(instance));

    for (const x of Object.values<TestDefined>(tests)) {
      test(x.desc, x.fn.bind(instance));
    }
  });
}
