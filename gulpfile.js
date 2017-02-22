var gulp = require('gulp');
var path = require('path');

var coreComponents = [{
    bowerComponent: 'jquery',
    distFiles: ['./dist/jquery.js']
}, {
    bowerComponent: 'jquery-ui',
    distFiles: ['jquery-ui.js','themes/base/jquery-ui.css']
}, {
    bowerComponent: 'handlebars',
    distFiles: ['handlebars.js']
}, {
    bowerComponent: 'underscore',
    distFiles: ['underscore.js']
}, {
    bowerComponent: 'backbone#1.1.2',
    distFiles: ['backbone.js']
}, {
//     id: 'Leaflet-active-area',
//     bowerComponent: 'Mappy/Leaflet-active-area',
//     distFiles: ['./src/leaflet.activearea.js']
// }, {
    id: 'Utils',
    srcDir: './external/GMXCommonComponents/Utils',
    build: false
}, {
    id: 'Popover',
    srcDir: './external/GMXCommonComponents/Popover',    
    distDir: './dist',
    build: true
}, {
    id: 'translations',
    url: 'http://maps.kosmosnimki.ru/api/translations.js'
}, {
    id: 'CommonStyles',
    srcDir: './external/GMXCommonComponents/CommonStyles',
    distDir: './dist',
    build: false
}, {
    id: 'Leaflet-IconLayers',
    srcDir: './external/Leaflet-IconLayers',
    distDir: './dist',
    build: false
}, {
    id: 'GmxIconLayers',
    srcDir: './external/GMXCommonComponents/GmxIconLayers',
    build: false
}, {
    id: 'GmxWidget',
    srcDir: './external/GMXCommonComponents/GmxWidget',
    build: false
}, {
    id: 'DropdownMenuWidget',
    srcDir: './external/GMXCommonComponents/DropdownMenuWidget',
    distDir: './build',
    build: true
}, {
    id: 'AuthManager',
    srcDir: './external/GMXCommonComponents/AuthManager',
    distDir: './build',
    build: true
}, {
    id: 'AuthWidget',
    srcDir: './external/GMXCommonComponents/AuthWidget',
    distDir: './build',
    build: true
}, {
    id: 'AlertWidget',
    srcDir: './external/GMXCommonComponents/AlertWidget',
    distDir: './build',
    build: true
}, {
    id: 'DateInterval',
    srcDir: './external/DateInterval',
    build: false
}, {
    id: 'LayersTree',
    srcDir: './external/LayersTree/src',
    build: false
}, {
//     id: 'animationHelpers',
//     srcDir: './external/GMXCommonComponents/animationHelpers',
//     build: false
// }, {
    id: 'CompositeScrollView',
    srcDir: './external/GMXCommonComponents/CompositeScrollView',
    build: false
}, {
    id: 'SwitchingCollectionWidget',
    srcDir: './external/GMXCommonComponents/SwitchingCollectionWidget',
    build: false
}, {
    id: 'IconSidebarControl',
    srcDir: './external/IconSidebarControl/dist',
    build: false
}, {
    id: 'ScrollView',
    srcDir: 'external/GMXCommonComponents/ScrollView',
    distDir: './build',
    build: true
}, {
    id: 'LayersTreeWidget',
    srcDir: './external/LayersTreeWidget',
    distDir: './dist',
    build: true
}, {
    id: 'CalendarWidget',
    srcDir: './external/CalendarWidget',
    distDir: './build',
    build: true
}, {
    id: 'BookmarksWidget',
    srcDir: './external/GMXCommonComponents/BookmarksWidget',
    distDir: './build',
    build: true
}, {
    id: 'StorytellingControl',
    srcDir: './external/GMXCommonComponents/StorytellingControl',    
    build: false
}, {
    id: 'storytellingAccordeonControl',
    srcDir: './external/GMXCommonComponents/StorytellingAccordeonControl',    
    build: false
}, {
    id: 'ShareIconControl',
    srcDir: './external/GMXCommonComponents/ShareIconControl',
    distDir: './build',
    build: true
}, {
    id: 'StateManager',
    srcDir: './external/GMXCommonComponents/StateManager',
    build: false
}, {
    id: 'PermalinkManager',
    srcDir: './external/GMXCommonComponents/PermalinkManager',
    build: false
}, {
    id: 'ComponentsManager',
    srcDir: './external/ComponentsManager',
    distDir: './build',
    build: true
}, {
    id: 'GMXCommonStyles',
    srcDir: './external/GMXCommonStyles',
    distDir: './build',
    build: false
}, {
    id: 'TransparencySliderWidget',
    srcDir: './external/GMXCommonComponents/TransparencySliderWidget',
    distDir: './build',
    build: true
}, {
    id: 'GridAnalysis',
    srcDir: './external/GridAnalysis',
    distDir: './dist',
    build: false
}, {
    id: 'winnie-core',
    srcDir: './external/winnie-core',
    distDir: './dist',
    build: true
}];

require('./external/GMXBuilder')(gulp, {
    tempDir: './temp',
    distDir: './dist',
    watchExtensions: ['.js', '.css', '.html', '.less', '.svg'],
    distributionExtensions: ['.js', '.css', '.jpg', '.png', '.eot', '.ttf', '.woff', '.svg']
}, [{
    id: 'winnie',
    components: coreComponents
}]);
