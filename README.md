# Agile in colours browser extension
Browser extension for adding colours to a  Zenhub dashboards to help with priorities.

## Why use the plugin
This plugin helps to visualise multiple issues from different repositories and give them a colour coding of your choosing to make it easy to understand at a glance different threads of work.
Typically, you have a number of github repos with issues and labels to represent different categories of work, different severities or priorities or other characteristics. You might already use Zenhub (https://www.zenhub.com/) for project management and have built a board.
You can use this plugin to add colour coding based on your labels.
For example, a severity 1 issue might appear as red, a story as green, a chore as yellow.


Here is a sample output with some made up issues in a test repo and real issues from this repo.
![Sample dashboard](https://github.com/doinaklinger/agile-colours/blob/master/images/sampleDashboard.pngg)

## Install

Choose the URL for which you want the plugin extension by clicking [here](https://github.com/doinaklinger/agile-colours/blob/master/manifest.json#L15).
Go[here]( https://github.com/doinaklinger/agile-colours/blob/master/content.js#L1) and customise your colour coding.

Ready to run it?
Go to chrome://extensions/ and enable developer mode (toggle on the right hand side).


Click on the **Load unpacked** and select this repo. The new extension
**Agile and colours** should be available.

Navigate to a URL that contains github.com.

The new browser extension, _Agile and Colours_ [](/images/2019/10/funnel_colours32.png) should be visible.
Click on it and the one drop down option in the menu to apply colours.



## What it does
This Chrome browser extension becomes active for URL starting with github.com and applies colours to the various Zenhub cards that are visible on the screen based on the labels they have and the rules coded here.


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
