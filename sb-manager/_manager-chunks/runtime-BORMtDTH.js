import { n as __esmMin } from "./runtime-XrdeG17s.js";
import { Ar as init_core_events, At as styled, Br as init__storybook_global_react, Dr as STORY_INDEX_INVALIDATED, Er as STORY_FINISHED, Fr as _storybook_global_react_default, Gr as useEffect, I as init_client_logger, It as Tag$1, Jr as useMemo, Jt as internal_universalTestProviderStore, L as logger, Lt as addons, Or as UPDATE_GLOBALS, Ot as init_emotion, Qr as useSyncExternalStore, St as ThemeProvider, Tr as STORY_ARGS_UPDATED, Ur as useCallback, Ut as init_manager_api, Xr as useRef, Y as Link, Zr as useState, an as useStorybookApi, d as init_types, dr as icons_exports, fr as init_icons, i as init_AddonVitestService_constants, jt as themes, lr as WandIcon, lt as SyntaxHighlighter, n as init_shared, nn as useGlobals, nt as Separator, pr as AI_PROMPT_NUDGE, r as SUPPORTED_FRAMEWORKS, s as Addon_TypesEnum, tn as useGlobalTypes, tt as Select, vt as init_components, wt as convert, yr as PREVIEW_INITIALIZED } from "./runtime-CCGFWiML.js";
import { S as isEqual, b as init_predicate, y as init_import } from "./runtime-DqOdIqaJ.js";
import { c as dedent, l as init_esm } from "./runtime-B9T0K19t.js";
import { i as init_TourGuide, r as TourGuide } from "./runtime-DQa1WfwG.js";
import { c as init_manager_errors, s as StatusTypeIdMismatchError$2 } from "./runtime-Bis0saf2.js";
import { a as LocationMonitor, o as init_useLocation } from "./runtime-CxQnUpQE.js";
import { In as $a46cf152bb926da5$export$a9b970dcc4ae71a9, Ln as $a46cf152bb926da5$export$d10ae4f68404609a } from "./runtime-Bg3R07cf.js";
import { a as init_constants$1 } from "./runtime-DPNAwVu5.js";
import { a as ADDON_ONBOARDING_CHANNEL, c as init_constants$2, i as ADDON_ID$1, n as STORYBOOK_ADDON_TEST_CHANNEL, o as init_constants$3, r as init_constants$4 } from "./runtime-DbAki17p.js";
//#region src/toolbar/utils/normalize-toolbar-arg-type.ts
var normalizeArgType;
var init_normalize_toolbar_arg_type = __esmMin((() => {
	normalizeArgType = (key, argType) => {
		const toolbar = argType.toolbar;
		if (!toolbar) return null;
		return {
			...argType,
			toolbar: {
				...argType.toolbar,
				items: toolbar.items.map((_item) => {
					const item = typeof _item === "string" ? {
						value: _item,
						title: _item
					} : _item;
					if (item.type === "reset" && toolbar.icon) {
						item.icon = toolbar.icon;
						item.hideIcon = true;
						item.value = void 0;
					}
					return item;
				})
			}
		};
	};
}));
//#endregion
//#region src/toolbar/components/ToolbarIcon.tsx
var toolbarIcons, ToolbarIcon;
var init_ToolbarIcon = __esmMin((() => {
	init__storybook_global_react();
	init_client_logger();
	init_icons();
	toolbarIcons = {
		user: "UserIcon",
		useralt: "UserAltIcon",
		useradd: "UserAddIcon",
		users: "UsersIcon",
		profile: "ProfileIcon",
		facehappy: "FaceHappyIcon",
		faceneutral: "FaceNeutralIcon",
		facesad: "FaceSadIcon",
		accessibility: "AccessibilityIcon",
		accessibilityalt: "AccessibilityAltIcon",
		accessibilityignored: "AccessibilityIgnoredIcon",
		arrowup: "ChevronUpIcon",
		arrowdown: "ChevronDownIcon",
		arrowleft: "ChevronLeftIcon",
		arrowright: "ChevronRightIcon",
		arrowupalt: "ArrowUpIcon",
		arrowdownalt: "ArrowDownIcon",
		arrowleftalt: "ArrowLeftIcon",
		arrowrightalt: "ArrowRightIcon",
		arrowtopleft: "ArrowTopLeftIcon",
		arrowtopright: "ArrowTopRightIcon",
		arrowbottomleft: "ArrowBottomLeftIcon",
		arrowbottomright: "ArrowBottomRightIcon",
		arrowsolidup: "ArrowSolidUpIcon",
		arrowsoliddown: "ArrowSolidDownIcon",
		arrowsolidleft: "ArrowSolidLeftIcon",
		arrowsolidright: "ArrowSolidRightIcon",
		chevronsmallup: "ChevronSmallUpIcon",
		chevronsmalldown: "ChevronSmallDownIcon",
		chevronsmallleft: "ChevronSmallLeftIcon",
		chevronsmallright: "ChevronSmallRightIcon",
		expandalt: "ExpandAltIcon",
		collapse: "CollapseIcon",
		expand: "ExpandIcon",
		unfold: "UnfoldIcon",
		transfer: "TransferIcon",
		redirect: "RedirectIcon",
		jumpto: "JumpToIcon",
		popout: "PopOutIcon",
		undo: "UndoIcon",
		reply: "ReplyIcon",
		sync: "SyncIcon",
		upload: "UploadIcon",
		download: "DownloadIcon",
		save: "SaveIcon",
		back: "BackIcon",
		proceed: "ProceedIcon",
		refresh: "RefreshIcon",
		globe: "GlobeIcon",
		compass: "CompassIcon",
		direction: "DirectionIcon",
		location: "LocationIcon",
		pin: "PinIcon",
		time: "TimeIcon",
		dashboard: "DashboardIcon",
		timer: "TimerIcon",
		home: "HomeIcon",
		admin: "AdminIcon",
		info: "InfoIcon",
		question: "QuestionIcon",
		support: "SupportIcon",
		bug: "BugIcon",
		alert: "AlertIcon",
		alertalt: "AlertAltIcon",
		email: "EmailIcon",
		phone: "PhoneIcon",
		link: "LinkIcon",
		unlink: "LinkBrokenIcon",
		bell: "BellIcon",
		rss: "RSSIcon",
		sharealt: "ShareAltIcon",
		share: "ShareIcon",
		circle: "CircleIcon",
		circlehollow: "CircleHollowIcon",
		diamond: "DiamondIcon",
		bookmarkhollow: "BookmarkHollowIcon",
		bookmark: "BookmarkIcon",
		hearthollow: "HeartHollowIcon",
		heart: "HeartIcon",
		starhollow: "StarHollowIcon",
		star: "StarIcon",
		certificate: "CertificateIcon",
		verified: "VerifiedIcon",
		thumbsup: "ThumbsUpIcon",
		shield: "ShieldIcon",
		basket: "BasketIcon",
		beaker: "BeakerIcon",
		hourglass: "HourglassIcon",
		flag: "FlagIcon",
		gift: "GiftIcon",
		sticker: "StickerIcon",
		cloudhollow: "CloudHollowIcon",
		cloud: "CloudIcon",
		edit: "EditIcon",
		editor: "EditorIcon",
		cog: "CogIcon",
		nut: "NutIcon",
		wrench: "WrenchIcon",
		wand: "WandIcon",
		ellipsis: "EllipsisIcon",
		check: "CheckIcon",
		checklist: "ChecklistIcon",
		form: "FormIcon",
		batchdeny: "BatchDenyIcon",
		batchaccept: "BatchAcceptIcon",
		controls: "ControlsIcon",
		plus: "PlusIcon",
		closeAlt: "CloseAltIcon",
		cross: "CrossIcon",
		trash: "TrashIcon",
		pinalt: "PinAltIcon",
		unpin: "UnpinIcon",
		add: "AddIcon",
		subtract: "SubtractIcon",
		close: "CloseIcon",
		delete: "DeleteIcon",
		passed: "PassedIcon",
		changed: "ChangedIcon",
		failed: "FailedIcon",
		status: "StatusIcon",
		statuspass: "StatusPassIcon",
		statusfail: "StatusFailIcon",
		statuswarn: "StatusWarnIcon",
		statusnew: "StatusNewIcon",
		clear: "ClearIcon",
		sweep: "SweepIcon",
		comment: "CommentIcon",
		commentadd: "CommentAddIcon",
		requestchange: "RequestChangeIcon",
		comments: "CommentsIcon",
		chat: "ChatIcon",
		lock: "LockIcon",
		unlock: "UnlockIcon",
		key: "KeyIcon",
		command: "CommandIcon",
		outbox: "OutboxIcon",
		credit: "CreditIcon",
		button: "ButtonIcon",
		type: "TypeIcon",
		pointerdefault: "PointerDefaultIcon",
		pointerhand: "PointerHandIcon",
		browser: "BrowserIcon",
		tablet: "TabletIcon",
		mobile: "MobileIcon",
		watch: "WatchIcon",
		sidebar: "SidebarIcon",
		sidebaralt: "SidebarAltIcon",
		sidebaralttoggle: "SidebarAltToggleIcon",
		sidebartoggle: "SidebarToggleIcon",
		bottombar: "BottomBarIcon",
		bottombartoggle: "BottomBarToggleIcon",
		cpu: "CPUIcon",
		database: "DatabaseIcon",
		memory: "MemoryIcon",
		structure: "StructureIcon",
		box: "BoxIcon",
		power: "PowerIcon",
		photo: "PhotoIcon",
		component: "ComponentIcon",
		grid: "GridIcon",
		gridalt: "GridAltIcon",
		outline: "OutlineIcon",
		photodrag: "PhotoDragIcon",
		photostabilize: "PhotoStabilizeIcon",
		drag: "DragIcon",
		search: "SearchIcon",
		zoom: "ZoomIcon",
		zoomout: "ZoomOutIcon",
		zoomreset: "ZoomResetIcon",
		eye: "EyeIcon",
		eyeclose: "EyeCloseIcon",
		lightning: "LightningIcon",
		lightningoff: "LightningOffIcon",
		contrast: "ContrastIcon",
		contrastignored: "ContrastIgnoredIcon",
		switchalt: "SwitchAltIcon",
		mirror: "MirrorIcon",
		grow: "GrowIcon",
		paintbrush: "PaintBrushIcon",
		paintbrushalt: "PaintBrushAltIcon",
		ruler: "RulerIcon",
		stop: "StopIcon",
		camera: "CameraIcon",
		camerastabilize: "CameraStabilizeIcon",
		video: "VideoIcon",
		speaker: "SpeakerIcon",
		play: "PlayIcon",
		playback: "PlayBackIcon",
		playnext: "PlayNextIcon",
		playhollow: "PlayHollowIcon",
		playallhollow: "PlayAllHollowIcon",
		rewind: "RewindIcon",
		fastforward: "FastForwardIcon",
		stopalt: "StopAltIcon",
		stopalthollow: "StopAltHollowIcon",
		sidebyside: "SideBySideIcon",
		stacked: "StackedIcon",
		sun: "SunIcon",
		moon: "MoonIcon",
		book: "BookIcon",
		document: "DocumentIcon",
		copy: "CopyIcon",
		category: "CategoryIcon",
		folder: "FolderIcon",
		files: "FilesIcon",
		print: "PrintIcon",
		graphline: "GraphLineIcon",
		calendar: "CalendarIcon",
		graphbar: "GraphBarIcon",
		menu: "MenuIcon",
		menualt: "MenuIcon",
		filter: "FilterIcon",
		sortup: "SortUpIcon",
		sortdown: "SortDownIcon",
		docchart: "DocChartIcon",
		doclist: "DocListIcon",
		markup: "MarkupIcon",
		bold: "BoldIcon",
		italic: "ItalicIcon",
		alignleft: "AlignLeftIcon",
		alignright: "AlignRightIcon",
		paperclip: "PaperClipIcon",
		listordered: "ListOrderedIcon",
		listunordered: "ListUnorderedIcon",
		paragraph: "ParagraphIcon",
		markdown: "MarkdownIcon",
		repository: "RepoIcon",
		commit: "CommitIcon",
		branch: "BranchIcon",
		pullrequest: "PullRequestIcon",
		merge: "MergeIcon",
		apple: "AppleIcon",
		linux: "LinuxIcon",
		ubuntu: "UbuntuIcon",
		windows: "WindowsIcon",
		storybook: "StorybookIcon",
		azuredevops: "AzureDevOpsIcon",
		bitbucket: "BitbucketIcon",
		chrome: "ChromeIcon",
		chromatic: "ChromaticIcon",
		componentdriven: "ComponentDrivenIcon",
		discord: "DiscordIcon",
		facebook: "FacebookIcon",
		figma: "FigmaIcon",
		gdrive: "GDriveIcon",
		github: "GithubIcon",
		gitlab: "GitlabIcon",
		google: "GoogleIcon",
		graphql: "GraphqlIcon",
		linkedin: "LinkedinIcon",
		medium: "MediumIcon",
		redux: "ReduxIcon",
		twitter: "TwitterIcon",
		x: "XIcon",
		youtube: "YoutubeIcon",
		vscode: "VSCodeIcon"
	};
	ToolbarIcon = ({ icon }) => {
		const Icon = icons_exports[toolbarIcons[icon]];
		if (!Icon) {
			logger.warn(`Unknown toolbar icon: ${icon}`);
			return null;
		}
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Icon, null);
	};
}));
//#endregion
//#region src/toolbar/utils/get-selected.ts
var getSelectedItem;
var init_get_selected = __esmMin((() => {
	getSelectedItem = ({ currentValue, items }) => {
		return items.find((item) => item.value === currentValue && item.type !== "reset");
	};
}));
//#endregion
//#region src/toolbar/constants.ts
var TOOLBAR_ID;
var init_constants = __esmMin((() => {
	TOOLBAR_ID = "toolbar";
}));
//#endregion
//#region src/toolbar/utils/register-shortcuts.ts
var registerShortcuts;
var init_register_shortcuts = __esmMin((() => {
	init_constants();
	registerShortcuts = async (api, id, shortcuts) => {
		if (shortcuts.next) await api.setAddonShortcut(TOOLBAR_ID, {
			label: shortcuts.next.label,
			defaultShortcut: shortcuts.next.keys,
			actionName: `${id}:next`,
			action: shortcuts.next.action
		});
		if (shortcuts.previous) await api.setAddonShortcut(TOOLBAR_ID, {
			label: shortcuts.previous.label,
			defaultShortcut: shortcuts.previous.keys,
			actionName: `${id}:previous`,
			action: shortcuts.previous.action
		});
		if (shortcuts.reset) await api.setAddonShortcut(TOOLBAR_ID, {
			label: shortcuts.reset.label,
			defaultShortcut: shortcuts.reset.keys,
			actionName: `${id}:reset`,
			action: shortcuts.reset.action
		});
	};
}));
//#endregion
//#region src/toolbar/components/ToolbarMenuSelect.tsx
var ToolbarMenuItemContainer, ToolbarMenuItemMiddle, ToolbarMenuSelect;
var init_ToolbarMenuSelect = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_manager_api();
	init_emotion();
	init_ToolbarIcon();
	init_get_selected();
	init_register_shortcuts();
	ToolbarMenuItemContainer = styled("div")({
		width: "100%",
		display: "flex",
		alignItems: "center",
		gap: 8
	});
	ToolbarMenuItemMiddle = styled("div")({ flex: 1 });
	ToolbarMenuSelect = ({ id, name, description, toolbar: { icon: _icon, items, title: _title, preventDynamicIcon, dynamicTitle = true, shortcuts } }) => {
		const api = useStorybookApi();
		const [globals, updateGlobals, storyGlobals] = useGlobals();
		const currentValue = globals[id];
		const isOverridden = id in storyGlobals;
		let icon = _icon;
		let title = _title;
		if (!preventDynamicIcon) icon = getSelectedItem({
			currentValue,
			items
		})?.icon || icon;
		if (dynamicTitle) title = getSelectedItem({
			currentValue,
			items
		})?.title || title;
		if (!title && !icon) console.warn(`Toolbar '${id}' has no title or icon`);
		const resetItem = items.find((item) => item.type === "reset");
		const resetLabel = resetItem?.title;
		const options = _storybook_global_react_default.useMemo(() => items.filter((item) => item.type !== "reset").map((item) => {
			const itemTitle = item.title ?? item.value ?? "Untitled";
			const iconComponent = !item.hideIcon && item.icon ? /* @__PURE__ */ _storybook_global_react_default.createElement(ToolbarIcon, { icon: item.icon }) : void 0;
			if (item.right) return {
				title: itemTitle,
				value: item.value,
				children: /* @__PURE__ */ _storybook_global_react_default.createElement(ToolbarMenuItemContainer, null, iconComponent, /* @__PURE__ */ _storybook_global_react_default.createElement(ToolbarMenuItemMiddle, null, item.title ?? item.value), item.right)
			};
			else return {
				title: itemTitle,
				value: item.value,
				icon: iconComponent
			};
		}), [items]);
		_storybook_global_react_default.useEffect(() => {
			if (shortcuts) {
				const length = options.length;
				registerShortcuts(api, id, {
					next: {
						...shortcuts.next,
						action: () => {
							const idx = options.findIndex((i) => i.value === globals[id]);
							const nextIdx = idx < 0 ? 0 : (idx + 1) % length;
							updateGlobals({ [id]: options[nextIdx].value });
						}
					},
					previous: {
						...shortcuts.previous,
						action: () => {
							const idx = options.findIndex((i) => i.value === globals[id]);
							const previousIdx = idx < 0 ? length - 1 : (idx + length - 1) % length;
							updateGlobals({ [id]: options[previousIdx].value });
						}
					},
					reset: {
						...shortcuts.reset,
						action: () => {
							updateGlobals({ [id]: void 0 });
						}
					}
				});
			}
		}, [
			api,
			id,
			shortcuts,
			globals,
			options,
			updateGlobals
		]);
		const ariaLabel = description || title || name || id;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Select, {
			defaultOptions: [currentValue],
			options,
			disabled: isOverridden,
			ariaLabel,
			tooltip: ariaLabel,
			resetLabel,
			onReset: resetItem ? () => updateGlobals({ [id]: resetItem?.value }) : void 0,
			onSelect: (selected) => updateGlobals({ [id]: selected }),
			icon: icon && /* @__PURE__ */ _storybook_global_react_default.createElement(ToolbarIcon, { icon }),
			showSelectedOptionTitle: dynamicTitle
		}, title);
	};
}));
//#endregion
//#region src/toolbar/components/ToolbarManager.tsx
var ToolbarManager;
var init_ToolbarManager = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_manager_api();
	init_normalize_toolbar_arg_type();
	init_ToolbarMenuSelect();
	ToolbarManager = () => {
		const globalTypes = useGlobalTypes();
		if (!Object.keys(globalTypes).some((id) => !!globalTypes[id].toolbar)) return null;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Separator, null), Object.keys(globalTypes).map((id) => {
			const normalizedArgType = normalizeArgType(id, globalTypes[id]);
			return normalizedArgType && /* @__PURE__ */ _storybook_global_react_default.createElement(ToolbarMenuSelect, {
				key: id,
				id,
				...normalizedArgType
			});
		}));
	};
}));
//#endregion
//#region src/shared/review/routes.ts
var REVIEW_COLLECTION_QUERY_PARAM, isReviewSummaryPath, isReviewCollectionStoryRoute;
var init_routes = __esmMin((() => {
	REVIEW_COLLECTION_QUERY_PARAM = "collection";
	isReviewSummaryPath = (path) => path === "/review/" || path === "/review";
	isReviewCollectionStoryRoute = (path, customQueryParams) => !!path && path.startsWith("/story/") && customQueryParams?.["collection"] !== void 0;
}));
//#endregion
//#region src/shared/useCopyButton.ts
function useCopyButton({ children = "Copy", childrenOnCopy = "Copied!", content, onCopy, ariaLabel = false, ariaLabelOnCopy = false, duration = 3e3 }) {
	const [copied, setCopied] = useState(false);
	const timerRef = useRef(null);
	useEffect(() => () => {
		if (timerRef.current) clearTimeout(timerRef.current);
	}, []);
	const handleClick = useCallback((e) => {
		if (timerRef.current) clearTimeout(timerRef.current);
		const announcement = typeof ariaLabelOnCopy === "string" ? ariaLabelOnCopy : "Copied to clipboard";
		navigator.clipboard?.writeText(content).then(() => {
			onCopy?.(e);
			setCopied(true);
			$a46cf152bb926da5$export$a9b970dcc4ae71a9(announcement, "polite");
			timerRef.current = setTimeout(() => {
				setCopied(false);
				$a46cf152bb926da5$export$d10ae4f68404609a("polite");
				timerRef.current = null;
			}, duration);
		});
	}, [
		content,
		onCopy,
		ariaLabelOnCopy,
		duration
	]);
	return {
		children: copied ? childrenOnCopy : children,
		buttonProps: useMemo(() => ({
			onClick: handleClick,
			ariaLabel: copied ? ariaLabelOnCopy : ariaLabel
		}), [
			handleClick,
			copied,
			ariaLabelOnCopy,
			ariaLabel
		])
	};
}
var init_useCopyButton = __esmMin((() => {
	init__storybook_global_react();
	init_import();
}));
//#endregion
//#region src/shared/review/events.ts
var REVIEW_NAMESPACE, REVIEW_EVENTS;
var init_events = __esmMin((() => {
	REVIEW_NAMESPACE = "storybook/review";
	REVIEW_EVENTS = { PAGEVIEW: `${REVIEW_NAMESPACE}/pageview` };
}));
//#endregion
//#region src/shared/review/index.ts
var init_review = __esmMin((() => {
	init_events();
	init_routes();
})), IFRAME_RESIZE_REQUEST_CONTEXT, isPositiveFinite, parseViewport, parseIframeResizeMessage, hasFixedViewportDimensions, iframeResizeViewportsEqual, iframeResizeDimensionsEqual;
var init_iframe_resize = __esmMin((() => {
	init_constants$1();
	IFRAME_RESIZE_REQUEST_CONTEXT = "iframe.resize.request";
	isPositiveFinite = (value) => typeof value === "number" && Number.isFinite(value) && value > 0;
	parseViewport = (value) => {
		if (!value || typeof value !== "object") return;
		const viewport = value;
		if (typeof viewport.name !== "string" || typeof viewport.value !== "string") return;
		const parsed = {
			name: viewport.name,
			value: viewport.value
		};
		if (viewport.width !== void 0) {
			if (!isPositiveFinite(viewport.width)) return;
			parsed.width = viewport.width;
		}
		if (viewport.height !== void 0) {
			if (!isPositiveFinite(viewport.height)) return;
			parsed.height = viewport.height;
		}
		return parsed;
	};
	parseIframeResizeMessage = (data) => {
		try {
			const parsed = typeof data === "string" ? JSON.parse(data) : data;
			if (parsed?.context !== "iframe.resize") return null;
			if (!isPositiveFinite(parsed.width) || !isPositiveFinite(parsed.height)) return null;
			const viewport = parseViewport(parsed.viewport);
			if (parsed.viewport !== void 0 && viewport === void 0) return null;
			return {
				width: parsed.width,
				height: parsed.height,
				...viewport ? { viewport } : {}
			};
		} catch {
			return null;
		}
	};
	hasFixedViewportDimensions = (viewport) => !!viewport && viewport.value !== "100pct-100pct" && typeof viewport.width === "number" && viewport.width > 0 && typeof viewport.height === "number" && viewport.height > 0;
	iframeResizeViewportsEqual = (left, right) => {
		if (left === right) return true;
		if (!left || !right) return !left && !right;
		return left.name === right.name && left.value === right.value && left.width === right.width && left.height === right.height;
	};
	iframeResizeDimensionsEqual = (left, right) => {
		if (!left) return false;
		if (left.width !== right.width || left.height !== right.height) return false;
		return iframeResizeViewportsEqual(left.viewport, right.viewport);
	};
}));
//#endregion
//#region src/storybook-error.ts
function parseErrorCode({ code, category }) {
	return `SB_${category}_${String(code).padStart(4, "0")}`;
}
function appendErrorRef(url) {
	if (/^(?!.*storybook\.js\.org)|[?&]ref=error\b/.test(url)) return url;
	try {
		const urlObj = new URL(url);
		urlObj.searchParams.set("ref", "error");
		return urlObj.toString();
	} catch {
		return url;
	}
}
var StorybookError;
var init_storybook_error = __esmMin((() => {
	StorybookError = class StorybookError extends Error {
		get fullErrorCode() {
			return parseErrorCode({
				code: this.code,
				category: this.category
			});
		}
		/** Overrides the default `Error.name` property in the format: SB_<CATEGORY>_<CODE>. */
		get name() {
			const errorName = this._name || this.constructor.name;
			return `${this.fullErrorCode} (${errorName})`;
		}
		set name(name) {
			this._name = name;
		}
		constructor(props) {
			super(StorybookError.getFullMessage(props), props.cause === void 0 ? void 0 : { cause: props.cause });
			this.data = {};
			this.fromStorybook = true;
			this.isHandledError = false;
			this.subErrors = [];
			this.category = props.category;
			this.documentation = props.documentation ?? false;
			this.code = props.code;
			this.isHandledError = props.isHandledError ?? false;
			this.agentFacing = props.agentFacing ?? false;
			this.name = props.name;
			this.subErrors = props.subErrors ?? [];
		}
		/** Generates the error message along with additional documentation link (if applicable). */
		static getFullMessage({ documentation, code, category, message }) {
			let page;
			if (documentation === true) page = `https://storybook.js.org/error/${parseErrorCode({
				code,
				category
			})}?ref=error`;
			else if (typeof documentation === "string") page = appendErrorRef(documentation);
			else if (Array.isArray(documentation)) page = `\n${documentation.map((doc) => `\t- ${appendErrorRef(doc)}`).join("\n")}`;
			return `${message}${page != null ? `\n\nMore info: ${page}\n` : ""}`;
		}
	};
}));
//#endregion
//#region src/preview-errors.ts
var StatusTypeIdMismatchError$1;
var init_preview_errors = __esmMin((() => {
	init_storybook_error();
	StatusTypeIdMismatchError$1 = class extends StorybookError {
		constructor(data) {
			super({
				name: "StatusTypeIdMismatchError",
				category: "PREVIEW_API",
				code: 16,
				message: `Status has typeId "${data.status.typeId}" but was added to store with typeId "${data.typeId}". Full status: ${JSON.stringify(data.status, null, 2)}`
			});
			this.data = data;
		}
	};
}));
//#endregion
//#region src/server-errors.ts
var StatusTypeIdMismatchError;
var init_server_errors = __esmMin((() => {
	init_storybook_error();
	StatusTypeIdMismatchError = class extends StorybookError {
		constructor(data) {
			super({
				name: "StatusTypeIdMismatchError",
				category: "CORE-SERVER",
				code: 16,
				message: `Status has typeId "${data.status.typeId}" but was added to store with typeId "${data.typeId}". Full status: ${JSON.stringify(data.status, null, 2)}`
			});
			this.data = data;
		}
	};
}));
//#endregion
//#region src/shared/status-store/index.ts
function countStatusesByValue(allStatuses) {
	const counts = {};
	for (const statusByTypeId of Object.values(allStatuses)) for (const status of Object.values(statusByTypeId)) counts[status.value] = (counts[status.value] ?? 0) + 1;
	return counts;
}
function createStatusStore({ universalStatusStore, useUniversalStore, environment }) {
	const fullStatusStore = {
		getAll() {
			return universalStatusStore.getState();
		},
		set(statuses) {
			universalStatusStore.setState((state) => {
				const newState = { ...state };
				for (const status of statuses) {
					const { storyId, typeId } = status;
					newState[storyId] = {
						...newState[storyId] ?? {},
						[typeId]: status
					};
				}
				return newState;
			});
		},
		onAllStatusChange(listener) {
			return universalStatusStore.onStateChange((state, prevState) => {
				listener(state, prevState);
			});
		},
		onSelect(listener) {
			return universalStatusStore.subscribe(StatusStoreEventType.SELECT, (event) => {
				listener(event.payload);
			});
		},
		selectStatuses: (statuses) => {
			universalStatusStore.send({
				type: StatusStoreEventType.SELECT,
				payload: statuses
			});
		},
		unset(storyIds) {
			if (!storyIds) {
				universalStatusStore.setState({});
				return;
			}
			universalStatusStore.setState((state) => {
				const newState = { ...state };
				for (const storyId of storyIds) delete newState[storyId];
				return newState;
			});
		},
		typeId: void 0
	};
	const getStatusStoreByTypeId = (typeId) => ({
		getAll: fullStatusStore.getAll,
		set(statuses) {
			universalStatusStore.setState((state) => {
				const newState = { ...state };
				for (const status of statuses) {
					const { storyId } = status;
					if (status.typeId !== typeId) switch (environment) {
						case "server": throw new StatusTypeIdMismatchError({
							status,
							typeId
						});
						case "manager": throw new StatusTypeIdMismatchError$2({
							status,
							typeId
						});
						default: throw new StatusTypeIdMismatchError$1({
							status,
							typeId
						});
					}
					newState[storyId] = {
						...newState[storyId] ?? {},
						[typeId]: status
					};
				}
				return newState;
			});
		},
		onAllStatusChange: fullStatusStore.onAllStatusChange,
		onSelect(listener) {
			return universalStatusStore.subscribe(StatusStoreEventType.SELECT, (event) => {
				if (event.payload.some((status) => status.typeId === typeId)) listener(event.payload);
			});
		},
		unset(storyIds) {
			universalStatusStore.setState((state) => {
				const newState = { ...state };
				for (const storyId in newState) if (newState[storyId]?.[typeId] && (!storyIds || storyIds?.includes(storyId))) {
					const { [typeId]: omittedStatus, ...storyStatusesWithoutTypeId } = newState[storyId];
					newState[storyId] = storyStatusesWithoutTypeId;
				}
				return newState;
			});
		},
		typeId
	});
	if (!useUniversalStore) return {
		getStatusStoreByTypeId,
		fullStatusStore,
		universalStatusStore
	};
	return {
		getStatusStoreByTypeId,
		fullStatusStore,
		universalStatusStore,
		useStatusStore: (selector) => useUniversalStore(universalStatusStore, selector)[0]
	};
}
var statusValueShortName, statusValueDescription, UNIVERSAL_STATUS_STORE_OPTIONS, StatusStoreEventType;
var init_status_store = __esmMin((() => {
	init_manager_errors();
	init_preview_errors();
	init_server_errors();
	statusValueShortName = (value) => {
		if (value === "status-value:affected") return "related";
		return value.slice(13);
	};
	statusValueDescription = (value) => ({
		"status-value:pending": "Stories with pending status",
		"status-value:success": "Stories with passing tests",
		"status-value:new": "Newly added stories",
		"status-value:modified": "Stories closely linked to code changes",
		"status-value:affected": "Stories likely to be affected by code changes",
		"status-value:reviewing": "Stories included in the active review",
		"status-value:warning": "Stories with warnings",
		"status-value:error": "Stories with failing tests",
		"status-value:unknown": "Stories with unknown status"
	})[value];
	UNIVERSAL_STATUS_STORE_OPTIONS = {
		id: "storybook/status",
		leader: true,
		initialState: {}
	};
	StatusStoreEventType = { SELECT: "select" };
}));
//#endregion
//#region src/shared/utils/ai-prompts.ts
function getAiSetupPrompt(executor = DEFAULT_STORYBOOK_EXECUTOR) {
	return `Run \`${executor} skills setup\` and follow its instructions precisely.`;
}
var DEFAULT_STORYBOOK_EXECUTOR;
var init_ai_prompts = __esmMin((() => {
	DEFAULT_STORYBOOK_EXECUTOR = "npx storybook";
}));
//#endregion
//#region src/shared/checklist-store/checklistData.tsx
var CodeWrapper, CodeSnippet, isExample, subscribeToIndex, checklistData;
var init_checklistData = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_core_events();
	init_types();
	init_manager_api();
	init_emotion();
	init_icons();
	init_constants$2();
	init_constants$3();
	init_constants$4();
	init_AddonVitestService_constants();
	init_shared();
	init_TourGuide();
	init_useLocation();
	init_ai_prompts();
	CodeWrapper = styled.div(({ theme }) => ({
		alignSelf: "stretch",
		background: theme.background.content,
		borderRadius: theme.appBorderRadius,
		margin: "5px 0",
		padding: 10,
		fontSize: theme.typography.size.s1,
		".linenumber": { opacity: .5 }
	}));
	CodeSnippet = (props) => /* @__PURE__ */ _storybook_global_react_default.createElement(ThemeProvider, { theme: convert(themes.dark) }, /* @__PURE__ */ _storybook_global_react_default.createElement(CodeWrapper, null, /* @__PURE__ */ _storybook_global_react_default.createElement(SyntaxHighlighter, props)));
	isExample = (id) => id.startsWith("example-") || id.startsWith("configure-your-project--");
	subscribeToIndex = (condition) => ({ api, done }) => {
		const check = () => condition(Object.entries(api.getIndex()?.entries || {}).reduce((acc, [id, entry]) => isExample(entry.id) ? acc : Object.assign(acc, { [id]: entry }), {}));
		if (check()) done();
		else {
			api.once(PREVIEW_INITIALIZED, () => check() && done());
			return api.on(STORY_INDEX_INVALIDATED, () => check() && done());
		}
	};
	checklistData = { sections: [
		{
			id: "basics",
			title: "Storybook basics",
			items: [
				{
					id: "aiSetup",
					label: "Set up with AI",
					icon: WandIcon,
					available: ({ storeState }) => {
						return !!storeState.aiOptIn && storeState.items.aiSetup?.status !== "done";
					},
					criteria: "skills setup command has not been run yet",
					showOnGuidePage: false,
					action: {
						label: "Copy prompt",
						copyContent: getAiSetupPrompt(),
						onClick: ({ api }) => {
							api.emit(AI_PROMPT_NUDGE, {
								id: "setup",
								origin: "onboarding-checklist-side"
							});
						}
					}
				},
				{
					id: "guidedTour",
					label: "Take the guided tour",
					available: ({ index }) => !!index && "example-button--primary" in index && !!globalThis?.FEATURES?.controls && addons.experimental_getRegisteredAddons().includes("storybook/onboarding"),
					criteria: "Guided tour is completed",
					subscribe: ({ api, accept }) => api.on(ADDON_ONBOARDING_CHANNEL, ({ step, type }) => {
						if (type !== "dismiss" && ["6:IntentSurvey", "7:FinishedOnboarding"].includes(step)) accept();
					}),
					action: {
						label: "Start",
						onClick: ({ api }) => {
							api.toggleNav(true);
							const path = api.getUrlState().path || "";
							if (path.startsWith("/story/")) document.location.href = `/?path=${path}&onboarding=true`;
							else document.location.href = `/?onboarding=true`;
						}
					}
				},
				{
					id: "onboardingSurvey",
					label: "Complete the onboarding survey",
					available: () => addons.experimental_getRegisteredAddons().includes(ADDON_ID$1),
					afterCompletion: "immutable",
					criteria: "Onboarding survey is completed",
					subscribe: ({ api, accept }) => api.on(ADDON_ONBOARDING_CHANNEL, ({ type }) => type === "survey" && accept()),
					action: {
						label: "Open",
						onClick: ({ api }) => {
							const path = api.getUrlState().path || "";
							document.location.href = `/?path=${path}&onboarding=survey`;
						}
					}
				},
				{
					id: "renderComponent",
					label: "Render your first component",
					criteria: "A story finished rendering successfully",
					subscribe: ({ api, done }) => api.on(STORY_FINISHED, ({ storyId, status }) => status === "success" && !isExample(storyId) && done()),
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Storybook renders your components in isolation, using stories. That allows you to work on the bit of UI you need, without worrying about the rest of the app."), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Rendering your components can often require", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "writing-stories/decorators",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank"
					}, "setting up surrounding context in decorators"), " ", "or", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "configure/styling-and-css",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank"
					}, "applying global styles"), ". Once you've got it working for one component, you're ready to make Storybook the home for all of your UI."), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Stories are written in CSF, a format specifically designed to help with UI development. Here's an example:"), /* @__PURE__ */ _storybook_global_react_default.createElement(CodeSnippet, { language: "typescript" }, `// Button.stories.ts
// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta = {
  // 👇 The component you're working on
  component: Button,
} satisfies Meta<typeof Button>;
 
export default meta;
// 👇 Type helper to reduce boilerplate 
type Story = StoryObj<typeof meta>;

// 👇 A story named Primary that renders \`<Button primary label="Button" />\`
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};`), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "writing-stories",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank",
						withArrow: true
					}, "Learn more about stories")))
				},
				{
					id: "moreComponents",
					label: "Add 5 components",
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Storybook gets better as you add more components. Start with the easy ones, like Button or Avatar, and work your way up to more complex components, like Select, Autocomplete, or even full pages."), /* @__PURE__ */ _storybook_global_react_default.createElement("img", {
						src: api.getDocsUrl({
							asset: "onboarding/sidebar-components.png",
							ref: "guide"
						}),
						alt: "Components in the sidebar"
					}), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "get-started/whats-a-story#create-a-new-story",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank",
						withArrow: true
					}, "Learn how to add components without writing any code"))),
					criteria: "At least 5 components exist in the index",
					subscribe: subscribeToIndex((entries) => {
						const stories = Object.values(entries).filter((entry) => entry.type === "story");
						return new Set(stories.map(({ title }) => title)).size >= 5;
					})
				},
				{
					id: "moreStories",
					label: "Add 20 stories",
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "More stories for your components means better documentation and more test coverage."), /* @__PURE__ */ _storybook_global_react_default.createElement("img", {
						src: api.getDocsUrl({
							asset: "onboarding/sidebar-many-stories.png",
							ref: "guide"
						}),
						alt: "Stories in the sidebar"
					}), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "essentials/controls#creating-and-editing-stories-from-controls",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank",
						withArrow: true
					}, "Learn how to use Controls to add stories without writing any code"))),
					criteria: "At least 20 stories exist in the index",
					subscribe: subscribeToIndex((entries) => {
						return Object.values(entries).filter((entry) => entry.type === "story").length >= 20;
					})
				},
				{
					id: "whatsNewStorybook10",
					label: "See what's new",
					criteria: "What's New page is opened",
					action: {
						label: "Go",
						onClick: ({ api }) => api.navigate("/settings/whats-new")
					},
					subscribe: ({ accept }) => LocationMonitor.subscribe((l) => l.search.endsWith("/settings/whats-new") && accept())
				}
			]
		},
		{
			id: "development",
			title: "Development",
			items: [
				{
					id: "controls",
					label: "Change a story with Controls",
					available: () => !!globalThis?.FEATURES?.controls,
					criteria: "Story args are updated",
					subscribe: ({ api, done }) => api.on(STORY_ARGS_UPDATED, done),
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "When you change the value of one of the inputs in the Controls table, the story automatically updates to reflect that change. It's a great way to explore how a component handles various inputs."), /* @__PURE__ */ _storybook_global_react_default.createElement("img", {
						src: api.getDocsUrl({
							asset: "api/doc-block-controls.png",
							ref: "guide"
						}),
						alt: "Screenshot of Controls block"
					}), /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "Take it further"), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Read the", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "essentials/controls",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank"
					}, "Controls documentation"), " ", "to learn:"), /* @__PURE__ */ _storybook_global_react_default.createElement("ul", null, /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to use the Controls panel to edit or save a new story"), /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to configure the table")))
				},
				{
					id: "viewports",
					label: "Check responsiveness with Viewports",
					available: () => !!globalThis?.FEATURES?.viewport,
					criteria: "Viewport global is updated",
					subscribe: ({ api, done }) => api.on(UPDATE_GLOBALS, ({ globals }) => globals?.viewport && done()),
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Many UI components need to be responsive to the viewport size. Storybook has built-in support for previewing stories in various device sizes."), /* @__PURE__ */ _storybook_global_react_default.createElement("img", {
						src: api.getDocsUrl({
							asset: "onboarding/viewports-menu.png",
							ref: "guide"
						}),
						alt: "Screenshot of Viewports menu"
					}), /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "Take it further"), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Read the", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "essentials/viewport",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank"
					}, "Viewports documentation"), " ", "to learn:"), /* @__PURE__ */ _storybook_global_react_default.createElement("ul", null, /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to configure which viewports are available"), /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to force a story to ", /* @__PURE__ */ _storybook_global_react_default.createElement("em", null, "always"), " render in a specific viewport")))
				},
				{
					id: "organizeStories",
					label: "Group your components",
					criteria: "A root node exists in the index",
					subscribe: subscribeToIndex((entries) => Object.values(entries).some(({ title }) => title.includes("/"))),
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "It's helpful for projects to organize their sidebar into groups. We're big fans of Atomic Design (atoms, molecules, organisms, pages), but we've also seen organization by domain (profile, billing, dashboard, etc). Being organized helps everyone use your Storybook more effectively."), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "You can create a section like so:"), /* @__PURE__ */ _storybook_global_react_default.createElement(CodeSnippet, { language: "typescript" }, `// Button.stories.js

