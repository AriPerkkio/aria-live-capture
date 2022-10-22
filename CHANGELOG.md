## [0.5.1](https://github.com/AriPerkkio/aria-live-capture/compare/v0.5.0...v0.5.1) (2022-02-13)


### Bug Fixes

* initialization to track existing live regions ([c853541](https://github.com/AriPerkkio/aria-live-capture/commit/c853541c200feff5e2fd815fbf4af6f5c8d6dc59))
* **shadow-dom:** intercept `DocumentFragment` APIs ([89af7d2](https://github.com/AriPerkkio/aria-live-capture/commit/89af7d2443f22c066349d90650f18cd262761dcb))



# [0.5.0](https://github.com/AriPerkkio/aria-live-capture/compare/v0.4.1...v0.5.0) (2022-02-12)


### Features

* **shadow-dom:** `getAllLiveRegions` to traverse down elements with shadowRoot ([0b17501](https://github.com/AriPerkkio/aria-live-capture/commit/0b175016aaa49c9e9471bbd12ff00dac648febdb))
* **shadow-dom:** `getClosestElement` to traverse up the shadow root host ([7aa5557](https://github.com/AriPerkkio/aria-live-capture/commit/7aa5557a166a8b1f7d78b0cfda78e6574232f72e))
* **shadow-dom:** `getClosestLiveRegion` to traverse up elements with shadowRoot ([3042f86](https://github.com/AriPerkkio/aria-live-capture/commit/3042f86a11294692a65f179325631311f8ba53a0))
* **shadow-dom:** `getTextContent` to traverse down elements with shadowRoot ([8471968](https://github.com/AriPerkkio/aria-live-capture/commit/8471968447a89d6ef59eae4f5962467e453f729f))
* **shadow-dom:** `isHidden` to traverse up the shadow root host ([9f3b06a](https://github.com/AriPerkkio/aria-live-capture/commit/9f3b06a6da009b41c9a03c68023889f8fd255eb6))
* **shadow-dom:** `isInDOM` to traverse up the shadow root host ([485a736](https://github.com/AriPerkkio/aria-live-capture/commit/485a73654a5e31629f30fceb58624c7a7917a9e0))
* **shadow-dom:** add `includeShadowDom` option ([158c690](https://github.com/AriPerkkio/aria-live-capture/commit/158c690e9337ec99e043ef3bf525d99fa1e2dbf0))


### Performance Improvements

* reduce unnecessary work ([4a3b523](https://github.com/AriPerkkio/aria-live-capture/commit/4a3b5237612433264cb97de4852341e4024c36f5))



## [0.4.1](https://github.com/AriPerkkio/aria-live-capture/compare/v0.4.0...v0.4.1) (2022-01-09)


### Bug Fixes

* `role="marquee"`, `role="timer"`, `aria-live="off" ([#19](https://github.com/AriPerkkio/aria-live-capture/issues/19)) ([75a7d05](https://github.com/AriPerkkio/aria-live-capture/commit/75a7d05938acaa83f324667960b286f9c181c0ec))



# [0.4.0](https://github.com/AriPerkkio/aria-live-capture/compare/v0.3.5...v0.4.0) (2021-11-07)


### Bug Fixes

* detect element disappearance ([aa5c3cf](https://github.com/AriPerkkio/aria-live-capture/commit/aa5c3cf84aba6d31f17b551b0ceecdc9fefa1a64))
* insertAdjasent* interceptors to track the called node instead of parentNode ([f47af40](https://github.com/AriPerkkio/aria-live-capture/commit/f47af404711cb6d7ed6b522cd8dfe68ee9f02bf5))



## [0.3.5](https://github.com/AriPerkkio/aria-live-capture/compare/v0.3.4...v0.3.5) (2021-10-17)


### Bug Fixes

* improve text resolving ([#8](https://github.com/AriPerkkio/aria-live-capture/issues/8)) ([f21a6fa](https://github.com/AriPerkkio/aria-live-capture/commit/f21a6fa386f1ac0e067f82188ec00f72763b903c))
* use text content of whole live region when updating announcements ([#11](https://github.com/AriPerkkio/aria-live-capture/issues/11)) ([0b11bf5](https://github.com/AriPerkkio/aria-live-capture/commit/0b11bf55df7318df01b24d993901fe3de21b2c23))



## [0.3.4](https://github.com/AriPerkkio/aria-live-capture/compare/v0.3.3...v0.3.4) (2021-09-26)


### Bug Fixes

* detect changes of `aria-hidden` ([#7](https://github.com/AriPerkkio/aria-live-capture/issues/7)) ([a93cb00](https://github.com/AriPerkkio/aria-live-capture/commit/a93cb0063150968281e67be1ca7ab945703ec503))



## [0.3.3](https://github.com/AriPerkkio/aria-live-capture/compare/v0.3.2...v0.3.3) (2021-09-21)


### Bug Fixes

* ignore `aria-hidden` marked elements ([#5](https://github.com/AriPerkkio/aria-live-capture/issues/5)) ([826f45c](https://github.com/AriPerkkio/aria-live-capture/commit/826f45cd81b3dc58619f166fbb5d3eb1c905afa9))



## [0.3.2](https://github.com/AriPerkkio/aria-live-capture/compare/v0.3.1...v0.3.2) (2021-09-06)


### Bug Fixes

* role/aria-live attribute removal tracking ([1a94ba5](https://github.com/AriPerkkio/aria-live-capture/commit/1a94ba5ff8a60ba0afbfdb71a0ef78ee9dde6ca2))
* stop tracking unmounted elements ([07f4c40](https://github.com/AriPerkkio/aria-live-capture/commit/07f4c40bb60bed96254834b1d902522822552ec2))



## [0.3.1](https://github.com/AriPerkkio/aria-live-capture/compare/v0.3.0...v0.3.1) (2021-07-04)


### Bug Fixes

* add role="log" detection ([ed880af](https://github.com/AriPerkkio/aria-live-capture/commit/ed880afc99653a2656c58460334ed043095793a4))
* prevent ending up in recursion loop ([7cbc32b](https://github.com/AriPerkkio/aria-live-capture/commit/7cbc32b50dace7db302de39f85b623b4266af482))



# [0.3.0](https://github.com/AriPerkkio/aria-live-capture/compare/v0.2.0...v0.3.0) (2021-06-22)


### Bug Fixes

* prevent reporting elements with empty `textContent` ([9f840da](https://github.com/AriPerkkio/aria-live-capture/commit/9f840da04335b27714e09a08d5dd2d8017ddffed))


### Features

* export typings for politeness setting ([215d34e](https://github.com/AriPerkkio/aria-live-capture/commit/215d34e051aac2a0ff73b516480b4c254351d037))



# [0.2.0](https://github.com/AriPerkkio/aria-live-capture/compare/v0.1.0...v0.2.0) (2021-06-19)


### Features

* export commonjs to support jest easily ([24d819f](https://github.com/AriPerkkio/aria-live-capture/commit/24d819f14b535584262b234ca7fb42063360e9ae))



# [0.1.0](https://github.com/AriPerkkio/aria-live-capture/compare/dd6471a47a4c098b8a4025ce028cd5c6407723cd...v0.1.0) (2021-06-19)


### Features

* capture-announcements ([dd6471a](https://github.com/AriPerkkio/aria-live-capture/commit/dd6471a47a4c098b8a4025ce028cd5c6407723cd))



