<?php
defined('TYPO3_MODE') or die();

// Add pageTSconfig
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    'sitepackage',
    'Configuration/PageTS/Page.tsconfig',
    'Template Site'
);