export default {
  component: Button,
-  title: 'Button', // You may not have this
+  title: 'Atoms/Button',
}`), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Which would look like:"), /* @__PURE__ */ _storybook_global_react_default.createElement("img", {
						src: api.getDocsUrl({
							asset: "onboarding/sidebar-with-groups.png",
							ref: "guide"
						}),
						alt: "Grouped components in the sidebar"
					}), /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "Take it further"), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Read the", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "writing-stories/naming-components-and-hierarchy",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank"
					}, "story organization documentation"), " ", "to learn:"), /* @__PURE__ */ _storybook_global_react_default.createElement("ul", null, /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "The full hierarchy available"), /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to configure the sorting of your stories")))
				}
			]
		},
		{
			id: "share",
			title: "Share",
			items: [{
				id: "shareStorybook",
				label: "Share your Storybook for feedback",
				available: () => addons.experimental_getRegisteredAddons(Addon_TypesEnum.TOOLEXTRA).includes("chromaui/addon-visual-tests/share-tool"),
				criteria: "User has shared their Storybook",
				subscribe: ({ api, done }) => {
					const SHARE_PROGRESS_KEY = "chromaui/addon-visual-tests/shareProgress";
					return api.on("experimental_useSharedState_setValue", (key, value) => {
						if (key === SHARE_PROGRESS_KEY && value?.status === "complete") done();
					});
				},
				action: {
					label: "Share",
					onClick: () => document.getElementById("chromatic-share-button")?.click()
				},
				content: () => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Share your Storybook with your team in one click using Chromatic. Click the", " ", /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "Share"), " button in the toolbar to publish and get a shareable link."), /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "Take it further"), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Read the", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
					href: "https://www.chromatic.com/docs/sharing",
					target: "_blank",
					withArrow: true
				}, "sharing documentation")))
			}, {
				id: "publishStorybook",
				label: "Publish your Storybook for feedback",
				available: () => !addons.experimental_getRegisteredAddons(Addon_TypesEnum.TOOLEXTRA).includes("chromaui/addon-visual-tests/share-tool"),
				criteria: "User has published their Storybook",
				content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Publishing your Storybook is easy and unlocks super clear review cycles and other collaborative workflows."), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Run ", /* @__PURE__ */ _storybook_global_react_default.createElement("code", null, "npx storybook build"), " in CI and deploy it using services like", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
					href: "https://chromatic.com",
					target: "_blank"
				}, "Chromatic"), ",", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
					href: "https://vercel.com",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "Vercel"), ", or", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
					href: "https://www.netlify.com",
					target: "_blank",
					rel: "noopener noreferrer"
				}, "Netlify"), "."), /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "Take it further"), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Read the", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
					href: api.getDocsUrl({
						subpath: "sharing/publish-storybook",
						renderer: true,
						ref: "guide"
					}),
					target: "_blank",
					withArrow: true
				}, "publishing documentation")))
			}]
		},
		{
			id: "testing",
			title: "Testing",
			items: [
				{
					id: "installVitest",
					label: "Install Vitest addon",
					afterCompletion: "unavailable",
					available: () => !!globalThis.STORYBOOK_FRAMEWORK && SUPPORTED_FRAMEWORKS.includes(globalThis.STORYBOOK_FRAMEWORK),
					criteria: "@storybook/addon-vitest registered in .storybook/main.js|ts",
					subscribe: ({ done }) => {
						if (addons.experimental_getRegisteredAddons().includes("storybook/test")) done();
					},
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Run this command to install the Vitest addon, enabling you to run component tests on your stories inside Storybook’s UI:"), /* @__PURE__ */ _storybook_global_react_default.createElement(CodeSnippet, { language: "bash" }, `npx storybook add @storybook/addon-vitest`), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, /* @__PURE__ */ _storybook_global_react_default.createElement("em", null, "Restart your Storybook after installing the addon.")), /* @__PURE__ */ _storybook_global_react_default.createElement("img", {
						src: api.getDocsUrl({
							asset: "writing-tests/testing-ui-overview.png",
							ref: "guide"
						}),
						alt: "Storybook app with story status indicators, testing widget, and addon panel annotated"
					}), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "writing-tests/integrations/vitest-addon",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank",
						withArrow: true
					}, "Learn more about the Vitest addon")))
				},
				{
					id: "runTests",
					after: ["installVitest"],
					label: "Test your components",
					criteria: "Component tests are run from the test widget in the sidebar",
					subscribe: ({ done }) => internal_universalTestProviderStore.onStateChange((state) => {
						if (state["storybook/test"] === "test-provider-state:running") {
							TourGuide.render(null);
							done();
						}
					}),
					action: {
						label: "Start",
						onClick: ({ api }) => {
							api.toggleNav(true);
							TourGuide.render({ steps: [{
								title: "Testing widget",
								content: "Run tests right from your Storybook sidebar using the testing widget.",
								placement: "right-end",
								target: "#storybook-testing-module",
								highlight: "#storybook-testing-module",
								onNext: ({ next }) => {
									const toggle = document.getElementById("testing-module-collapse-toggle");
									if (toggle?.getAttribute("aria-label") === "Expand testing module") {
										toggle.click();
										setTimeout(next, 300);
									} else next();
								}
							}, {
								title: "Start a test run",
								content: "Start a test run at the click of a button using Vitest.",
								placement: "right",
								target: "[data-module-id=\"storybook/test/test-provider\"] button[aria-label=\"Start test run\"]",
								highlight: `[data-module-id="storybook/test/test-provider"] button[aria-label="Start test run"]`,
								hideNextButton: true
							}] });
						}
					},
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Stories make great test cases. You can quickly test all of your stories directly from the test widget, at the bottom of the sidebar."), /* @__PURE__ */ _storybook_global_react_default.createElement("img", {
						src: api.getDocsUrl({
							asset: "onboarding/test-widget-with-failures.png",
							ref: "guide"
						}),
						alt: "Test widget showing test failures"
					}), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Use the menu on a story or component to see details about a test failure or run tests for just that selection."), /* @__PURE__ */ _storybook_global_react_default.createElement("img", {
						src: api.getDocsUrl({
							asset: "writing-tests/context-menu.png",
							ref: "guide"
						}),
						alt: "Screenshot of story sidebar item with open menu"
					}), /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "Take it further"), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Read the", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "writing-tests#component-tests",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank"
					}, "component testing documentation"), " ", "to learn:"), /* @__PURE__ */ _storybook_global_react_default.createElement("ul", null, /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "About helpful features, like watch mode and sidebar filtering"), /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to run tests via CLI and in CI"), /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "About other capabilities, like accessibility checks and code coverage reporting")))
				},
				{
					id: "writeInteractions",
					label: "Test functionality with interactions",
					available: () => !!globalThis?.FEATURES?.interactions,
					criteria: "At least one story with a play or test function",
					subscribe: subscribeToIndex((entries) => Object.values(entries).some((entry) => entry.tags?.includes(Tag$1.PLAY_FN) || entry.tags?.includes(Tag$1.TEST_FN))),
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "When you need to test non-visual or particularly complex behavior of a component, add a play function."), /* @__PURE__ */ _storybook_global_react_default.createElement(CodeSnippet, { language: "typescript" }, `// Button.stories.ts
// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from '@storybook/your-framework';
import { expect, fn } from 'storybook/test';
 
