/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-button-behavior.js
 */

declare namespace Polymer {

  interface PaperButtonBehavior {

    /**
     * The z-depth of this element, from 0-5. Setting to 0 will remove the
     * shadow, and each increasing number greater than 0 will be "deeper"
     * than the last.
     */
    readonly elevation: number|null|undefined;
    hostAttributes: object|null;
    _calculateElevation(): void;
    _computeKeyboardClass(receivedFocusFromKeyboard: any): void;

    /**
     * In addition to `IronButtonState` behavior, when space key goes down,
     * create a ripple down effect.
     *
     * @param event .
     */
    _spaceKeyDownHandler(event: KeyboardEvent): void;

    /**
     * In addition to `IronButtonState` behavior, when space key goes up,
     * create a ripple up effect.
     *
     * @param event .
     */
    _spaceKeyUpHandler(event: KeyboardEvent): void;
  }

  const PaperButtonBehavior: object;
}

declare function _calculateElevation(): void;

declare function _computeKeyboardClass(): void;


/**
 * In addition to `IronButtonState` behavior, when space key goes down,
 * create a ripple down effect.
 */
declare function _spaceKeyDownHandler(event: KeyboardEvent): void;


/**
 * In addition to `IronButtonState` behavior, when space key goes up,
 * create a ripple up effect.
 */
declare function _spaceKeyUpHandler(event: KeyboardEvent): void;

interface PaperButtonBehavior extends IronButtonState, IronControlState, PaperRippleBehavior, PaperButtonBehaviorImpl {
}

const PaperButtonBehavior: object;

export {};
