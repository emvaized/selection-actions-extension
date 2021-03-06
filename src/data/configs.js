var configs = {
    'convertToCurrency': 'USD',
    'hideOnScroll': true,
    'convertMetrics': true,
    'addOpenLinks': true,
    'addFontFormatButtons': false,
    'addPasteButton': true,
    'convertCurrencies': true,
    'convertTime': true,
    'performSimpleMathOperations': true,
    'preferredMetricsSystem': 'metric',
    'showTranslateButton': true,
    'languageToTranslate': navigator.language || navigator.userLanguage || 'en',
    'ratesLastFetchedDate': '',
    'useCustomStyle': false,
    'tooltipBackground': '#3B3B3B',
    'tooltipOpacity': 1.0,
    'addTooltipShadow': false,
    'shadowOpacity': 0.5,
    'borderRadius': 3,
    'changeTextSelectionColor': false,
    'textSelectionBackground': '#338FFF',
    'textSelectionColor': '#ffffff',
    'shiftTooltipWhenWebsiteHasOwn': true,
    'addActionButtonsForTextFields': false,
    'removeSelectionOnActionButtonClick': true,
    'draggableTooltip': true,
    'enabled': true,
    'preferredSearchEngine': 'google',
    'hideOnKeypress': true,
    'showOnMapButtonEnabled': true,
    'showEmailButton': true,
    'preferredNewEmailMethod': 'mailto',
    'customSearchUrl': '',
    'preferredMapsService': 'google',
    'addColorPreviewButton': true,
    'secondaryTooltipEnabled': true,
    'secondaryTooltipIconSize': 15,
    'showSecondaryTooltipTitleOnHover': false,
    'excludedDomains': '',
    'addPhoneButton': true,
    'showUnconvertedValue': false,
    'debugMode': false,
    'buttonsStyle': 'onlylabel',
    'addDragHandles': true,
    'snapSelectionToWord': true,
    'preferCurrencySymbol': false,
    'shouldOverrideWebsiteSelectionColor': false,
    'disableWordSnappingOnCtrlKey': true,
    'showButtonLabelOnHover': true,
    'animationDuration': 300,
    'wordSnappingBlacklist': '',
    // 'tooltipRevealEffect': 'scaleUpTooltipEffect',
    'tooltipRevealEffect': 'moveUpTooltipEffect',
    'textSelectionBackgroundOpacity': 1.0,
    'updateRatesEveryDays': 14,
    'fontSize': 12.5,
    'secondaryTooltipLayout': 'horizontalLayout', /// Possible values: 'horizontalLayout', 'verticalLayout'
    'liveTranslation': false,
    'reverseTooltipButtonsOrder': false,
    'preferredTranslateService': 'google',
    'tooltipPosition': 'selectionCenter', /// Possible values: 'selectionCenter', 'overCursor'
    'customSearchButtons': [
        {
            'url': 'https://www.youtube.com/results?search_query=%s',
            'title': 'YouTube',
            'icon': 'https://icons-for-free.com/iconfiles/png/512/video+youtube+icon-1320192294490006733.png',
            'enabled': true
        },
        {
            'url': 'https://open.spotify.com/search/%s',
            'title': 'Spotify',
            'icon': 'https://image.flaticon.com/icons/png/512/2111/2111624.png',
            'enabled': true
        },
        {
            'url': 'https://aliexpress.com/wholesale?SearchText=%s',
            'title': 'Aliexpress',
            'icon': 'https://img.icons8.com/color/452/aliexpress.png',
            'enabled': true
        },
        {
            'url': 'https://www.amazon.com/s?k=%s',
            'title': 'Amazon',
            'icon': 'https://mapleleafdeals.com/wp-content/uploads/2020/08/amazon.png',
            'enabled': true
        },
        {
            'url': 'https://wikipedia.org/w/index.php?search=%s',
            'title': 'Wikipedia',
            'icon': 'https://pngimg.com/uploads/wikipedia/wikipedia_PNG16.png',
            'enabled': false
        },
        {
            'url': 'https://www.imdb.com/find?s=alt&q=%s',
            'title': 'IMDB',
            'icon': 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/171_Imdb_logo_logos-512.png',
            'enabled': false
        },
        {
            'url': 'https://google.com/search?q=site:%w %s',
            'title': 'Search on website',
            'enabled': false
        },
    ]
};