import { Button } from './Button';
 
const meta = {
  component: Button,
  args: {
    // 👇 Provide a mock function to spy on
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;
 
export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Button',
  },
  play: async function({ args, canvas, userEvent }) {
    const button = canvas.getByRole('button', { name: /button/i });
		
    // 👇 Simulate behavior
    await userEvent.click(button);
    
    // 👇 Make assertions
    await expect(button).toHaveAttribute('aria-disabled', 'true');
    await expect(args.onClick).not.toHaveBeenCalled();
  }
};`), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "You can interact with and debug each step defined in a play function within the Interactions panel."), /* @__PURE__ */ _storybook_global_react_default.createElement("img", {
						src: api.getDocsUrl({
							asset: "writing-tests/interaction-test-pass.png",
							ref: "guide"
						}),
						alt: "Storybook with a LoginForm component and passing interactions in the Interactions panel"
					}), /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "Take it further"), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Read the", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "writing-tests/interaction-testing",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank"
					}, "interaction testing documentation"), " ", "to learn:"), /* @__PURE__ */ _storybook_global_react_default.createElement("ul", null, /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "The full ", /* @__PURE__ */ _storybook_global_react_default.createElement("code", null, "play"), " function API"), /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to run code before and after tests"), /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to group interactions into steps")))
				},
				{
					id: "installA11y",
					label: "Install Accessibility addon",
					afterCompletion: "unavailable",
					criteria: "@storybook/addon-a11y registered in .storybook/main.js|ts",
					subscribe: ({ done }) => {
						if (addons.experimental_getRegisteredAddons().includes("storybook/a11y")) done();
					},
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Accessibility tests help ensure your UI is usable by everyone, no matter their ability."), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "If you are not yet using the accessibility addon, run this command to install and set it up, enabling you to run accessibility checks alongside your component tests:"), /* @__PURE__ */ _storybook_global_react_default.createElement(CodeSnippet, { language: "bash" }, `npx storybook add @storybook/addon-a11y`), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, /* @__PURE__ */ _storybook_global_react_default.createElement("em", null, "Restart your Storybook after installing the addon.")), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "writing-tests/accessibility-testing",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank",
						withArrow: true
					}, "Learn more about the Accessibility addon")))
				},
				{
					id: "accessibilityTests",
					after: ["installA11y"],
					label: "Run accessibility tests",
					criteria: "Accessibility tests are run from the test widget in the sidebar",
					subscribe: ({ api, done }) => api.on(STORYBOOK_ADDON_TEST_CHANNEL, ({ type, payload }) => type === "test-run-completed" && payload.config.a11y && done()),
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Expand the test widget, check the Accessibility checkbox, and click the Run component tests button."), /* @__PURE__ */ _storybook_global_react_default.createElement("img", {
						src: api.getDocsUrl({
							asset: "writing-tests/test-widget-a11y-enabled.png",
							ref: "guide"
						}),
						alt: "Testing widget with accessibility activated"
					}), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "If there are any failures, you can use the Accessibility panel to debug any violations."), /* @__PURE__ */ _storybook_global_react_default.createElement("img", {
						src: api.getDocsUrl({
							asset: "writing-tests/addon-a11y-debug-violations.png",
							ref: "guide"
						}),
						alt: "Storybook app with accessibility panel open, showing violations and an interactive popover on the violating elements in the preview"
					}), /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "Take it further"), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Read the", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "writing-tests/accessibility-testing",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank"
					}, "accessibility testing documentation"), " ", "to learn:"), /* @__PURE__ */ _storybook_global_react_default.createElement("ul", null, /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "The recommended workflow"), /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to run accessibility tests via CLI and in CI"), /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to configure accessibility checks")))
				},
				{
					id: "installChromatic",
					label: "Install Visual Tests addon",
					afterCompletion: "unavailable",
					available: () => true,
					criteria: "@chromatic-com/storybook registered in .storybook/main.js|ts",
					subscribe: ({ done }) => {
						if (addons.experimental_getRegisteredAddons().includes("chromaui/addon-visual-tests")) done();
					},
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Visual tests verify the appearance of your UI components."), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "If you are not yet using the visual tests addon, run this command to install and set it up, enabling you to run visual tests on your stories (this requires a free Chromatic account):"), /* @__PURE__ */ _storybook_global_react_default.createElement(CodeSnippet, { language: "bash" }, `npx storybook add @chromatic-com/storybook`), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, /* @__PURE__ */ _storybook_global_react_default.createElement("em", null, "Restart your Storybook after installing the addon.")), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "writing-tests/visual-testing",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank",
						withArrow: true
					}, "Learn more about the Visual Tests addon")))
				},
				{
					id: "visualTests",
					after: ["installChromatic"],
					label: "Run visual tests",
					criteria: "Visual tests are run from the test widget in the sidebar or the Visual Tests panel",
					subscribe: ({ api, done }) => api.on("chromaui/addon-visual-tests/startBuild", done),
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Expand the test widget and click the Run visual tests button."), /* @__PURE__ */ _storybook_global_react_default.createElement("img", {
						src: api.getDocsUrl({
							asset: "writing-tests/test-widget-expanded-with-vta.png",
							ref: "guide"
						}),
						alt: "Expanded testing widget, showing the Visual tests section"
					}), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "You can use the Visual tests panel to verify the resulting diffs as either an unexpected change which needs fixed or an expected change which can then be accepted and become the new baseline."), /* @__PURE__ */ _storybook_global_react_default.createElement("img", {
						src: api.getDocsUrl({
							asset: "writing-tests/vta-run-from-panel.png",
							ref: "guide"
						}),
						alt: "Visual tests addon panel showing a diff from the baseline"
					}), /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "Take it further"), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Read the", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "writing-tests/visual-testing",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank"
					}, "visual testing documentation"), " ", "to learn:"), /* @__PURE__ */ _storybook_global_react_default.createElement("ul", null, /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to automate your visual tests in CI")))
				},
				{
					id: "coverage",
					after: ["installVitest"],
					label: "Generate a coverage report",
					criteria: "Generate a coverage report",
					subscribe: ({ api, done }) => api.on(STORYBOOK_ADDON_TEST_CHANNEL, ({ type, payload }) => type === "test-run-completed" && payload.config.coverage && done()),
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Coverage reports show you which code is—and, more importantly—isn't executed while running your component tests. You use it to be sure you're testing the right things."), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "To generate a coverage report, expand the test widget in the sidebar and check the Coverage checkbox. The next time you run component tests, it will generate an interactive report, which you can view by clicking the results summary in the test widget."), /* @__PURE__ */ _storybook_global_react_default.createElement("img", {
						src: api.getDocsUrl({
							asset: "writing-tests/test-widget-coverage-summary.png",
							ref: "guide"
						}),
						alt: "Test widget with coverage summary"
					}), /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "Take it further"), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Read the", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "writing-tests/test-coverage",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank"
					}, "test coverage documentation"), " ", "to learn:"), /* @__PURE__ */ _storybook_global_react_default.createElement("ul", null, /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to automate reporting in CI"), /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to configure the coverage results")))
				},
				{
					id: "ciTests",
					label: "Automate tests in CI",
					criteria: "Have a CI workflow that runs component tests, either with Vitest or Chromatic",
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Automating component tests in CI is the best tool ensuring the quality and reliability of your project."), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "You can automate all of Storybook's tests by using Chromatic or by running the", /* @__PURE__ */ _storybook_global_react_default.createElement("code", null, "vitest --project storybook"), " command in your CI scripts."), /* @__PURE__ */ _storybook_global_react_default.createElement("img", {
						src: api.getDocsUrl({
							asset: "writing-tests/test-ci-workflow-pr-status-checks.png",
							ref: "guide"
						}),
						alt: "GitHub pull request status checks, with a failing \"UI Tests / test\" check"
					}), /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "Take it further"), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Read the", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "writing-tests/in-ci",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank"
					}, "testing in CI documentation"), " ", "to learn:"), /* @__PURE__ */ _storybook_global_react_default.createElement("ul", null, /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to test in your CI platform (GitHub Actions, Circle CI, etc.)"), /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to debug test failures in a published Storybook"), /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to run your other Vitest tests alongside your Storybook tests")))
				}
			]
		},
		{
			id: "document",
			title: "Document",
			items: [
				{
					id: "installDocs",
					label: "Install Docs addon",
					afterCompletion: "unavailable",
					criteria: "@storybook/addon-docs registered in .storybook/main.js|ts",
					subscribe: ({ done }) => {
						if (addons.experimental_getRegisteredAddons().includes("storybook/docs")) done();
					},
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Storybook Docs transforms your Storybook stories into component documentation. Add the Docs addon to your Storybook project to get started:"), /* @__PURE__ */ _storybook_global_react_default.createElement(CodeSnippet, { language: "bash" }, `npx storybook add @storybook/addon-docs`), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, /* @__PURE__ */ _storybook_global_react_default.createElement("em", null, "Restart your Storybook after installing the addon.")), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "writing-docs",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank",
						withArrow: true
					}, "Learn more about Storybook Docs")))
				},
				{
					id: "autodocs",
					after: ["installDocs"],
					label: "Automatically document your components",
					criteria: "At least one component with the autodocs tag applied",
					subscribe: subscribeToIndex((entries) => Object.values(entries).some((entry) => entry.tags?.includes(Tag$1.AUTODOCS))),
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Add the autodocs tag to a component's meta to automatically generate documentation for that component, complete with examples, source code, an API table, and a description."), /* @__PURE__ */ _storybook_global_react_default.createElement(CodeSnippet, { language: "typescript" }, `// Button.stories.js

