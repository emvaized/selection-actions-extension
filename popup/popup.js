document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('selecton-settings-label').innerHTML = chrome.i18n.getMessage("selectonSettings") ?? 'Selecton settings';

    let openSettingsInTabButton = document.getElementById('openSettingsInTabButton');
    openSettingsInTabButton.setAttribute('title', chrome.i18n.getMessage("openInNewTab") ?? 'Open in new tab');
    openSettingsInTabButton.addEventListener('click', function () {
        chrome.runtime.openOptionsPage();
        window.close();
    });

});