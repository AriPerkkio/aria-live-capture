# aria-live-capture

> Capture announcements of [ARIA live regions](https://www.w3.org/TR/wai-aria-1.2/#dfn-live-region).

`aria-live-capture` is a utility tool for inspecting announcements of ARIA live regions.
When developing an application which utilizes ARIA live announcements it is often frustrating to toggle screen readers and other assistive technologies constantly on/off during development.
This tool aims to help developers easily see announcements without having to use actual screen readers.
However final assertion should always be made with the actual target assistive technology.

For validating ARIA live regions in tests see [extend-to-be-announced](https://github.com/AriPerkkio/extend-to-be-announced).

## Installation

`aria-live-capture` should be included in development dependencies.

```bash
yarn add --dev aria-live-capture
```

## Usage

Import `CaptureAnnouncements` from entrypoint.

```ts
import CaptureAnnouncements from 'aria-live-capture';
```

### onCapture

Pass `onCapture` callback to handle announcements.

| Callback argument |   type   | value                            |
| :---------------: | :------: | -------------------------------- |
|   announcement    | `string` | Text content of the announcement |
| politenessSetting | `string` | `polite\|assertive`              |

```ts
CaptureAnnouncements({
    onCapture: (announcement, politenessSetting) => {
        console.log(
            `"${announcement}" was announced with politeness setting "${politenessSetting}"`
        );
    },
});
```

```
"Loading" was announced with politeness setting "polite"
"Failed to load user details" was announced with politeness setting "assertive"
```

### onIncorrectStatusMessage

You can optionally inspect incorrectly used status messages.
These are cases where contents of `aria-live="polite"|role="status"` regions are rendered immediately instead of updating an existing container.

<!-- prettier-ignore -->
```html
Render#1 | <div role="status"></div>
Render#2 | <div role="status">Loading</div>
PASS ✅ | "Loading" is announced
```

<!-- prettier-ignore -->
```html
Render#1 | <div role="status">Loading</div>
FAIL ❌ | "Loading" is not announced
```

<!-- prettier-ignore -->
```html
Render#1 | <div></div>
Render#2 | <div role="status">Loading</div>
FAIL ❌ | "Loading" is not announced
```

| Callback argument |   type   | value                           |
| :---------------: | :------: | ------------------------------- |
|       text        | `string` | Text content of the live region |

```ts
CaptureAnnouncements({
    onCapture: onCapture,
    onIncorrectStatusMessage: text => {
        console.log(
            `"${text}" was rendered while mounting live region instead of updating an existing one.`
        );
    },
});
```

```
"Loading" was rendered while mounting live region instead of updating an existing one.
```

### cleanup

The `CaptureAnnouncements` method returns `cleanup` function for clearing DOM interceptors.

```ts
const cleanup = CaptureAnnouncements(options);

cleanup();
```

## Support

|     Feature     | Status |
| :-------------: | :----: |
|     `role`      |   ✅   |
|   `aria-live`   |   ✅   |
|  `aria-atomic`  | ❌ 👷  |
|   `aria-busy`   |   ❌   |
| `aria-relevant` |   ❌   |
