/* global Prism */
Prism.languages.typoscript = Prism.languages.extend('javascript', {
    comment:/(\s|^)([#]{1}[^#^\r^\n]{2,}?(\r?\n|$))|((\s|^)(\/\/).*(\r?\n|$))/g,
    keyword:/\b(TEXT|_GIFBUILDER|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|EDITPANEL|EFFECT|FILE|FORM|FRAME|FRAMESET|GIFBUILDER|global|globalString|globalVar|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IMAGE|IMG_RESOURCE|IMGMENU|IMGMENUITEM|IMGTEXT|JSMENU|JSMENUITEM|LOAD_REGISTER|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENU_LAYERS|TMENUITEM|USER|USER_INT)\b/g,
    tag:/\b(admPanel|alt_print|auth|browser|cache|CHECK|cObj|cObject|COMMENT|config|content|copy|CSS_inlineStyle|cut|dataArray|dayofmonth|dayofweek|db_list|device|dynCSS|edit|edit_access|edit_pageheader|folder|folderTree|foldoutMenu|Functions|gmenu_foldout|gmenu_layers|hostname|hour|imgList|imgResource|imgText|info|IP|jsmenu|JSwindow|LABEL|layout|layoutKey|lib|loginUser|marks|minute|mod|module|month|move_wizard|new|new_wizard|noResultObj|numRows|options|page|pageTree|paste|perms|PIDinRootline|PIDupinRootline|plugin|postform|postform_newThread|preview|publish|RADIO|renderObj|REQ|RTE|RTE_compliant|select|setup|split|stdWrap|subparts|system|temp|template|treeLevel|tsdebug|typolink|url|useragent|userFunc|version|view|workOnSubpart|ACT|ACTIFSUB|ACTIFSUBR|ACTRO|all|arrowACT|arrowNO|ascii|atLeast|atMost|BE|be_groups|be_users|BOX|browse|bullets|CUR|CURIFSUB|CURIFSUBRO|CURRO|default|description|directory|directReturn|div|else|email|end|equals|external|false|FE|fe_groups|fe_users|feadmin|header|html|id|if|ifEmpty|IFSUB|IFSUBRO|image|inBranch|isFalse|isGreaterThan|isInList|isLessThan|isPositive|isTrue|keyword3|language|leveltitle|list|login|mailform|media|menu|mod|multimedia|negate|NEW|NO|none|pages|pages_language_overlay|parseFunc_RTE|pid|required|RO|rootline|search|shortcut|sitemap|SPC|sys_dmail|sys_domain|sys_filemounts|sys_note|sys_template|tabel|text|textpic|this|top|true|twice|uid|uniqueGlobal|uniqueLocal|unsetEmpty|updated|uploads|us|user_task|USERDEF1|USERDEF1RO|USERDEF2|USERDEF2RO|usergroup|USR|USRRO|web_func|web_info|web_layout|web_list|web_t|xhtml_strict|xhtml_trans|XY|ypMenu|_CSS_DEFAULT_STYLE|_DEFAULT_PI_VARS|_LOCAL_LANG|CARRAY|CLEARGIF|COLUMNS|CONFIG|CONSTANTS|CTABLE|CType|DB|DOCUMENT_BODY|EFFECT|FORM|FRAME|FRAMESET|global|globalString|globalVar|GMENU_FOLDOUT|GMENU_LAYERS|GP|HTML|IENV|IMGMENUITEM|IMGTEXT|INCLUDE_TYPOSCRIPT|includeLibs|JSMENU|JSMENUITEM|LIT|MULTIMEDIA|OTABLE|PAGE_TARGET|PAGE_TSCONFIG_ID|PAGE_TSCONFIG_IDLIST|PAGE_TSCONFIG_STR|RECORDS|REMOTE_ADDR|RTE|SEARCHRESULT|SHARED|TCAdefaults|TCEFORM|TCEMAIN|TMENU_LAYERS|TMENUITEM|TSFE|applicationContext|templateName|dataProcessing|templateRootPaths|partialRootPaths|layoutRootPaths|_offset|absRefPrefix|accessibility|accessKey|addAttributes|addExtUrlsAndShortCuts|addItems|additionalHeaders|additionalParams|addParams|addQueryString|adjustItemsH|adjustSubItemsH|adminPanelStyles|after|afterImg|afterImgLink|afterImgTagParams|afterROImg|afterWrap|age|alertPopups|align|allow|allowCaching|allowedAttribs|allowedClasses|allowedCols|allowedNewTables|allowTags|allowTVlisting|allSaveFunctions|allStdWrap|allWrap|alternateBgColors|alternativeSortingField|alternativeTempPath|altImgResource|altLabels|altTarget|altText|altUrl|altUrl_noDefaultParams|altWrap|always|alwaysActivePIDlist|alwaysLink|alwaysShowClickMenuInTopFrame|andWhere|angle|antiAlias|append|applyTotalH|applyTotalW|archive|archiveTypoLink|arrayReturnMode|arrowACT|arrowImgParams|arrowNO|ATagAfterWrap|ATagBeforeWrap|ATagParams|ATagTitle|attribute|autoLevels|autonumber|backColor|background|badMess|baseURL|before|beforeImg|beforeImgLink|beforeImgTagParams|beforeROImg|beforeWrap|begin|beLoginLinkIPList|beLoginLinkIPList_login|beLoginLinkIPList_logout|bgCol|bgImg|blankStrEqFalse|blur|bm|bodyTag|bodyTagAdd|bodyTagCObject|bodyTagMargins|bodytext|border|borderCol|bordersWithin|borderThick|bottomBackColor|bottomContent|bottomHeight|bottomImg|bottomImg_mask|br|brTag|bullet|bulletlist|bytes|cache_clearAtMidnight|cache_period|caption|caption_stdWrap|captionAlign|captionHeader|captionSplit|case|casesensitiveComp|cellpadding|cellspacing|centerImgACT|centerImgCUR|centerImgNO|centerLeftImgACT|centerLeftImgCUR|centerLeftImgNO|centerRightImgACT|centerRightImgCUR|centerRightImgNO|char|charcoal|charMapConfig|check|class|classesAnchor|classesCharacter|classesImage|classesParagraph|classicPageEditMode|clear|clearCache|clearCache_disable|clearCache_pageGrandParent|clearCache_pageSiblingChildren|clearCacheCmd|clearCacheLevels|clearCacheOfPages|clickMenuTimeOut|clickTitleMode|clipboardNumberPads|cMargins|cObjNum|collapse|color|color1|color2|color3|color4|colors|colour|colPos_list|colRelations|cols|colSpace|comment_auto|commentWrap|compensateFieldWidth|compX|compY|conf|constants|content_from_pid_allowOutsideDomain|contextMenu|copyLevels|count_HMENU_MENUOBJ|count_menuItems|count_MENUOBJ|create|createFoldersInEB|crop|csConv|CSS_inlineStyle|current|curUid|cWidth|data|dataWrap|date|date_stdWrap|datePrefix|debug|debugData|debugFunc|debugItemConf|debugRenumberedObject|default|defaultAlign|defaultCmd|defaultFileUploads|defaultHeaderType|defaultOutput|defaults|defaultType|delete|denyTags|depth|DESC|dimensions|directionLeft|directionUp|disableAdvanced|disableAllHeaderCode|disableAltText|disableBigButtons|disableBodyTag|disableCacheSelector|disableCharsetHeader|disabled|disableDelete|disableDocSelector|disableHideAtCopy|disableIconLinkToContextmenu|disableItems|disableNewContentElementWizard|disableNoMatchingValueElement|disablePageExternalUrl|disablePrefixComment|disablePrependAtCopy|disableSearchBox|disableSingleTableView|disableTabInTextarea|displayActiveOnLoad|displayContent|displayFieldIcons|displayIcons|displayMessages|displayQueries|displayRecord|displayTimes|distributeX|distributeY|DIV|doctype|doctypeSwitch|doktype|doNotLinkIt|doNotShowLink|doNotStripHTML|dontCheckPid|dontFollowMouse|dontHideOnMouseUp|dontLinkIfSubmenu|dontShowPalettesOnFocusInAB|dontWrapInTable|doubleBrTag|dWorkArea|edge|edit_docModuleUplaod|edit_docModuleUpload|edit_RTE|editFieldsAtATime|editFormsOnPage|editIcons|editNoPopup|editPanel|elements|emailMeAtLogin|emailMess|emboss|enable|encapsLines|encapsLinesStdWrap|encapsTagList|entryLevel|equalH|everybody|excludeDoktypes|excludeUidList|expAll|expand|explode|ext|externalBlocks|extTarget|face|fe_adminLib|field|fieldOrder|fieldRequired|fields|fieldWrap|file|file1|file2|file3|file4|file5|filelink|filelist|firstLabel|firstLabelGeneral|fixAttrib|flip|flop|foldSpeed|foldTimer|fontColor|fontFile|fontOffset|fontSize|fontSizeMultiplicator|fontTag|forceDisplayFieldIcons|forceDisplayIcons|forceTemplateParsing|forceTypeValue|format|frame|frameReloadIfNotInFrameset|frameSet|freezeMouseover|ftu|function|gamma|gapBgCol|gapLineCol|gapLineThickness|gapWidth|get|getBorder|getLeft|getRight|globalNesting|goodMess|gray|group|groupBy|groupid|header|header_layout|headerComment|headerData|headerSpace|headTag|height|helpText|hidden|hiddenFields|hide|hideButCreateMap|hideMenuTimer|hideMenuWhenNotOver|hidePStyleItems|hideRecords|hideSubmoduleIcons|highColor|history|HTMLparser|HTMLparser_tags|htmlSpecialChars|htmlTag_dir|htmlTag_langKey|htmlTag_setParams|http|icon|icon_image_ext_list|icon_link|iconCObject|ifEmpty|image|image_compression|image_effects|image_frames|imageLinkWrap|imagePath|images|imageWrapIfAny|imgList|imgMap|imgMapExtras|imgMax|imgNameNotRandom|imgNamePrefix|imgObjNum|imgParams|imgPath|imgStart|import|inc|includeCSS|includeLibrary|includeJSFooter|includeJS|includeJSLibs|includeJSFooterlibs|includeCSSLibs|includeNotInMenu|incT3Lib_htmlmail|index|index_descrLgd|index_enable|index_externals|inlineStyle2TempFile|innerStdWrap|innerStdWrap_all|innerWrap|innerWrap2|input|inputLevels|insertClassesFromRTE|insertData|insertDmailerBoundaries|intensity|intTarget|intval|invert|IProcFunc|itemArrayProcFunc|itemH|items|itemsProcFunc|iterations|join|JSWindow|JSwindow_params|jumpurl|jumpUrl|jumpurl_enable|jumpurl_mailto_disable|jumpUrl_transferSession|keep|keepEntries|keepNonMatchedTags|key|label|labelStdWrap|labelWrap|lang|language|language_alt|languageField|layer_menu_id|layerStyle|left|leftIcons|leftImgACT|leftImgCUR|leftImgNO|leftjoin|leftOffset|levels|leveluid|limit|line|lineColor|lineThickness|linkPrefix|linkTitleToSelf|linkVars|linkWrap|listNum|listOnlyInSingleTableView|lm|locale_all|localNesting|locationData|lockFilePath|lockPosition|lockPosition_addSelf|lockPosition_adjust|lockToIP|longdescURL|lowColor|lower|LR|mailto|main|mainScript|makelinks|markerWrap|mask|max|maxAge|maxChars|maxH|maxHeight|maxItems|maxW|maxWidth|maxWInText|mayNotCreateEditShortcuts|menu_type|menuBackColor|menuHeight|menuName|menuOffset|menuWidth|message_page_is_being_generated|message_preview|meta|metaCharset|method|min|minH|minItems|minW|mode|moduleMenuCollapsable|MP_defaults|MP_disableTypolinkClosestMPvalue|MP_mapRootPoints|name|navFrameResizable|navFrameWidth|nesting|netprintApplicationLink|neverHideAtCopy|newPageWiz|newRecordFromTable|newWindow|newWizards|next|niceText|nicetext|no_cache|no_search|noAttrib|noCache|noCols|noCreateRecordsLink|noLink|noMatchingValue_label|noMenuMode|nonCachedSubst|nonTypoTagStdWrap|nonTypoTagUserFunc|nonWrappedTag|noOrderBy|noPageTitle|noRows|noScaleUp|noStretchAndMarginCells|noThumbsInEB|noThumbsInRTEimageSelect|notification_email_charset|notification_email_encoding|notification_email_urlmode|noTrimWrap|noValueInsert|obj|offset|offsetWrap|onlineWorkspaceInfo|onlyCurrentPid|opacity|orderBy|outerWrap|outline|outputLevels|override|overrideAttribs|overrideId|overridePageModule|overrideWithExtension|pageFrameObj|pageGenScript|pageTitleFirst|parameter|params|parseFunc|parser|password|path|permissions|pid_list|pidInList|pixelSpaceFontSizeRef|plaintextLib|plainTextStdWrap|postCObject|postLineBlanks|postLineChar|postLineLen|postUserFunc|postUserFuncInt|preBlanks|preCObject|prefix|prefixComment|prefixLocalAnchors|prefixRelPathWith|preIfEmptyListNum|preLineBlanks|preLineChar|preLineLen|prepend|preserveEntities|preUserFunc|prev|previewBorder|prevnextToSection|printheader|prioriCalc|proc|properties|protect|protectLvar|publish_levels|QEisDefault|quality|radio|radioWrap|range|rawUrlEncode|recipient|recursive|recursiveDelete|redirect|redirectToURL|reduceColors|register|relativeToParentLayer|relativeToTriggerItem|relPathPrefix|remap|remapTag|removeBadHTML|removeDefaultJS|removeIfEquals|removeIfFalse|removeItems|removeObjectsOfDummy|removePrependedNumbers|removeTags|removeWrapping|renderCharset|renderWrap|reset|resources|resultObj|returnLast|returnUrl|rightImgACT|rightImgCUR|rightImgNO|rightjoin|rm|rmTagIfNoAttrib|RO_chBgColor|rotate|rows|rowSpace|RTEfullScreenWidth|rules|sample|saveClipboard|saveDocNew|secondRow|section|sectionIndex|select|select_key|selectFields|separator|set|setContentToCurrent|setCurrent|setfixed|setFixedHeight|setFixedWidth|setJS_mouseOver|setJS_openPic|setOnly|shadow|sharpen|shear|short|shortcut|shortcut_onEditId_dontSetPageTree|shortcut_onEditId_keepExistingExpanded|shortcutFrame|shortcutGroups|shortcutIcon|show|showAccessRestrictedPages|showActive|showClipControlPanelsDespiteOfCMlayers|showFirst|showHiddenPages|showHiddenRecords|showHistory|showPageIdWithTitle|showTagFreeClasses|simulateDate|simulateUserGroup|singlePid|site_author|site_reserved|sitetitle|siteUrl|size|solarize|sorting|source|space|spaceAfter|spaceBefore|spaceBelowAbove|spaceLeft|spaceRight|spacing|spamProtectEmailAddresses|spamProtectEmailAddresses_atSubst|spamProtectEmailAddresses_lastDotSubst|special|splitChar|splitRendering|src|startInTaskCenter|stayFolded|stdheader|stdWrap|stdWrap2|strftime|stripHtml|styles|stylesheet|submenuObjSuffixes|subMenuOffset|submit|subst_elementUid|substMarksSeparately|substring|swirl|sword|sword_noMixedCase|SWORD_PARAMS|sword_standAlone|sys_language_mode|sys_language_overlay|sys_language_softMergeIfNotBlank|sys_language_uid|table|tableCellColor|tableParams|tables|tableStdWrap|tableStyle|tableWidth|tags|target|TDparams|templateContent|templateFile|text|textarea|textMargin|textMargin_outOfText|textMaxLength|textObjNum|textPos|textStyle|thickness|thumbnailsByDefault|tile|time_stdWrap|tipafriendLib|title|titleLen|titleTagFunction|titleText|tm|token|topOffset|totalWidth|transparentBackground|transparentColor|trim|tsdebug_tree|type|typeNum|types|typolinkCheckRootline|uidInList|unset|uploadFieldsInTopOfEB|uploads|upper|useCacheHash|useLargestItemX|useLargestItemY|user|userdefined|userfunction|userid|USERNAME_substToken|userProc|value|valueArray|wave|where|width|wiz|wordSpacing|workArea|wrap|wrap1|wrap2|wrap3|wrapAfterTags|wrapAlign|wrapFieldName|wrapItemAndSub|wrapNonWrappedLines|wraps|xhtml_cleanig|xmlprologue|xPosOffset|yPosOffset|addChr10BetweenParagraphs|ifBlank|treatIdAsReference|element|sourceCollection|small|srcsetCandidate|mediaQuery|dataKey|smallRetina|pixelDensity|directImageLink|linkParams|returnKey|emptyTitleHandling|titleInLink|titleInLinkAndImg|imageTextSplit|borderClass|borderSpace|separateRows|addClasses|addClassesCol|addClassesImage|imageStdWrap|imageStdWrapNoWidth|imageColumnStdWrap|rendering|singleNoCaption|fallbackRendering|singleStdWrap|rowStdWrap|noRowsStdWrap|lastRowStdWrap|columnStdWrap|imgTagStdWrap|editIconsStdWrap|noCaption|splitCaption|singleCaption|renderMethod|tt_content|beforeLastTag|iconTitle|references|fieldName|collections|folders|fileTarget|replacement|replace|useRegExp|categories|order|relation|preRenderRegisters|allImageCaptions|classStdWrap|constant|parseTarget|removeEmptyEntries|as|fieldDelimiter|maxGalleryWidth|maxGalleryWidthInText|columnSpacing|borderWidth|borderPadding|textmedia)\b/g,
    string: [
        {
            pattern: /^([^=]*=[< ]?)((?!\]\n).)*/g,
            lookbehind: true,
            inside: {
                variable: /(\{\$.*\})|(\{(register|field|cObj):.*\})|((TSFE|file):.*\n?\s?)/g,
                keyword: /\b(_GIFBUILDER|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|EDITPANEL|EFFECT|FILE|FORM|FRAME|FRAMESET|GIFBUILDER|global|globalString|globalVar|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IMAGE|IMG_RESOURCE|IMGMENU|IMGMENUITEM|IMGTEXT|JSMENU|JSMENUITEM|LOAD_REGISTER|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENU_LAYERS|TMENUITEM|USER|USER_INT)\b/g,
            }
        }
    ]
});