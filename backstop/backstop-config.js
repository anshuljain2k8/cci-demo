'use strict';

const BackstopReferenceBaseUrl = "https://dev-circleci-demo.pantheonsite.io";
const BackstopTestUrl = "http://circleci-md-circleci-demo.pantheonsite.io";

const simple_scenarios_paths = [
    "node/1"
];

const config = {
    "id": "backstop_default",
    "viewports": [
        {
            "label": "desktop",
            "width": 1440,
            "height": 900
        },
        {
            "label": "phone",
            "width": 320,
            "height": 480
        }
    ],
    "scenarios": [
        {
            "label": "Homepage",
            "url": BackstopTestUrl + "/",
            "referenceUrl": BackstopReferenceBaseUrl + "",
            "hideSelectors": ["#comments"],
            "removeSelectors": ["#comments"],
            "selectors": [
                "document"
            ],
            "readyEvent": null,
            "delay": 500,
            "misMatchThreshold" : 0.5
        }
    ],
    "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test": "backstop_data/bitmaps_test",
        "engine_scripts": "backstop_data/engine_scripts",
        "html_report": "backstop_data/html_report",
        "ci_report": "backstop_data/ci_report"
    },
    "report": ["browser"],
    "engine": "chrome",
    // Add a lower limit on comparisons (default was 50) that keeps CircleCI from
    // running out of memory on a 2GB instance.
    "asyncCompareLimit": 5,
    // "asyncCaptureLimit": 1
};

const simple_scenarios = simple_scenarios_paths.map(function(path) {
    return {
        "url": BackstopTestUrl + path,
        "referenceUrl":BackstopReferenceBaseUrl +  path,
        "label": path,
        "delay": 500,
        "removeSelectors": [".wp-block-embed-youtube", "iframe"]
    }
});

config.scenarios = config.scenarios.concat(simple_scenarios);
module.exports = config;
