/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/utils/settings.js
 */


/**
 * Sets the global rootPath property used by `ElementMixin` and
 * available via `rootPath`.
 */
declare function setRootPath(path: string): void;


/**
 * Sets the global sanitizeDOMValue available via this module's exported
 * `sanitizeDOMValue` variable.
 */
declare function setSanitizeDOMValue(newSanitizeDOMValue: ((p0: any, p1: string, p2: string, p3: Node|null) => any)|undefined): void;


/**
 * Sets `passiveTouchGestures` globally for all elements using Polymer Gestures.
 */
declare function setPassiveTouchGestures(usePassive: boolean): void;

export {};