const meta = {
  component: Button,
  tags: ['autodocs'], // 👈 Add this tag
}
  
export default meta;`), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "That tag can also be applied in ", /* @__PURE__ */ _storybook_global_react_default.createElement("code", null, ".storybook/preview.ts"), ", to generate documentation for ", /* @__PURE__ */ _storybook_global_react_default.createElement("em", null, "all"), " components."), /* @__PURE__ */ _storybook_global_react_default.createElement("img", {
						src: api.getDocsUrl({
							asset: "writing-docs/autodocs.png",
							ref: "guide"
						}),
						alt: "Storybook autodocs page, showing a title, description, primary story, controls table, and additional stories"
					}), /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "Take it further"), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Read the", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "writing-docs/autodocs",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank"
					}, "autodocs documentation"), " ", "to learn:"), /* @__PURE__ */ _storybook_global_react_default.createElement("ul", null, /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to generate a table of contents"), /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to enhance your component documentation with JSDoc comments"), /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to customize the generated page")))
				},
				{
					id: "mdxDocs",
					after: ["installDocs"],
					label: "Custom content with MDX",
					criteria: "At least one MDX page",
					subscribe: subscribeToIndex((entries) => Object.values(entries).some((entry) => entry.type === "docs")),
					content: ({ api }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "You can use MDX (markdown + React components) to provide an introduction to your project, document things like design tokens, or go beyond the automatic documentation for your components."), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "For a start, create an ", /* @__PURE__ */ _storybook_global_react_default.createElement("code", null, "introduction.mdx"), " file and (using markdown and Storybook's", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "writing-docs/doc-blocks",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank"
					}, "doc blocks"), ") write a usage guide for your project."), /* @__PURE__ */ _storybook_global_react_default.createElement(CodeSnippet, { language: "jsx" }, `{ /* introduction.mdx */ }
