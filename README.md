# Funnel colours browser extension
Browser extension for adding colours to a  Zenhub dashboards to help with priorities.

## Why use the plugin

Here is a sample output

## Install
Go to chrome://extensions/ and enable developer mode (toggle on the right hand side).

Click on the **Load unpacked** and select this repo. The new extension
**Coloured Zenboard** should be available.
Navigate to a URL that contains github.ibm.com such as http://ibmurl.hursley.ibm.com/OPDE.
Any runtime problems with this extension will be visible on the extension tile at chrome://extensions/


The new browser extension, _Coloured Zenboard_ [](/images/2019/10/funnel_colours32.png) should be visible.
Click on it and the one drop down option in the menu to apply colours.



## What it does
This Chrome browser extension becomes active for URL starting with github.ibm.com and applies colours to the various Zenhub cards that are visible on the screen based on the labels they have and the rules coded here.

The current colouring rules are contained in the file content.js:
- issues labeled `GREEN`, `RCA-improvement`, `story`, or are from the `appconnect-planning` repository, get a lightgreen background colour.
- issues labeled `chore`, `enhancement`, `usability` or `bug` get a lightyellow colour.
- issues labeled `PINK`, `PRODUCTION ISSUE`, `PIPELINE BREAK`, `BUILD BREAK`, or are from the `appconnect-support`, `appconnect-integration-test` or `hip-ops-incidents` repositories, get a light red background colour.



## Gotchas

The initial colouring might take a couple of seconds. There is no feedback at the moment when this happens.

The extension uses the Zenhub css classes to identify the cards. If Zenhub changes this class, the extension will stop working.

The colours are not persisted. i.e. there is no access to Zenboard code and their way of constructing the DOM. The colours are redrawn every five seconds.
When the user interacts with the Zenhub dashboard, scrolling, moving issues in the pipeline, the issues might become briefly white, but the next redraw cycle should restore colours.

You can stop the colouring by disabling the plugin or reloading your browser.

# Removing Zenhub Sidebar

Install this browser extension for Chrome - https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne/

Install this style - https://userstyles.org/styles/157717/zenhub-kill-sidebar

Press `Stylus` button on toolbar -> `Manage` -> `Zenhub Kill Sidebar` -> clone at bottom of page -> change URL to github.ibm.com -> `Save` on top of left sidebar

This should automatically apply! To re-enable, press `Stylus` button on toolbar and untick the box


## Provenance
This has been developed starting from this sample https://developer.chrome.com/extensions/getstarted
The plugin is distributed under Apache licence.
