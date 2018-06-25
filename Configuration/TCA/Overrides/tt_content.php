<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

//hide Thumbnails in List
$GLOBALS['TCA']['tt_content']['ctrl']['thumbnail'] = '';

//set default CType
$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['default'] = 'textmedia';

//Remove Translate to
$GLOBALS['TCA']['tt_content']['columns']['header']['l10n_mode'] = '';
$GLOBALS['TCA']['tt_content']['columns']['bodytext']['l10n_mode'] = '';