import { Meta, Title, Subtitle } from '@storybook/addon-docs/blocks';

<Meta title="Get started" />
 
<Title>Get started with My Awesome Project</Title>

<Subtitle>It's really awesome</Subtitle>

My Awesome Project is designed to work with Your Awesome Project seamlessly.
Follow this guide and you'll be ready in no time.

## Install

\`\`\`sh
npm install @my/awesome-project
\`\`\``), /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "Take it further"), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Read the", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
						href: api.getDocsUrl({
							subpath: "writing-docs/mdx",
							renderer: true,
							ref: "guide"
						}),
						target: "_blank"
					}, "MDX documentation"), " ", "to learn:"), /* @__PURE__ */ _storybook_global_react_default.createElement("ul", null, /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to reference stories in your content"), /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "How to import and display markdown files, such as READMEs")))
				}
			]
		}
	] };
}));
//#endregion
//#region src/shared/constants/tags.ts
var Tag, BUILT_IN_FILTERS, USER_TAG_FILTER;
var init_tags = __esmMin((() => {
	Tag = {
		/** Indicates that autodocs should be generated for this component */
		AUTODOCS: "autodocs",
		/** MDX documentation attached to a component's stories file */
		ATTACHED_MDX: "attached-mdx",
		/** Standalone MDX documentation not attached to stories */
		UNATTACHED_MDX: "unattached-mdx",
		/** Story has a play function */
		PLAY_FN: "play-fn",
		/** Story has a test function */
		TEST_FN: "test-fn",
		/** Development environment tag */
		DEV: "dev",
		/** Test environment tag */
		TEST: "test",
		/** Manifest generation tag */
		MANIFEST: "manifest"
	};
	BUILT_IN_FILTERS = {
		_docs: (entry, excluded) => excluded ? entry.type !== "docs" : entry.type === "docs",
		_play: (entry, excluded) => excluded ? entry.type !== "story" || !entry.tags?.includes(Tag.PLAY_FN) : entry.type === "story" && !!entry.tags?.includes(Tag.PLAY_FN),
		_test: (entry, excluded) => excluded ? entry.type !== "story" || entry.subtype !== "test" : entry.type === "story" && entry.subtype === "test"
	};
	USER_TAG_FILTER = (tag) => (entry, excluded) => excluded ? !entry.tags?.includes(tag) : !!entry.tags?.includes(tag);
}));
//#endregion
//#region src/shared/utils/story-index-filters.ts
var getActiveFilterCount;
var init_story_index_filters = __esmMin((() => {
	getActiveFilterCount = ({ includedTagFilters, excludedTagFilters, includedStatusFilters, excludedStatusFilters }) => (includedTagFilters?.length ?? 0) + (excludedTagFilters?.length ?? 0) + (includedStatusFilters?.length ?? 0) + (excludedStatusFilters?.length ?? 0);
}));
//#endregion
//#region src/shared/universal-store/first-party-store-ids.ts
var FIRST_PARTY_STORE_IDS, isFirstPartyStoreId;
var init_first_party_store_ids = __esmMin((() => {
	FIRST_PARTY_STORE_IDS = /* @__PURE__ */ new Set([
		"storybook/status",
		"storybook/test-provider",
		"storybook/checklist",
		"storybook/test"
	]);
	isFirstPartyStoreId = (id) => FIRST_PARTY_STORE_IDS.has(id);
}));
//#endregion
//#region src/shared/universal-store/instances.ts
var instances;
var init_instances = __esmMin((() => {
	instances = /* @__PURE__ */ new Map();
}));
//#endregion
//#region src/shared/universal-store/index.ts
var CHANNEL_EVENT_PREFIX, ProgressState, UniversalStore;
var init_universal_store = __esmMin((() => {
	init_esm();
	init_first_party_store_ids();
	init_instances();
	CHANNEL_EVENT_PREFIX = "UNIVERSAL_STORE:";
	ProgressState = {
		PENDING: "PENDING",
		RESOLVED: "RESOLVED",
		REJECTED: "REJECTED"
	};
	UniversalStore = class UniversalStore {
		static {
			this.ActorType = {
				LEADER: "LEADER",
				FOLLOWER: "FOLLOWER"
			};
		}
		static {
			this.Environment = {
				SERVER: "SERVER",
				MANAGER: "MANAGER",
				PREVIEW: "PREVIEW",
				UNKNOWN: "UNKNOWN",
				MOCK: "MOCK"
			};
		}
		/** The environment this realm was prepared as, or `undefined` before `__prepare`. */
		static get preparedEnvironment() {
			return UniversalStore.preparation.environment;
		}
		static {
			this.InternalEventType = {
				EXISTING_STATE_REQUEST: "__EXISTING_STATE_REQUEST",
				EXISTING_STATE_RESPONSE: "__EXISTING_STATE_RESPONSE",
				SET_STATE: "__SET_STATE",
				LEADER_CREATED: "__LEADER_CREATED",
				FOLLOWER_CREATED: "__FOLLOWER_CREATED"
			};
		}
		static {
			this.Status = {
				UNPREPARED: "UNPREPARED",
				SYNCING: "SYNCING",
				READY: "READY",
				ERROR: "ERROR"
			};
		}
		static {
			this.isInternalConstructing = false;
		}
		static {
			UniversalStore.setupPreparationPromise();
		}
		static setupPreparationPromise() {
			let resolveRef;
			let rejectRef;
			const promise = new Promise((resolve, reject) => {
				resolveRef = (args) => {
					resolve(args);
				};
				rejectRef = (...args) => {
					reject(args);
				};
			});
			UniversalStore.preparation = {
				resolve: resolveRef,
				reject: rejectRef,
				promise
			};
		}
		/** The actor object representing the store instance with a unique ID and a type */
		get actor() {
			return Object.freeze({
				id: this.actorId,
				type: this.actorType,
				environment: this.environment ?? UniversalStore.Environment.UNKNOWN
			});
		}
		/**
		* The current state of the store, that signals both if the store is prepared by Storybook and
		* also - in the case of a follower - if the state has been synced with the leader's state.
		*/
		get status() {
			if (!this.channel || !this.environment) return UniversalStore.Status.UNPREPARED;
			switch (this.syncing?.state) {
				case ProgressState.PENDING:
				case void 0: return UniversalStore.Status.SYNCING;
				case ProgressState.REJECTED: return UniversalStore.Status.ERROR;
				case ProgressState.RESOLVED:
				default: return UniversalStore.Status.READY;
			}
		}
		/**
		* A promise that resolves when the store is fully ready. A leader will be ready when the store
		* has been prepared by Storybook, which is almost instantly.
		*
		* A follower will be ready when the state has been synced with the leader's state. It waits for
		* as long as that takes.
		*/
		untilReady() {
			const preparation = this.channel && this.environment ? Promise.resolve() : UniversalStore.preparation.promise;
			return Promise.all([preparation, this.syncing?.promise]);
		}
		constructor(options, environmentOverrides) {
			this.debugging = false;
			this.listeners = /* @__PURE__ */ new Map([["*", /* @__PURE__ */ new Set()]]);
			this.getState = () => {
				this.debug("getState", { state: this.state });
				return this.state;
			};
			this.subscribe = (eventTypeOrListener, maybeListener) => {
				const subscribesToAllEvents = typeof eventTypeOrListener === "function";
				const eventType = subscribesToAllEvents ? "*" : eventTypeOrListener;
				const listener = subscribesToAllEvents ? eventTypeOrListener : maybeListener;
				this.debug("subscribe", {
					eventType,
					listener
				});
				if (!listener) throw new TypeError(`Missing first subscribe argument, or second if first is the event type, when subscribing to a UniversalStore with id '${this.id}'`);
				if (!this.listeners.has(eventType)) this.listeners.set(eventType, /* @__PURE__ */ new Set());
				this.listeners.get(eventType).add(listener);
				return () => {
					this.debug("unsubscribe", {
						eventType,
						listener
					});
					if (!this.listeners.has(eventType)) return;
					this.listeners.get(eventType).delete(listener);
					if (this.listeners.get(eventType)?.size === 0) this.listeners.delete(eventType);
				};
			};
			this.send = (event) => {
				this.debug("send", { event });
				if (this.status !== UniversalStore.Status.READY) throw new TypeError(dedent`Cannot send event before store is ready. You can get the current status with store.status,
        or await store.readyPromise to wait for the store to be ready before sending events.
        ${JSON.stringify({
					event,
					id: this.id,
					actor: this.actor,
					environment: this.environment
				}, null, 2)}`);
				this.emitToListeners(event, { actor: this.actor });
				this.emitToChannel(event, { actor: this.actor });
			};
			this.debugging = options.debug ?? false;
			if (!UniversalStore.isInternalConstructing) throw new TypeError("UniversalStore is not constructable - use UniversalStore.create() instead");
			UniversalStore.isInternalConstructing = false;
			this.id = options.id;
			this.actorId = Date.now().toString(36) + Math.random().toString(36).substring(2);
			this.actorType = options.leader ? UniversalStore.ActorType.LEADER : UniversalStore.ActorType.FOLLOWER;
			this.state = options.initialState;
			this.channelEventName = `${CHANNEL_EVENT_PREFIX}${this.id}`;
			this.debug("constructor", {
				options,
				environmentOverrides,
				channelEventName: this.channelEventName
			});
			if (this.actor.type === UniversalStore.ActorType.LEADER) this.syncing = {
				state: ProgressState.RESOLVED,
				promise: Promise.resolve()
			};
			else {
				let syncingResolve;
				const syncingPromise = new Promise((resolve) => {
					syncingResolve = () => {
						if (this.syncing.state !== ProgressState.PENDING) return;
						this.syncing.state = ProgressState.RESOLVED;
						resolve();
					};
				});
				this.syncing = {
					state: ProgressState.PENDING,
					promise: syncingPromise,
					resolve: syncingResolve
				};
			}
			this.getState = this.getState.bind(this);
			this.setState = this.setState.bind(this);
			this.subscribe = this.subscribe.bind(this);
			this.onStateChange = this.onStateChange.bind(this);
			this.send = this.send.bind(this);
			this.emitToChannel = this.emitToChannel.bind(this);
			this.prepareThis = this.prepareThis.bind(this);
			this.emitToListeners = this.emitToListeners.bind(this);
			this.handleChannelEvents = this.handleChannelEvents.bind(this);
			this.debug = this.debug.bind(this);
			this.channel = environmentOverrides?.channel ?? UniversalStore.preparation.channel;
			this.environment = environmentOverrides?.environment ?? UniversalStore.preparation.environment;
			if (this.channel && this.environment) {
				if (!environmentOverrides) UniversalStore.preparation.resolve({
					channel: this.channel,
					environment: this.environment
				});
				this.prepareThis({
					channel: this.channel,
					environment: this.environment
				});
			} else UniversalStore.preparation.promise.then(this.prepareThis);
		}
		/** Creates a new instance of UniversalStore */
		static create(options) {
			if (!options || typeof options?.id !== "string") throw new TypeError("id is required and must be a string, when creating a UniversalStore");
			if (!isFirstPartyStoreId(options.id)) throw new TypeError(`UniversalStore is internal to Storybook and cannot create a store with id "${options.id}"`);
			if (options.debug) console.debug(dedent`[UniversalStore]
        create`, { options });
			const existing = instances.get(options.id);
			if (existing) {
				console.warn(dedent`UniversalStore with id "${options.id}" already exists in this environment, re-using existing.
        You should reuse the existing instance instead of trying to create a new one.`);
				return existing;
			}
			UniversalStore.isInternalConstructing = true;
			const store = new UniversalStore(options);
			instances.set(options.id, store);
			return store;
		}
		/**
		* Used by Storybook to set the channel for all instances of UniversalStore in the given
		* environment.
		*
		* @internal
		*/
		static __prepare(channel, environment) {
			UniversalStore.preparation.channel = channel;
			UniversalStore.preparation.environment = environment;
			UniversalStore.preparation.resolve({
				channel,
				environment
			});
		}
		/**
		* Updates the store's state
		*
		* Either a new state or a state updater function can be passed to the method.
		*/
		setState(updater) {
			const previousState = this.state;
			const newState = typeof updater === "function" ? updater(previousState) : updater;
			this.debug("setState", {
				newState,
				previousState,
				updater
			});
			if (this.status !== UniversalStore.Status.READY) throw new TypeError(dedent`Cannot set state before store is ready. You can get the current status with store.status,
        or await store.readyPromise to wait for the store to be ready before sending events.
        ${JSON.stringify({
				newState,
				id: this.id,
				actor: this.actor,
				environment: this.environment
			}, null, 2)}`);
			this.state = newState;
			const event = {
				type: UniversalStore.InternalEventType.SET_STATE,
				payload: {
					state: newState,
					previousState
				}
			};
			this.emitToChannel(event, { actor: this.actor });
			this.emitToListeners(event, { actor: this.actor });
		}
		/**
		* Subscribes to state changes
		*
		* @returns Unsubscribe function
		*/
		onStateChange(listener) {
			this.debug("onStateChange", { listener });
			return this.subscribe(UniversalStore.InternalEventType.SET_STATE, ({ payload }, eventInfo) => {
				listener(payload.state, payload.previousState, eventInfo);
			});
		}
		emitToChannel(event, eventInfo) {
			this.debug("emitToChannel", {
				event,
				eventInfo,
				channel: !!this.channel
			});
			this.channel?.emit(this.channelEventName, {
				event,
				eventInfo
			});
		}
		prepareThis({ channel, environment }) {
			this.channel = channel;
			this.environment = environment;
			this.debug("prepared", {
				channel: !!channel,
				environment
			});
			this.channel.on(this.channelEventName, this.handleChannelEvents);
			if (this.actor.type === UniversalStore.ActorType.LEADER) this.emitToChannel({ type: UniversalStore.InternalEventType.LEADER_CREATED }, { actor: this.actor });
			else {
				this.emitToChannel({ type: UniversalStore.InternalEventType.FOLLOWER_CREATED }, { actor: this.actor });
				this.emitToChannel({ type: UniversalStore.InternalEventType.EXISTING_STATE_REQUEST }, { actor: this.actor });
			}
		}
		emitToListeners(event, eventInfo) {
			const eventTypeListeners = this.listeners.get(event.type);
			const everythingListeners = this.listeners.get("*");
			this.debug("emitToListeners", {
				event,
				eventInfo,
				eventTypeListeners,
				everythingListeners
			});
			[...eventTypeListeners ?? [], ...everythingListeners ?? []].forEach((listener) => listener(event, eventInfo));
		}
		handleChannelEvents(channelEvent) {
			const { event, eventInfo } = channelEvent;
			if ([eventInfo.actor.id, eventInfo.forwardingActor?.id].includes(this.actor.id)) {
				this.debug("handleChannelEvents: Ignoring event from self", { channelEvent });
				return;
			} else if (this.syncing?.state === ProgressState.PENDING && event.type !== UniversalStore.InternalEventType.EXISTING_STATE_RESPONSE) {
				this.debug("handleChannelEvents: Ignoring event while syncing", { channelEvent });
				return;
			}
			this.debug("handleChannelEvents", { channelEvent });
			if (this.actor.type === UniversalStore.ActorType.LEADER) {
				let shouldForwardEvent = true;
				switch (event.type) {
					case UniversalStore.InternalEventType.EXISTING_STATE_REQUEST:
						shouldForwardEvent = false;
						const responseEvent = {
							type: UniversalStore.InternalEventType.EXISTING_STATE_RESPONSE,
							payload: this.state
						};
						this.debug("handleChannelEvents: responding to existing state request", { responseEvent });
						this.emitToChannel(responseEvent, { actor: this.actor });
						this.emitToListeners(responseEvent, { actor: this.actor });
						break;
					case UniversalStore.InternalEventType.LEADER_CREATED:
						shouldForwardEvent = false;
						this.syncing.state = ProgressState.REJECTED;
						this.debug("handleChannelEvents: erroring due to second leader being created", { event });
						console.error(dedent`Detected multiple UniversalStore leaders created with the same id "${this.id}".
            Only one leader can exists at a time, your stores are now in an invalid state.
            Leaders detected:
            this: ${JSON.stringify(this.actor, null, 2)}
            other: ${JSON.stringify(eventInfo.actor, null, 2)}`);
						break;
				}
				if (shouldForwardEvent) {
					this.debug("handleChannelEvents: forwarding event", { channelEvent });
					this.emitToChannel(event, {
						actor: eventInfo.actor,
						forwardingActor: this.actor
					});
				}
			}
			if (this.actor.type === UniversalStore.ActorType.FOLLOWER) switch (event.type) {
				case UniversalStore.InternalEventType.EXISTING_STATE_RESPONSE:
					this.debug("handleChannelEvents: Setting state from leader's existing state response", { event });
					if (this.syncing?.state !== ProgressState.PENDING) break;
					this.syncing.resolve?.();
					const setStateEvent = {
						type: UniversalStore.InternalEventType.SET_STATE,
						payload: {
							state: event.payload,
							previousState: this.state
						}
					};
					this.state = event.payload;
					this.emitToListeners(setStateEvent, eventInfo);
					break;
			}
			switch (event.type) {
				case UniversalStore.InternalEventType.SET_STATE:
					this.debug("handleChannelEvents: Setting state", { event });
					this.state = event.payload.state;
					break;
			}
			this.emitToListeners(event, { actor: eventInfo.actor });
		}
		debug(message, data) {
			if (this.debugging) console.debug(dedent`[UniversalStore::${this.id}::${this.environment ?? UniversalStore.Environment.UNKNOWN}]
        ${message}`, JSON.stringify({
				data,
				actor: this.actor,
				state: this.state,
				status: this.status
			}, null, 2));
		}
		/**
		* Used to reset the static fields of the UniversalStore class when cleaning up tests
		*
		* @internal
		*/
		static __reset() {
			UniversalStore.preparation.reject(/* @__PURE__ */ new Error("reset"));
			UniversalStore.setupPreparationPromise();
			UniversalStore.isInternalConstructing = false;
		}
	};
}));
//#endregion
//#region src/shared/universal-store/use-universal-store-manager.ts
var useUniversalStore;
var init_use_universal_store_manager = __esmMin((() => {
	init__storybook_global_react();
	init_predicate();
	useUniversalStore = (universalStore, selector) => {
		const snapshotRef = useRef(selector ? selector(universalStore.getState()) : universalStore.getState());
		return [useSyncExternalStore(useCallback((listener) => universalStore.onStateChange((state, previousState) => {
			const selectedState = selector ? selector(state) : state;
			if (!isEqual(selectedState, selector ? selector(previousState) : previousState)) {
				snapshotRef.current = selectedState;
				listener();
			}
		}), [universalStore, selector]), useCallback(() => {
			const currentState = universalStore.getState();
			const selectedState = selector ? selector(currentState) : currentState;
			if (isEqual(selectedState, snapshotRef.current)) return snapshotRef.current;
			snapshotRef.current = selectedState;
			return snapshotRef.current;
		}, [universalStore, selector])), universalStore.setState];
	};
}));
//#endregion
export { init_events as A, init_constants as B, hasFixedViewportDimensions as C, init_review as D, parseIframeResizeMessage as E, isReviewCollectionStoryRoute as F, isReviewSummaryPath as I, ToolbarManager as L, useCopyButton as M, REVIEW_COLLECTION_QUERY_PARAM as N, REVIEW_EVENTS as O, init_routes as P, init_ToolbarManager as R, IFRAME_RESIZE_REQUEST_CONTEXT as S, init_iframe_resize as T, init_status_store as _, getActiveFilterCount as a, StorybookError as b, USER_TAG_FILTER as c, init_checklistData as d, getAiSetupPrompt as f, createStatusStore as g, countStatusesByValue as h, init_universal_store as i, init_useCopyButton as j, REVIEW_NAMESPACE as k, init_tags as l, UNIVERSAL_STATUS_STORE_OPTIONS as m, useUniversalStore as n, init_story_index_filters as o, init_ai_prompts as p, UniversalStore as r, BUILT_IN_FILTERS as s, init_use_universal_store_manager as t, checklistData as u, statusValueDescription as v, iframeResizeDimensionsEqual as w, init_storybook_error as x, statusValueShortName as y, TOOLBAR_ID as z };
