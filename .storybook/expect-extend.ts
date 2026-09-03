import "vitest";

declare module "vitest" {
  interface Matchers<R, T> {
    /**
     * Assert whether given message was announced by ARIA live region.
     *
     * @param politenessSetting `POLITENESS_SETTING` of the announcement
     */
    toBeAnnounced(politenessSetting?: "assertive" | "polite"): T;
  }
}
