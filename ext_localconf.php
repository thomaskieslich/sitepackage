<?php
defined('TYPO3_MODE') or die();

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('
    <INCLUDE_TYPOSCRIPT: source="DIR:EXT:sitepackage/Configuration/UserTs" extensions="ts,tsconfig">
');

//metadata inheritance
$TYPO3_CONF_VARS['FE']['addRootLineFields'] .= ',abstract, keywords, description, backend_layout, backend_layout_next_level';

//add rte settings
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['custom1'] = 'EXT:sitepackage/Configuration/Yaml/Rte/Custom1.yaml';


$TYPO3_CONF_VARS['FE']['pageNotFound_handling'] = '/index.php?id=36';
$TYPO3_CONF_VARS['FE']['pageNotFound_handling_statheader'] = 'HTTP/1.1 404 Not Found';
