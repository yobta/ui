export declare const TextArea: import("react").ForwardRefExoticComponent<Pick<import("./createTextArea").TextAreaProps & {
    hidden?: boolean | undefined;
    color?: string | undefined;
    style?: import("react").CSSProperties | undefined;
    wrap?: string | undefined;
    translate?: "yes" | "no" | undefined;
    disabled?: boolean | undefined;
    form?: string | undefined;
    slot?: string | undefined;
    title?: string | undefined;
    ref?: import("react").LegacyRef<HTMLTextAreaElement> | undefined;
    key?: import("react").Key | null | undefined;
    autoComplete?: string | undefined;
    autoFocus?: boolean | undefined;
    cols?: number | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    name?: string | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    className?: string | undefined;
    contentEditable?: "inherit" | (boolean | "false" | "true") | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "false" | "true") | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    placeholder?: string | undefined;
    spellCheck?: (boolean | "false" | "true") | undefined;
    tabIndex?: number | undefined;
    radioGroup?: string | undefined;
    role?: import("react").AriaRole | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "none" | "text" | "numeric" | "search" | "tel" | "url" | "email" | "decimal" | undefined;
    is?: string | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: (boolean | "false" | "true") | undefined;
    'aria-autocomplete'?: "both" | "none" | "inline" | "list" | undefined;
    'aria-busy'?: (boolean | "false" | "true") | undefined;
    'aria-checked'?: boolean | "mixed" | "false" | "true" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?: boolean | "page" | "false" | "true" | "time" | "step" | "location" | "date" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: (boolean | "false" | "true") | undefined;
    'aria-dropeffect'?: "none" | "copy" | "move" | "link" | "execute" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: (boolean | "false" | "true") | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: (boolean | "false" | "true") | undefined;
    'aria-haspopup'?: boolean | "listbox" | "grid" | "menu" | "false" | "true" | "dialog" | "tree" | undefined;
    'aria-hidden'?: (boolean | "false" | "true") | undefined;
    'aria-invalid'?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: (boolean | "false" | "true") | undefined;
    'aria-multiline'?: (boolean | "false" | "true") | undefined;
    'aria-multiselectable'?: (boolean | "false" | "true") | undefined;
    'aria-orientation'?: "horizontal" | "vertical" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "mixed" | "false" | "true" | undefined;
    'aria-readonly'?: (boolean | "false" | "true") | undefined;
    'aria-relevant'?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    'aria-required'?: (boolean | "false" | "true") | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: (boolean | "false" | "true") | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    readOnly?: boolean | undefined;
    required?: boolean | undefined;
    rows?: number | undefined;
    value?: string | number | readonly string[] | undefined;
    dangerouslySetInnerHTML?: {
        __html: string;
    } | undefined;
    onCopy?: import("react").ClipboardEventHandler<HTMLTextAreaElement> | undefined;
    onCopyCapture?: import("react").ClipboardEventHandler<HTMLTextAreaElement> | undefined;
    onCut?: import("react").ClipboardEventHandler<HTMLTextAreaElement> | undefined;
    onCutCapture?: import("react").ClipboardEventHandler<HTMLTextAreaElement> | undefined;
    onPaste?: import("react").ClipboardEventHandler<HTMLTextAreaElement> | undefined;
    onPasteCapture?: import("react").ClipboardEventHandler<HTMLTextAreaElement> | undefined;
    onCompositionEnd?: import("react").CompositionEventHandler<HTMLTextAreaElement> | undefined;
    onCompositionEndCapture?: import("react").CompositionEventHandler<HTMLTextAreaElement> | undefined;
    onCompositionStart?: import("react").CompositionEventHandler<HTMLTextAreaElement> | undefined;
    onCompositionStartCapture?: import("react").CompositionEventHandler<HTMLTextAreaElement> | undefined;
    onCompositionUpdate?: import("react").CompositionEventHandler<HTMLTextAreaElement> | undefined;
    onCompositionUpdateCapture?: import("react").CompositionEventHandler<HTMLTextAreaElement> | undefined;
    onFocus?: import("react").FocusEventHandler<HTMLTextAreaElement> | undefined;
    onFocusCapture?: import("react").FocusEventHandler<HTMLTextAreaElement> | undefined;
    onBlur?: import("react").FocusEventHandler<HTMLTextAreaElement> | undefined;
    onBlurCapture?: import("react").FocusEventHandler<HTMLTextAreaElement> | undefined;
    onChange?: import("react").ChangeEventHandler<HTMLTextAreaElement> | undefined;
    onChangeCapture?: import("react").FormEventHandler<HTMLTextAreaElement> | undefined;
    onBeforeInput?: import("react").FormEventHandler<HTMLTextAreaElement> | undefined;
    onBeforeInputCapture?: import("react").FormEventHandler<HTMLTextAreaElement> | undefined;
    onInput?: import("react").FormEventHandler<HTMLTextAreaElement> | undefined;
    onInputCapture?: import("react").FormEventHandler<HTMLTextAreaElement> | undefined;
    onReset?: import("react").FormEventHandler<HTMLTextAreaElement> | undefined;
    onResetCapture?: import("react").FormEventHandler<HTMLTextAreaElement> | undefined;
    onSubmit?: import("react").FormEventHandler<HTMLTextAreaElement> | undefined;
    onSubmitCapture?: import("react").FormEventHandler<HTMLTextAreaElement> | undefined;
    onInvalid?: import("react").FormEventHandler<HTMLTextAreaElement> | undefined;
    onInvalidCapture?: import("react").FormEventHandler<HTMLTextAreaElement> | undefined;
    onLoad?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onLoadCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onError?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onErrorCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onKeyDown?: import("react").KeyboardEventHandler<HTMLTextAreaElement> | undefined;
    onKeyDownCapture?: import("react").KeyboardEventHandler<HTMLTextAreaElement> | undefined;
    onKeyPress?: import("react").KeyboardEventHandler<HTMLTextAreaElement> | undefined;
    onKeyPressCapture?: import("react").KeyboardEventHandler<HTMLTextAreaElement> | undefined;
    onKeyUp?: import("react").KeyboardEventHandler<HTMLTextAreaElement> | undefined;
    onKeyUpCapture?: import("react").KeyboardEventHandler<HTMLTextAreaElement> | undefined;
    onAbort?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onAbortCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onCanPlay?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onCanPlayCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onCanPlayThrough?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onCanPlayThroughCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onDurationChange?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onDurationChangeCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onEmptied?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onEmptiedCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onEncrypted?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onEncryptedCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onEnded?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onEndedCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onLoadedData?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onLoadedDataCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onLoadedMetadata?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onLoadedMetadataCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onLoadStart?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onLoadStartCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onPause?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onPauseCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onPlay?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onPlayCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onPlaying?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onPlayingCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onProgress?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onProgressCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onRateChange?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onRateChangeCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onSeeked?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onSeekedCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onSeeking?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onSeekingCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onStalled?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onStalledCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onSuspend?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onSuspendCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onTimeUpdate?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onTimeUpdateCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onVolumeChange?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onVolumeChangeCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onWaiting?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onWaitingCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onAuxClick?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onAuxClickCapture?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onClick?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onClickCapture?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onContextMenu?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onContextMenuCapture?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onDoubleClick?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onDoubleClickCapture?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onDrag?: import("react").DragEventHandler<HTMLTextAreaElement> | undefined;
    onDragCapture?: import("react").DragEventHandler<HTMLTextAreaElement> | undefined;
    onDragEnd?: import("react").DragEventHandler<HTMLTextAreaElement> | undefined;
    onDragEndCapture?: import("react").DragEventHandler<HTMLTextAreaElement> | undefined;
    onDragEnter?: import("react").DragEventHandler<HTMLTextAreaElement> | undefined;
    onDragEnterCapture?: import("react").DragEventHandler<HTMLTextAreaElement> | undefined;
    onDragExit?: import("react").DragEventHandler<HTMLTextAreaElement> | undefined;
    onDragExitCapture?: import("react").DragEventHandler<HTMLTextAreaElement> | undefined;
    onDragLeave?: import("react").DragEventHandler<HTMLTextAreaElement> | undefined;
    onDragLeaveCapture?: import("react").DragEventHandler<HTMLTextAreaElement> | undefined;
    onDragOver?: import("react").DragEventHandler<HTMLTextAreaElement> | undefined;
    onDragOverCapture?: import("react").DragEventHandler<HTMLTextAreaElement> | undefined;
    onDragStart?: import("react").DragEventHandler<HTMLTextAreaElement> | undefined;
    onDragStartCapture?: import("react").DragEventHandler<HTMLTextAreaElement> | undefined;
    onDrop?: import("react").DragEventHandler<HTMLTextAreaElement> | undefined;
    onDropCapture?: import("react").DragEventHandler<HTMLTextAreaElement> | undefined;
    onMouseDown?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onMouseDownCapture?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onMouseEnter?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onMouseLeave?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onMouseMove?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onMouseMoveCapture?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onMouseOut?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onMouseOutCapture?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onMouseOver?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onMouseOverCapture?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onMouseUp?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onMouseUpCapture?: import("react").MouseEventHandler<HTMLTextAreaElement> | undefined;
    onSelect?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onSelectCapture?: import("react").ReactEventHandler<HTMLTextAreaElement> | undefined;
    onTouchCancel?: import("react").TouchEventHandler<HTMLTextAreaElement> | undefined;
    onTouchCancelCapture?: import("react").TouchEventHandler<HTMLTextAreaElement> | undefined;
    onTouchEnd?: import("react").TouchEventHandler<HTMLTextAreaElement> | undefined;
    onTouchEndCapture?: import("react").TouchEventHandler<HTMLTextAreaElement> | undefined;
    onTouchMove?: import("react").TouchEventHandler<HTMLTextAreaElement> | undefined;
    onTouchMoveCapture?: import("react").TouchEventHandler<HTMLTextAreaElement> | undefined;
    onTouchStart?: import("react").TouchEventHandler<HTMLTextAreaElement> | undefined;
    onTouchStartCapture?: import("react").TouchEventHandler<HTMLTextAreaElement> | undefined;
    onPointerDown?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onPointerDownCapture?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onPointerMove?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onPointerMoveCapture?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onPointerUp?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onPointerUpCapture?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onPointerCancel?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onPointerCancelCapture?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onPointerEnter?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onPointerEnterCapture?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onPointerLeave?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onPointerLeaveCapture?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onPointerOver?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onPointerOverCapture?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onPointerOut?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onPointerOutCapture?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onGotPointerCapture?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onGotPointerCaptureCapture?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onLostPointerCapture?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onLostPointerCaptureCapture?: import("react").PointerEventHandler<HTMLTextAreaElement> | undefined;
    onScroll?: import("react").UIEventHandler<HTMLTextAreaElement> | undefined;
    onScrollCapture?: import("react").UIEventHandler<HTMLTextAreaElement> | undefined;
    onWheel?: import("react").WheelEventHandler<HTMLTextAreaElement> | undefined;
    onWheelCapture?: import("react").WheelEventHandler<HTMLTextAreaElement> | undefined;
    onAnimationStart?: import("react").AnimationEventHandler<HTMLTextAreaElement> | undefined;
    onAnimationStartCapture?: import("react").AnimationEventHandler<HTMLTextAreaElement> | undefined;
    onAnimationEnd?: import("react").AnimationEventHandler<HTMLTextAreaElement> | undefined;
    onAnimationEndCapture?: import("react").AnimationEventHandler<HTMLTextAreaElement> | undefined;
    onAnimationIteration?: import("react").AnimationEventHandler<HTMLTextAreaElement> | undefined;
    onAnimationIterationCapture?: import("react").AnimationEventHandler<HTMLTextAreaElement> | undefined;
    onTransitionEnd?: import("react").TransitionEventHandler<HTMLTextAreaElement> | undefined;
    onTransitionEndCapture?: import("react").TransitionEventHandler<HTMLTextAreaElement> | undefined;
    dirName?: string | undefined;
}, "hidden" | "color" | "style" | "wrap" | "translate" | "disabled" | "form" | "slot" | "title" | "key" | "autoComplete" | "autoFocus" | "cols" | "maxLength" | "minLength" | "name" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "readOnly" | "required" | "rows" | "value" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "dirName" | keyof import("./createTextArea").TextAreaProps> & import("react").RefAttributes<HTMLTextAreaElement>>;
//# sourceMappingURL=TextArea.d.ts.map