import { n as __esmMin } from "./runtime-XrdeG17s.js";
//#region ../addons/a11y/src/constants.ts
var ADDON_ID$2, DOCUMENTATION_LINK$1;
var init_constants$2 = __esmMin((() => {
	ADDON_ID$2 = "storybook/a11y";
	`${ADDON_ID$2}`;
	`${ADDON_ID$2}`;
	`${ADDON_ID$2}`;
	`${ADDON_ID$2}`;
	`${ADDON_ID$2}`;
	`${ADDON_ID$2}`;
	`${ADDON_ID$2}`;
	DOCUMENTATION_LINK$1 = "writing-tests/accessibility-testing";
	`${DOCUMENTATION_LINK$1}`;
}));
//#endregion
//#region ../addons/onboarding/src/constants.ts
var ADDON_ID$1, ADDON_ONBOARDING_CHANNEL;
var init_constants$1 = __esmMin((() => {
	ADDON_ID$1 = "storybook/onboarding";
	ADDON_ONBOARDING_CHANNEL = `${ADDON_ID$1}/channel`;
})), ADDON_ID, STORYBOOK_ADDON_TEST_CHANNEL, DOCUMENTATION_LINK, storeOptions;
var init_constants = __esmMin((() => {
	init_constants$2();
	ADDON_ID = "storybook/test";
	`${ADDON_ID}`;
	STORYBOOK_ADDON_TEST_CHANNEL = `${ADDON_ID}/channel`;
	DOCUMENTATION_LINK = "writing-tests/integrations/vitest-addon";
	`${DOCUMENTATION_LINK}`;
	storeOptions = {
		id: ADDON_ID,
		initialState: {
			config: {
				coverage: false,
				a11y: false
			},
			watching: false,
			cancelling: false,
			fatalError: void 0,
			currentRun: {
				triggeredBy: void 0,
				config: {
					coverage: false,
					a11y: false
				},
				componentTestStatuses: [],
				a11yStatuses: [],
				a11yReports: {},
				reports: {},
				componentTestCount: {
					success: 0,
					error: 0
				},
				a11yCount: {
					success: 0,
					warning: 0,
					error: 0
				},
				storyIds: void 0,
				totalTestCount: void 0,
				startedAt: void 0,
				finishedAt: void 0,
				unhandledErrors: [],
				coverageSummary: void 0
			}
		}
	};
	`${storeOptions.id}`;
	`${ADDON_ID}`;
	`${ADDON_ID}`;
	`${ADDON_ID}`;
}));
//#endregion
export { ADDON_ONBOARDING_CHANNEL as a, init_constants$2 as c, ADDON_ID$1 as i, STORYBOOK_ADDON_TEST_CHANNEL as n, init_constants$1 as o, init_constants as r, ADDON_ID$2 as s, ADDON_ID as t };
